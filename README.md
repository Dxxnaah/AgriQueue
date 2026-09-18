# AgriQueue (merged full-stack project)

Node.js + Express + MongoDB API for the AgriQueue procurement queue system, with
Socket.io for live queue/counter/display updates (no polling needed).

**This project now includes the frontend too.** `server.js` serves everything in
`public/` (your `index.html`, `css/style.css`, `js/script.js`) as static files, so
one `npm start` runs the whole app — open `http://localhost:5000` for the UI and
`http://localhost:5000/api/...` for the API, no separate frontend server needed.

> ⚠️ Note: the frontend in `public/` still runs on its own in-memory demo data
> (see "Frontend integration notes" below) — it is not yet calling this API. Serving
> it from the same Express app gets both pieces into one project/deployment, but the
> UI won't actually read/write real queue data until it's wired up as described below.

## Stack
- **Express** – REST API
- **MongoDB / Mongoose** – data storage
- **Socket.io** – real-time push (`queue:update`, `display:announce`)
- **JWT** (jsonwebtoken + bcryptjs) – staff/admin auth

## 1. Setup

```bash
npm install
cp .env.example .env
```

Edit `.env`:
- `MONGODB_URI` – point at a local MongoDB (`mongodb://127.0.0.1:27017/agriqueue`)
  or a free [MongoDB Atlas](https://www.mongodb.com/atlas) cluster connection string.
- `JWT_SECRET` – any long random string.
- `CLIENT_ORIGIN` – the URL your frontend is served from (e.g. `http://localhost:5500`
  if using VSCode Live Server, or `*` while developing).

If you don't have MongoDB installed locally, the fastest path is a free Atlas cluster:
https://www.mongodb.com/cloud/atlas/register — create a cluster, add a database user,
allow access from your IP (or 0.0.0.0/0 for a hackathon demo), and copy the connection
string into `MONGODB_URI`.

## 2. Seed demo data

```bash
npm run seed
```

This creates:
- One centre: **Tamil Nadu Procurement Centre** (prints its `_id` — copy this into
  your frontend config, see Integration section below)
- Staff login: `staff` / `password123`
- Admin login: `admin` / `password123`
- 5 counters, with counters 1–3 already serving, matching the frontend's demo state
- 12 demo queue tokens (same farmers/crops as the current frontend mock data)

## 3. Run

```bash
npm run dev      # with nodemon (auto-restart)
# or
npm start
```

Server starts on `http://localhost:5000`. Check `GET /api/health`.

## API Reference

All bodies/responses are JSON. Routes marked 🔒 require `Authorization: Bearer <token>`
from `/api/auth/login`.

### Auth
| Method | Route | Body | Notes |
|---|---|---|---|
| POST | `/api/auth/login` | `{ username, password }` | returns `{ token, staff }` |
| POST | `/api/auth/register` | `{ username, password, role, centre }` | creates a staff/admin account |

### Centres
| Method | Route | Notes |
|---|---|---|
| GET | `/api/centres` | list centres (id, name, location, activeCounters) |

### Queue (farmer-facing)
| Method | Route | Body / Query | Notes |
|---|---|---|---|
| GET | `/api/queue/slot-info` | `?centreId=&date=&slot=` | tokens booked + estimated wait for a slot, before booking |
| POST | `/api/queue/join` | `{ farmerName, mobile, aadhaar, bankAccount, centreId, cropType, quantity, date, slot, type }` | `type` = `online` or `kiosk`; returns `{ token, queuePosition, estWaitMinutes }` |
| GET | `/api/queue/status/:token` | — | live position + ETA for a farmer tracking their token |
| DELETE | `/api/queue/:token` | — | farmer leaves the queue (only while `waiting`) |
| GET 🔒 | `/api/queue` | `?centreId=&status=&type=&date=` | full queue listing, staff dashboard table |

### Counters (staff) 🔒
| Method | Route | Body |
|---|---|---|
| GET | `/api/counters?centreId=` | — |
| POST | `/api/counters/:number/call-next` | `{ centreId }` — completes current token (if any) and pulls next waiting token |
| POST | `/api/counters/:number/complete` | `{ centreId }` |
| POST | `/api/counters/:number/recall` | `{ centreId }` — re-emits the announcement, no state change |

### Procurement pipeline (staff) 🔒
| Method | Route | Body |
|---|---|---|
| POST | `/api/procurement/:token/quality` | `{ moisture, impurities, foreignMatter, status, remarks }` |
| POST | `/api/procurement/:token/weight` | `{ grossWeight, tareWeight, moistureDeduction }` |
| POST | `/api/procurement/:token/payment` | `{ method, reference }` — amount is computed server-side from `finalWeight × centre MSP rate`, never trust a client-sent amount |

### Kiosk
| Method | Route | Body |
|---|---|---|
| POST | `/api/kiosk/token` | `{ farmerId, centreId, cropType, quantity }` — walk-in token, date/slot auto-set to now |

### Display screen (public)
| Method | Route | Query |
|---|---|---|
| GET | `/api/display` | `?centreId=` — counters + next 10 waiting tokens |

### Admin 🔒
| Method | Route | Query |
|---|---|---|
| GET | `/api/admin/stats` | `?centreId=&date=` — totals, online/kiosk split, wait time, crop distribution |
| GET | `/api/admin/payments` | `?centreId=&date=` — payment records |

## Real-time events (Socket.io)

Connect from the frontend:
```js
const socket = io('http://localhost:5000');
socket.on('queue:update', (payload) => { /* refetch queue/counters/stats as needed */ });
socket.on('display:announce', ({ token, counter }) => { /* flash + speak the token on the display screen */ });
```

`queue:update` fires on every join/leave/call-next/complete/quality/weight/payment —
treat it as "something changed, re-fetch the view you're showing" rather than parsing
its payload deeply.

## Frontend integration notes

Your current `sih.html` keeps all state in in-memory JS arrays (`queueData`,
`counterData`) with no `fetch` calls, so it resets on every reload. To wire it to
this API:

1. Add near the top of the `<script>` block:
   ```js
   const API_BASE = 'http://localhost:5000/api';
   const CENTRE_ID = 'PASTE_CENTRE_ID_FROM_SEED_OUTPUT';
   let authToken = null; // set after staff login
   const socket = io('http://localhost:5000'); // add <script src="https://cdn.socket.io/4.7.5/socket.io.min.js"></script>
   ```
2. Replace `initQueueData()`/`initCounterData()` + the in-memory arrays with calls to
   `GET /api/queue?centreId=...` and `GET /api/counters?centreId=...`, called on page
   load and whenever `socket.on('queue:update', ...)` fires.
3. In the login form handler, `POST /api/auth/login` and store the returned `token`
   for subsequent 🔒 requests (`Authorization: Bearer <token>`).
4. In `callNextToken`, `completeCurrentToken`, `recallToken`, replace the local array
   mutation with the matching `POST /api/counters/:number/...` call.
5. In the booking form submit handler, `POST /api/queue/join` instead of pushing to
   `queueData` locally, and use the returned `token`/`queuePosition`/`estWaitMinutes`.
6. In the quality/weight/payment modals, `POST` to the matching `/api/procurement/:token/...`
   route instead of writing to local objects.

Happy to do this wiring directly in your HTML file if you'd like — just say the word.
