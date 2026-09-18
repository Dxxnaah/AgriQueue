// ===================================================================================
// DEMO / MOCK Aadhaar OTP verification.
//
// IMPORTANT: This does NOT talk to UIDAI. Real Aadhaar e-KYC/OTP authentication is
// only possible for a licensed AUA/KUA (Authentication User Agency) using UIDAI's
// signed & encrypted Auth API, or via a licensed third-party provider (Surepass,
// Signzy, Karza, DigiLocker, etc.) that already holds that license.
//
// This controller simulates the same UX (send OTP -> verify OTP -> mark verified)
// using an in-memory store, so the Farmer Portal flow can be built and tested end
// to end. Swap `sendOtp`'s TODO block for a real provider call when one is available,
// and remove `devOtp` from the response (it exists only so the demo works without SMS).
// ===================================================================================

const OTP_TTL_MS = 5 * 60 * 1000;      // OTP valid for 5 minutes
const RESEND_COOLDOWN_MS = 30 * 1000;   // must wait 30s between sends
const MAX_ATTEMPTS = 5;                 // lock after 5 wrong tries

// aadhaar -> { otp, expiresAt, attempts, lastSentAt }
const otpStore = new Map();
// aadhaar -> verifiedAt (timestamp) — lets other controllers check verification later if needed
const verifiedStore = new Map();

// Periodically clear stale entries so the Map doesn't grow forever in a long-running process
setInterval(() => {
  const now = Date.now();
  for (const [aadhaar, entry] of otpStore.entries()) {
    if (entry.expiresAt < now) otpStore.delete(aadhaar);
  }
}, 60 * 1000).unref();

function isValidAadhaar(aadhaar) {
  return typeof aadhaar === 'string' && /^[0-9]{12}$/.test(aadhaar);
}

function generateOtp() {
  return String(Math.floor(100000 + Math.random() * 900000)); // 6 digits, no leading zero issue
}

// POST /api/aadhaar/send-otp   Body: { aadhaar }
async function sendOtp(req, res) {
  const { aadhaar } = req.body;

  if (!isValidAadhaar(aadhaar)) {
    return res.status(400).json({ error: 'Enter a valid 12-digit Aadhaar number' });
  }

  const existing = otpStore.get(aadhaar);
  if (existing && Date.now() - existing.lastSentAt < RESEND_COOLDOWN_MS) {
    const waitSeconds = Math.ceil((RESEND_COOLDOWN_MS - (Date.now() - existing.lastSentAt)) / 1000);
    return res.status(429).json({ error: `Please wait ${waitSeconds}s before requesting another OTP` });
  }

  const otp = generateOtp();
  otpStore.set(aadhaar, {
    otp,
    expiresAt: Date.now() + OTP_TTL_MS,
    attempts: 0,
    lastSentAt: Date.now()
  });

  // TODO(production): replace this block with a real SMS/UIDAI e-KYC provider call.
  // e.g. await smsGateway.send(mobileLinkedToAadhaar, `Your AgriQueue OTP is ${otp}`)
  console.log(`[aadhaar-otp][DEMO] OTP for ${aadhaar}: ${otp} (expires in ${OTP_TTL_MS / 1000}s)`);

  res.json({
    success: true,
    message: 'OTP sent (demo mode — no real SMS is sent)',
    expiresInSeconds: OTP_TTL_MS / 1000,
    // Only present because this is a demo flow with no SMS gateway wired up.
    // Remove this field entirely once a real provider is integrated.
    devOtp: otp
  });
}

// POST /api/aadhaar/verify-otp   Body: { aadhaar, otp }
async function verifyOtp(req, res) {
  const { aadhaar, otp } = req.body;

  if (!isValidAadhaar(aadhaar)) {
    return res.status(400).json({ error: 'Enter a valid 12-digit Aadhaar number' });
  }
  if (!otp || !/^[0-9]{6}$/.test(otp)) {
    return res.status(400).json({ error: 'Enter the 6-digit OTP' });
  }

  const entry = otpStore.get(aadhaar);
  if (!entry) {
    return res.status(400).json({ error: 'No OTP was requested for this Aadhaar number, or it already expired' });
  }
  if (Date.now() > entry.expiresAt) {
    otpStore.delete(aadhaar);
    return res.status(400).json({ error: 'OTP expired. Please request a new one.' });
  }
  if (entry.attempts >= MAX_ATTEMPTS) {
    otpStore.delete(aadhaar);
    return res.status(429).json({ error: 'Too many incorrect attempts. Please request a new OTP.' });
  }

  if (entry.otp !== otp) {
    entry.attempts += 1;
    return res.status(400).json({
      error: 'Incorrect OTP',
      attemptsRemaining: MAX_ATTEMPTS - entry.attempts
    });
  }

  otpStore.delete(aadhaar);
  verifiedStore.set(aadhaar, Date.now());

  res.json({ success: true, verified: true });
}

// GET /api/aadhaar/status/:aadhaar  (optional helper — lets the frontend re-check verification)
async function getStatus(req, res) {
  const { aadhaar } = req.params;
  if (!isValidAadhaar(aadhaar)) {
    return res.status(400).json({ error: 'Enter a valid 12-digit Aadhaar number' });
  }
  res.json({ verified: verifiedStore.has(aadhaar) });
}

module.exports = { sendOtp, verifyOtp, getStatus };