// ====== i18n translations ======
        const translations = {
            en: {
                nav_home: 'Home', nav_farmer: 'Farmer Portal', nav_display: 'Display', nav_staff: 'Staff', nav_admin: 'Admin',
                hero_title: 'One Queue. Two Access Modes. Zero Confusion.',
                hero_subtitle: 'A hybrid procurement queue system that fairly combines online and kiosk tokens into one real-time queue with live ETA, digital/voice announcements and end-to-end procurement and payment tracking.',
                hero_cta1: 'Farmer Portal',
                live_queue: 'Live Queue Status', centre_name: 'Tamil Nadu Procurement Centre',
                in_queue: 'In Queue', served_today: 'Served Today', avg_wait: 'Avg Wait (min)', active_counters: 'Active Counters',
                online_tokens: 'Online Tokens', kiosk_tokens: 'Kiosk Tokens',
                why_title: 'Why AgriQueue?', why_subtitle: 'Revolutionary queue management for government procurement centres',
                feat1_title: 'Hybrid Access', feat1_desc: 'Online + Kiosk tokens in one unified queue. No farmer is left behind due to digital exclusion.',
                feat2_title: 'Fair Queue Algorithm', feat2_desc: 'Alternating O-K-O-K token allocation ensures equitable access for both online and kiosk farmers.',
                feat3_title: 'Real-Time Visibility', feat3_desc: 'Live queue position and ETA help farmers plan their time efficiently instead of waiting blindly.',
                feat4_title: 'Physical Centre Automation', feat4_desc: 'Digital display and voice announcements ensure no farmer misses their turn, even without smartphones.',
                feat5_title: 'End-to-End Transparency', feat5_desc: 'Track quality check, weight measurement, procurement amount and payment status in real-time.',
                feat6_title: 'Operational Analytics', feat6_desc: 'Centre administrators get real-time insights to optimize capacity, reduce wait times and improve efficiency.',
                how_title: 'How It Works', how_subtitle: 'Simple 5-step process for farmers',
                step1: 'Register', step1_desc: 'Online or at kiosk', step2: 'Get Token', step2_desc: 'Online (O) or Kiosk (K)',
                step3: 'Wait Anywhere', step3_desc: 'Track via app/display', step4: 'Get Notified', step4_desc: 'Display + voice alert',
                step5: 'Procurement', step5_desc: 'Quality, Weight, Amount', step6: 'Payment', step6_desc: 'Track payment status',
                current_time: 'Current Time', est_turn: 'Est. Turn At', your_token: 'Your Token',
                position: 'Position', est_wait: 'Est. Wait', counter: 'Counter',
                waiting_msg: 'Waiting for your turn...', refresh: 'Refresh', leave: 'Leave Queue',
                proc_status: 'Procurement Status', quality_check: 'Quality Check', weight_measure: 'Weight Measurement',
                proc_amount: 'Procurement Amount', pay_status: 'Payment Status',
                book_slot: 'Book Your Slot', farmer_name: 'Farmer Name', mobile: 'Mobile Number',
                aadhaar: 'Aadhaar Number', bank_acc: 'Bank Account Number', bank_acc_confirm: 'Confirm Bank Account Number', centre: 'Procurement Centre',
                crop_type: 'Crop Type', est_qty: 'Estimated Quantity (kg)', pref_date: 'Preferred Date',
                pref_slot: 'Preferred Time Slot', book_btn: 'Book Slot & Get Token',
                slot_selected: 'Slot Selected', slot_timing: 'Slot Timing', tokens_in_slot: 'Tokens in Slot',
                avg_process_time: 'Avg. Processing Time', est_wait_for_slot: 'Est. Wait for This Slot',
                staff_login: 'Staff Login', username: 'Username', password: 'Password', login_btn: 'Login',
                staff_dash: 'Staff Dashboard', total_queue: 'Total in Queue', avg_wait_time: 'Avg Wait Time',
                served_tod: 'Served Today', ok_ratio: 'Online:Kiosk Ratio', proc_counters: 'Procurement Counters',
                queue_list: 'Queue List', call_next: 'Call Next', recall: 'Recall', complete: 'Complete',
                quality: 'Quality', weight: 'Weight', payment: 'Payment',
                current: 'Current', farmer_label: 'Farmer', crop_label: 'Crop', none: 'None', active_label: 'Active'
            },
            ta: {
                nav_home: 'முகப்பு', nav_farmer: 'விவசாயி போர்ட்டல்', nav_display: 'காட்சி', nav_staff: 'ஊழியர்', nav_admin: 'நிர்வாகம்',
                hero_title: 'ஒரு வரிசை. இரண்டு அணுகல் முறைகள். பூஜ்ஜிய குழப்பம்.',
                hero_subtitle: 'ஆன்லைன் மற்றும் கியோஸ்க் டோக்கன்களை ஒரே நேரத்தில் ஒன்றிணைக்கும், நேரடி ETA, டிஜிட்டல்/குரல் அறிவிப்புகள் மற்றும் முனைவரையான கொள்முதல் மற்றும் கட்டண கண்காணிப்புடன் கலப்பின கொள்முதல் வரிசை அமைப்பு.',
                hero_cta1: 'விவசாயி போர்ட்டல்',
                live_queue: 'நேரடி வரிசை நிலை', centre_name: 'தமிழ்நாடு கொள்முதல் மையம்',
                in_queue: 'வரிசையில்', served_today: 'இன்று சேவையளித்தது', avg_wait: 'சராசரி காத்திருப்பு (நிமி)', active_counters: 'செயலில் உள்ள கவுன்டர்கள்',
                online_tokens: 'ஆன்லைன் டோக்கன்கள்', kiosk_tokens: 'கியோஸ்க் டோக்கன்கள்',
                why_title: 'ஏன் AgriQueue?', why_subtitle: 'அரசு கொள்முதல் மையங்களுக்கான புரட்சிகர வரிசை மேலாண்மை',
                feat1_title: 'கலப்பின அணுகல்', feat1_desc: 'ஒரே ஒருங்கிணைந்த வரிசையில் ஆன்லைன் + கியோஸ்க் டோக்கன்கள். டிஜிட்டல் ஒதுக்கீடு காரணமாக எந்த விவசாயியும் தவறவிடப்படமாட்டார்.',
                feat2_title: 'நியாயமான வரிசை அல்காரிதம்', feat2_desc: 'மாறுபடும் O-K-O-K டோக்கன் ஒதுக்கீடு இரண்டு வகை விவசாயிகளுக்கும் சம அணுகலை உறுதி செய்கிறது.',
                feat3_title: 'நேரடி புலப்பாடு', feat3_desc: 'நேரடி வரிசை நிலை மற்றும் ETA விவசாயிகள் திறம்பட திட்டமிட உதவுகிறது.',
                feat4_title: 'உடல் மைய ஆட்டோமேஷன்', feat4_desc: 'டிஜிட்டல் காட்சி மற்றும் குரல் அறிவிப்புகள் ஸ்மார்ட்போன் இல்லாமலும் யாரும் தவறவிடாததை உறுதி செய்கிறது.',
                feat5_title: 'முனைவரை வெளிப்படைத்தன்மை', feat5_desc: 'தர சரிபார்ப்பு, எடை அளவீடு, கொள்முதல் தொகை மற்றும் கட்டண நிலையை நேரடியாக கண்காணிக்கவும்.',
                feat6_title: 'செயல்பாட்டு அனலிட்டிக்ஸ்', feat6_desc: 'மைய நிர்வாகிகள் திறனை மேம்படுத்த நேரடி நுண்ணறிவுகளைப் பெறுகிறார்கள்.',
                how_title: 'எப்படி செயல்படுகிறது', how_subtitle: 'விவசாயிகளுக்கான எளிய 5-படி செயல்முறை',
                step1: 'பதிவு செய்க', step1_desc: 'ஆன்லைன் அல்லது கியோஸ்கில்', step2: 'டோக்கன் பெறுக', step2_desc: 'ஆன்லைன் (O) அல்லது கியோஸ்க் (K)',
                step3: 'எங்கு வேண்டுமானாலும் காத்திரு', step3_desc: 'ஆப்/காட்சி வழியாக கண்காணிக்கவும்', step4: 'அறிவிப்பு பெறுக', step4_desc: 'காட்சி + குரல் அறிவிப்பு',
                step5: 'கொள்முதல்', step5_desc: 'தரம், எடை, தொகை', step6: 'கட்டணம்', step6_desc: 'கட்டண நிலையை கண்காணிக்கவும்',
                current_time: 'தற்போதைய நேரம்', est_turn: 'மதிப்பீட்டு முறை', your_token: 'உங்கள் டோக்கன்',
                position: 'நிலை', est_wait: 'மதிப்பீட்டு காத்திருப்பு', counter: 'கவுன்டர்',
                waiting_msg: 'உங்கள் முறைக்காக காத்திருக்கிறது...', refresh: 'புதுப்பி', leave: 'வரிசையை விட்டு வெளியேறு',
                proc_status: 'கொள்முதல் நிலை', quality_check: 'தர சரிபார்ப்பு', weight_measure: 'எடை அளவீடு',
                proc_amount: 'கொள்முதல் தொகை', pay_status: 'கட்டண நிலை',
                book_slot: 'உங்கள் ஸ்லாட்டை முன்பதிவு செய்க', farmer_name: 'விவசாயி பெயர்', mobile: 'மொபைல் எண்',
                aadhaar: 'ஆதார் எண்', bank_acc: 'வங்கி கணக்கு எண்', bank_acc_confirm: 'வங்கி கணக்கு எண்ணை உறுதிப்படுத்தவும்', centre: 'கொள்முதல் மையம்',
                crop_type: 'பயிர் வகை', est_qty: 'மதிப்பீட்டு அளவு (கிகி)', pref_date: 'விரும்பிய தேதி',
                pref_slot: 'விரும்பிய நேர ஸ்லாட்', book_btn: 'ஸ்லாட் முன்பதிவு & டோக்கன் பெறுக',
                slot_selected: 'தேர்ந்தெடுத்த ஸ்லாட்', slot_timing: 'ஸ்லாட் நேரம்', tokens_in_slot: 'ஸ்லாட்டில் உள்ள டோக்கன்கள்',
                avg_process_time: 'சராசரி செயலாக்க நேரம்', est_wait_for_slot: 'இந்த ஸ்லாட்டுக்கான மதிப்பீட்டு காத்திருப்பு',
                staff_login: 'ஊழியர் உள்நுழைவு', username: 'பயனர்பெயர்', password: 'கடவுச்சொல்', login_btn: 'உள்நுழை',
                staff_dash: 'ஊழியர் டாஷ்போர்டு', total_queue: 'வரிசையில் மொத்தம்', avg_wait_time: 'சராசரி காத்திருப்பு நேரம்',
                served_tod: 'இன்று சேவையளித்தது', ok_ratio: 'ஆன்லைன்:கியோஸ்க் விகிதம்', proc_counters: 'கொள்முதல் கவுன்டர்கள்',
                queue_list: 'வரிசை பட்டியல்', call_next: 'அடுத்து அழை', recall: 'மீண்டும் அறிவி', complete: 'முடி',
                quality: 'தரம்', weight: 'எடை', payment: 'கட்டணம்',
                current: 'தற்போதைய', farmer_label: 'விவசாயி', crop_label: 'பயிர்', none: 'எதுவுமில்லை', active_label: 'செயலில்'
            }
        };
        let currentLang = 'en';

        function setLanguage(lang) {
            currentLang = lang;
            document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
            event.target.classList.add('active');
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (translations[lang][key]) el.textContent = translations[lang][key];
            });
            // Rebuild staff counters if on that page
            if (document.getElementById('staffDashboard').classList.contains('active') && isLoggedIn) {
                buildStaffCounters();
            }
        }

        function t(key) { return translations[currentLang][key] || translations['en'][key] || key; }

        // ====== Global State ======
        let isLoggedIn = false;
        let currentToken = null;
        let servedCount = 156;
        const ACTIVE_COUNTERS = 5;
        const AVG_PROCESS_MIN = 9;

        // MSP Rates per crop (in ₹ per kg)
        const mspRates = { paddy: 20.40, wheat: 22.75, rice: 30.00 };
        let activeModalCounter = null; // Tracks which counter opened the modal

        // Slot configuration: tokens already booked per slot per date (simulated)
        const slotConfig = {
            morning:   { label: 'Morning',   timing: '8:00 AM - 12:00 PM', startH: 8,  endH: 12, capacity: 80 },
            afternoon: { label: 'Afternoon', timing: '12:00 PM - 4:00 PM', startH: 12, endH: 16, capacity: 80 },
            evening:   { label: 'Evening',   timing: '4:00 PM - 8:00 PM',  startH: 16, endH: 20, capacity: 80 }
        };

        // Simulated tokens already booked for today's slots
        const slotBookings = { morning: 48, afternoon: 32, evening: 20 };

        let queueData = [];
        let counterData = {};

        function initCounterData() {
            counterData = {
                1: { current: 'O-021', farmer: 'Rajesh Kumar', crop: 'Paddy', status: 'active', serving: true },
                2: { current: 'K-022', farmer: 'Suresh Yadav', crop: 'Wheat', status: 'active', serving: true },
                3: { current: 'O-023', farmer: 'Anita Devi', crop: 'Paddy', status: 'active', serving: true },
                4: { current: 'K-024', farmer: 'Mohan Singh', crop: 'Rice', status: 'active', serving: false },
                5: { current: 'O-025', farmer: 'Priya Sharma', crop: 'Paddy', status: 'active', serving: false }
            };
        }

        function initQueueData() {
            queueData = [
                { token: 'O-021', farmer: 'Rajesh Kumar',  type: 'online', crop: 'Paddy', quantity: '2500', status: 'serving', counter: 1 },
                { token: 'K-022', farmer: 'Suresh Yadav',  type: 'kiosk',  crop: 'Wheat', quantity: '1800', status: 'serving', counter: 2 },
                { token: 'O-023', farmer: 'Anita Devi',    type: 'online', crop: 'Paddy', quantity: '3200', status: 'serving', counter: 3 },
                { token: 'K-024', farmer: 'Mohan Singh',   type: 'kiosk',  crop: 'Rice',  quantity: '1500', status: 'waiting', counter: null },
                { token: 'O-025', farmer: 'Priya Sharma',  type: 'online', crop: 'Paddy', quantity: '2100', status: 'waiting', counter: null },
                { token: 'K-026', farmer: 'Ramesh Patel',  type: 'kiosk',  crop: 'Wheat', quantity: '2800', status: 'waiting', counter: null },
                { token: 'O-027', farmer: 'Sunita Devi',   type: 'online', crop: 'Paddy', quantity: '1900', status: 'waiting', counter: null },
                { token: 'K-028', farmer: 'Vijay Kumar',   type: 'kiosk',  crop: 'Rice',  quantity: '2400', status: 'waiting', counter: null },
                { token: 'O-029', farmer: 'Meena Kumari',  type: 'online', crop: 'Paddy', quantity: '1700', status: 'waiting', counter: null },
                { token: 'K-030', farmer: 'Ajay Singh',    type: 'kiosk',  crop: 'Wheat', quantity: '2200', status: 'waiting', counter: null },
                { token: 'O-031', farmer: 'Kavita Sharma', type: 'online', crop: 'Paddy', quantity: '2600', status: 'waiting', counter: null },
                { token: 'K-032', farmer: 'Ravi Verma',    type: 'kiosk',  crop: 'Rice',  quantity: '1400', status: 'waiting', counter: null },
            ];
        }

        // ====== ETA Calculation ======
        // Position-based ETA for a specific counter: how long until THIS counter calls this farmer
        function calculateETAForToken(queuePosition) {
            const waitingAhead = queueData.filter(q => q.status === 'waiting').length;
            const servingNow = queueData.filter(q => q.status === 'serving').length;
            const totalAhead = waitingAhead; // tokens ahead that haven't been served yet
            const etaMinutes = Math.ceil((totalAhead * AVG_PROCESS_MIN) / ACTIVE_COUNTERS);
            return etaMinutes;
        }

        function calculateETAToSpecificTime(targetDateStr, slotKey) {
            const slot = slotConfig[slotKey];
            if (!slot) return '-';
            const now = new Date();
            const targetDate = new Date(targetDateStr + 'T' + String(slot.startH).padStart(2,'0') + ':00:00');
            const diffMs = targetDate - now;
            if (diffMs <= 0) {
                // Slot already started or passed, use queue-based ETA
                const booked = slotBookings[slotKey] || 0;
                const remainingCapacity = slot.capacity - booked;
                const etaMinutes = Math.ceil((booked * AVG_PROCESS_MIN) / ACTIVE_COUNTERS);
                return etaMinutes + ' min';
            }
            const diffMins = Math.ceil(diffMs / 60000);
            if (diffMins < 60) return diffMins + ' min';
            const hrs = Math.floor(diffMins / 60);
            const mins = diffMins % 60;
            return hrs + 'h ' + mins + 'm';
        }

        function getSlotEstimation(dateStr, slotKey) {
            const slot = slotConfig[slotKey];
            const booked = slotBookings[slotKey] || 0;
            const now = new Date();
            const slotStart = new Date(dateStr + 'T' + String(slot.startH).padStart(2,'0') + ':00:00');
            const slotEnd = new Date(dateStr + 'T' + String(slot.endH).padStart(2,'0') + ':00:00');

            // If slot is today and already started
            const isToday = dateStr === now.toISOString().split('T')[0];
            let waitFromQueueStart;
            if (isToday && now >= slotStart) {
                // Calculate based on current queue position within this slot
                waitFromQueueStart = Math.ceil((booked * AVG_PROCESS_MIN) / ACTIVE_COUNTERS);
            } else if (isToday && now < slotStart) {
                // Slot hasn't started yet - wait = time to slot start + queue processing
                const minsToStart = Math.ceil((slotStart - now) / 60000);
                const queueProcessTime = Math.ceil((booked * AVG_PROCESS_MIN) / ACTIVE_COUNTERS);
                waitFromQueueStart = minsToStart + queueProcessTime;
            } else {
                // Future date - wait = time to slot start + queue processing
                const minsToStart = Math.ceil((slotStart - now) / 60000);
                const queueProcessTime = Math.ceil((booked * AVG_PROCESS_MIN) / ACTIVE_COUNTERS);
                waitFromQueueStart = minsToStart + queueProcessTime;
            }

            if (waitFromQueueStart < 60) return waitFromQueueStart + ' min';
            const hrs = Math.floor(waitFromQueueStart / 60);
            const mins = waitFromQueueStart % 60;
            return hrs + 'h ' + mins + 'm';
        }

        // ====== Slot info update on date/slot change ======
        function updateSlotInfo() {
            const dateStr = document.getElementById('preferredDate').value;
            const slotKey = document.getElementById('timeSlot').value;
            const box = document.getElementById('slotInfoBox');
            if (!dateStr || !slotKey) { box.classList.remove('show'); return; }
            const slot = slotConfig[slotKey];
            const booked = slotBookings[slotKey] || 0;
            document.getElementById('slotInfoName').textContent = slot.label + ' Slot';
            document.getElementById('slotInfoTiming').textContent = slot.timing;
            document.getElementById('slotInfoTokens').textContent = booked + ' / ' + slot.capacity;
            document.getElementById('slotInfoCounters').textContent = ACTIVE_COUNTERS;
            document.getElementById('slotInfoAvgTime').textContent = AVG_PROCESS_MIN + ' min';
            document.getElementById('slotInfoEstWait').textContent = getSlotEstimation(dateStr, slotKey);
            box.classList.add('show');
        }

        document.getElementById('preferredDate').addEventListener('change', updateSlotInfo);
        document.getElementById('timeSlot').addEventListener('change', updateSlotInfo);

        // ====== Navigation ======
        function showPage(pageId) {
            document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
            document.getElementById(pageId).classList.add('active');
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            document.querySelectorAll('.nav-link').forEach(l => {
                if (l.getAttribute('onclick') && l.getAttribute('onclick').includes(pageId)) l.classList.add('active');
            });
            if (pageId === 'staffDashboard' && isLoggedIn) refreshDashboard();
            if (pageId === 'adminDashboard') refreshAdminDashboard();
            if (pageId === 'displayScreen') updateDisplayScreen();
        }

        // ====== Login ======
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            if (document.getElementById('loginUsername').value === 'staff' && document.getElementById('loginPassword').value === 'password123') {
                isLoggedIn = true;
                showPage('staffDashboard');
                showNotification('Login Successful', 'Welcome to the Staff Dashboard');
            } else {
                showNotification('Login Failed', 'Invalid username or password');
            }
        });

        function handleLogout() { isLoggedIn = false; showPage('home'); showNotification('Logged Out', 'You have been logged out'); }

        // ====== Build Staff Counter Cards ======
        function buildStaffCounters() {
            for (let i = 1; i <= 3; i++) {
                const c = counterData[i];
                const isServing = c && c.serving;
                const currentDisplay = isServing ? c.current : t('none');
                const farmerDisplay = isServing ? c.farmer : '-';
                const cropDisplay = isServing ? c.crop : '-';
                document.getElementById('staffCounter' + i).innerHTML = `
                    <div class="counter-card ${isServing ? 'active' : 'inactive'}">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <h5 class="mb-0">Counter ${i}</h5>
                            <span class="badge ${isServing ? 'bg-success' : 'bg-secondary'}">${isServing ? t('active_label') : 'Idle'}</span>
                        </div>
                        <p class="text-muted mb-1">${t('current')}: <strong id="counter${i}Current">${currentDisplay}</strong></p>
                        <div class="d-flex justify-content-between mb-2">
                            <small class="text-muted">${t('farmer_label')}: <span id="counter${i}Farmer">${farmerDisplay}</span></small>
                            <small class="text-muted">${t('crop_label')}: <span id="counter${i}Crop">${cropDisplay}</span></small>
                        </div>
                        <div class="d-flex gap-2 mb-2">
                            <button class="btn btn-sm btn-success flex-fill" onclick="callNextToken(${i})"><i class="bi bi-arrow-right"></i> ${t('call_next')}</button>
                            <button class="btn btn-sm btn-outline-secondary" onclick="recallToken(${i})" ${!isServing ? 'disabled' : ''}><i class="bi bi-megaphone"></i></button>
                            <button class="btn btn-sm btn-danger flex-fill" onclick="completeCurrentToken(${i})" ${!isServing ? 'disabled' : ''}><i class="bi bi-check-lg"></i> ${t('complete')}</button>
                        </div>
                        <div class="d-flex gap-2">
                            <button class="btn btn-sm btn-primary flex-fill" onclick="openModal('qualityModal', ${i})" ${!isServing ? 'disabled' : ''}><i class="bi bi-clipboard-check"></i> ${t('quality')}</button>
                            <button class="btn btn-sm btn-info flex-fill" onclick="openModal('weightModal', ${i})" ${!isServing ? 'disabled' : ''}><i class="bi bi-speedometer"></i> ${t('weight')}</button>
                            <button class="btn btn-sm btn-warning flex-fill" onclick="openModal('paymentModal', ${i})" ${!isServing ? 'disabled' : ''}><i class="bi bi-cash-stack"></i> ${t('payment')}</button>
                        </div>
                    </div>`;
            }
        }

        // ====== Call Next Token (per counter) ======
        function callNextToken(counterNum) {
            // First, mark current serving token on this counter as completed
            const currentServing = queueData.find(q => q.status === 'serving' && q.counter === counterNum);
            if (currentServing) {
                currentServing.status = 'completed';
                currentServing.counter = null;
                servedCount++;
            }

            // Find next waiting token (alternating O-K not enforced here since queue is pre-ordered)
            const nextWaiting = queueData.find(q => q.status === 'waiting');
            if (nextWaiting) {
                nextWaiting.status = 'serving';
                nextWaiting.counter = counterNum;
                counterData[counterNum] = {
                    current: nextWaiting.token,
                    farmer: nextWaiting.farmer,
                    crop: nextWaiting.crop,
                    status: 'active',
                    serving: true
                };
                announceToken(nextWaiting.token, counterNum);
                showNotification('Token Called', `Token ${nextWaiting.token} called to Counter ${counterNum}`);
            } else {
                counterData[counterNum].serving = false;
                counterData[counterNum].current = null;
                showNotification('Queue Empty', 'No more tokens waiting in queue');
            }

            refreshDashboard();
            updateDisplayScreen();
        }

        // ====== Complete Current Token at Counter ======
        function completeCurrentToken(counterNum) {
            const currentServing = queueData.find(q => q.status === 'serving' && q.counter === counterNum);
            if (currentServing) {
                currentServing.status = 'completed';
                currentServing.counter = null;
                servedCount++;
                counterData[counterNum].serving = false;
                counterData[counterNum].current = null;
                showNotification('Completed', `Token ${currentServing.token} service completed at Counter ${counterNum}`);
            }
            refreshDashboard();
            updateDisplayScreen();
        }

        // ====== Recall ======
        function recallToken(counterNum) {
            const c = counterData[counterNum];
            if (c && c.serving) {
                announceToken(c.current, counterNum);
                showNotification('Token Recalled', `Token ${c.current} recalled to Counter ${counterNum}`);
            }
        }

        // ====== Announce ======
        function announceToken(token, counter) {
            if ('speechSynthesis' in window) {
                const msg = `Token ${token}, please proceed to Counter ${counter}`;
                const u = new SpeechSynthesisUtterance(msg);
                u.rate = 0.9; u.pitch = 1; u.volume = 1;
                window.speechSynthesis.speak(u);
            }
        }

        // ====== Refresh Dashboard ======
        function refreshDashboard() {
            if (!isLoggedIn) { showPage('staffLogin'); return; }
            buildStaffCounters();
            populateQueueTable('all');
            const waiting = queueData.filter(q => q.status === 'waiting').length;
            document.getElementById('totalQueue').textContent = waiting;
            document.getElementById('avgWaitTime').textContent = Math.ceil((waiting * AVG_PROCESS_MIN) / ACTIVE_COUNTERS) + 'm';
            document.getElementById('servedToday').textContent = servedCount;
            const onlineCount = queueData.filter(q => q.type === 'online' && (q.status === 'waiting' || q.status === 'serving')).length;
            const kioskCount = queueData.filter(q => q.type === 'kiosk' && (q.status === 'waiting' || q.status === 'serving')).length;
            const total = onlineCount + kioskCount;
            document.getElementById('onlineKioskRatio').textContent = total > 0 ? Math.round(onlineCount/total*10) + ':' + Math.round(kioskCount/total*10) : '0:0';
        }

        // ====== Queue Table ======
        function populateQueueTable(filter) {
            const tbody = document.getElementById('queueTableBody');
            tbody.innerHTML = '';
            let data = queueData;
            if (filter !== 'all') data = queueData.filter(q => q.type === filter);
            data.forEach(item => {
                const statusClass = item.status === 'serving' ? 'bg-success' : item.status === 'waiting' ? 'bg-primary' : 'bg-secondary';
                const typeClass = item.type === 'online' ? 'bg-success' : 'bg-info';
                tbody.innerHTML += `<tr>
                    <td><strong>${item.token}</strong></td>
                    <td>${item.farmer}</td>
                    <td><span class="badge ${typeClass}">${item.type.charAt(0).toUpperCase()+item.type.slice(1)}</span></td>
                    <td>${item.crop}</td>
                    <td>${item.quantity}</td>
                    <td><span class="badge ${statusClass}">${item.status.charAt(0).toUpperCase()+item.status.slice(1)}${item.counter ? ' (C'+item.counter+')' : ''}</span></td>
                </tr>`;
            });
        }

        function filterQueue(filter) { populateQueueTable(filter); }

        // ====== Display Screen ======
        function updateDisplayScreen() {
            const serving = queueData.filter(q => q.status === 'serving');
            if (serving.length > 0) document.getElementById('currentTokenDisplay').textContent = serving[0].token;
            for (let i = 1; i <= 5; i++) {
                const el = document.getElementById('counter' + i + 'Display');
                if (counterData[i] && counterData[i].serving) {
                    el.textContent = counterData[i].current;
                } else {
                    el.textContent = '-';
                }
            }
            const waiting = queueData.filter(q => q.status === 'waiting').slice(0, 8);
            const list = document.getElementById('upcomingTokensList');
            list.innerHTML = '';
            waiting.forEach((item, idx) => {
                // ETA = (position in waiting list * avg time) / active counters
                const etaMin = Math.ceil(((idx + 1) * AVG_PROCESS_MIN) / ACTIVE_COUNTERS);
                const cls = item.type === 'online' ? 'online' : 'kiosk';
                list.innerHTML += `<div class="token-badge ${cls}"><span>${item.token}</span><span class="token-eta">~${etaMin} min</span></div>`;
            });
        }

        // ====== Farmer Portal: Field Validation ======
        const farmerFormFieldIds = [
            'farmerName', 'farmerId', 'farmerMobile', 'farmerAadhaar', 'farmerBank', 'farmerBankConfirm',
            'procurementCentre', 'cropType', 'estimatedQuantity', 'preferredDate', 'timeSlot'
        ];

        function validateFarmerField(field) {
            if (!field) return true;
            let valid = true;
            let customMessage = '';

            // Native HTML5 constraints (required, pattern, min, max, minlength, maxlength) first
            valid = field.checkValidity();

            // Extra rule: preferred date cannot be in the past
            if (valid && field.id === 'preferredDate' && field.value) {
                const today = new Date(); today.setHours(0, 0, 0, 0);
                const chosen = new Date(field.value + 'T00:00:00');
                if (chosen < today) {
                    valid = false;
                    customMessage = "Choose today's date or a future date.";
                }
            }

            // Extra rule: confirm bank account number must match the original
            if (valid && field.id === 'farmerBankConfirm') {
                const original = document.getElementById('farmerBank').value.trim();
                if (field.value.trim() !== original) {
                    valid = false;
                    customMessage = 'Account numbers do not match.';
                }
            }

            const feedbackEl = field.closest('.col-md-6, .col-12').querySelector('.invalid-feedback');
            if (!valid) {
                field.classList.add('is-invalid');
                field.classList.remove('is-valid');
                if (feedbackEl) {
                    if (customMessage) feedbackEl.textContent = customMessage;
                    feedbackEl.style.display = 'block';
                }
            } else {
                field.classList.remove('is-invalid');
                field.classList.add('is-valid');
                if (feedbackEl) feedbackEl.style.display = 'none';
            }
            return valid;
        }

        function validateFarmerForm() {
            let formValid = true;
            farmerFormFieldIds.forEach(id => {
                const field = document.getElementById(id);
                const fieldValid = validateFarmerField(field);
                if (!fieldValid) formValid = false;
            });

            // Aadhaar must additionally be OTP-verified, not just correctly formatted
            const aadhaarField = document.getElementById('farmerAadhaar');
            if (!aadhaarVerified || aadhaarField.value.trim() !== verifiedAadhaarValue) {
                aadhaarField.classList.add('is-invalid');
                aadhaarField.classList.remove('is-valid');
                const feedbackEl = aadhaarField.closest('.col-md-6, .col-12').querySelector('.invalid-feedback');
                if (feedbackEl) {
                    feedbackEl.textContent = 'Please verify your Aadhaar number using OTP before submitting.';
                    feedbackEl.style.display = 'block';
                }
                formValid = false;
            }

            return formValid;
        }

        // ====== Farmer Portal: Aadhaar OTP Verification (demo mode) ======
        let aadhaarVerified = false;
        let verifiedAadhaarValue = '';
        let aadhaarResendInterval = null;

        function showAadhaarOtpError(message) {
            const el = document.getElementById('aadhaarOtpError');
            el.textContent = message;
            el.style.display = message ? 'block' : 'none';
        }

        function startAadhaarResendCountdown() {
            const resendBtn = document.getElementById('resendAadhaarOtpBtn');
            const timerEl = document.getElementById('otpResendTimer');
            let secondsLeft = 30;
            resendBtn.disabled = true;
            timerEl.textContent = secondsLeft;
            clearInterval(aadhaarResendInterval);
            aadhaarResendInterval = setInterval(() => {
                secondsLeft -= 1;
                if (secondsLeft <= 0) {
                    clearInterval(aadhaarResendInterval);
                    resendBtn.disabled = false;
                    resendBtn.textContent = 'Resend OTP';
                } else {
                    timerEl.textContent = secondsLeft;
                }
            }, 1000);
        }

        function resetAadhaarVerification() {
            aadhaarVerified = false;
            verifiedAadhaarValue = '';
            clearInterval(aadhaarResendInterval);
            document.getElementById('farmerAadhaar').readOnly = false;
            document.getElementById('sendAadhaarOtpBtn').style.display = '';
            document.getElementById('sendAadhaarOtpBtn').disabled = false;
            document.getElementById('sendAadhaarOtpBtn').textContent = 'Send OTP';
            document.getElementById('aadhaarOtpSection').style.display = 'none';
            document.getElementById('aadhaarOtpInput').value = '';
            document.getElementById('aadhaarVerifiedBadge').style.display = 'none';
            showAadhaarOtpError('');
            validateFarmerField(document.getElementById('farmerAadhaar'));
        }

        async function sendAadhaarOtp() {
            const aadhaarField = document.getElementById('farmerAadhaar');
            if (!validateFarmerField(aadhaarField)) return;

            const aadhaar = aadhaarField.value.trim();
            const sendBtn = document.getElementById('sendAadhaarOtpBtn');
            sendBtn.disabled = true;
            sendBtn.textContent = 'Sending...';
            showAadhaarOtpError('');

            try {
                const res = await fetch('/api/aadhaar/send-otp', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ aadhaar })
                });

                let data;
                try {
                    data = await res.json();
                } catch (parseErr) {
                    console.error('[aadhaar-otp] Non-JSON response — is the backend running with the aadhaar routes registered?', parseErr);
                    showAadhaarOtpError('Server did not return a valid response. Check that the backend is running with the Aadhaar routes added.');
                    sendBtn.disabled = false;
                    sendBtn.textContent = 'Send OTP';
                    return;
                }

                if (!res.ok) {
                    console.error('[aadhaar-otp] send-otp failed:', res.status, data);
                    showAadhaarOtpError(data.error || `Could not send OTP (HTTP ${res.status}). Please try again.`);
                    sendBtn.disabled = false;
                    sendBtn.textContent = 'Send OTP';
                    return;
                }

                document.getElementById('aadhaarOtpSection').style.display = 'block';
                document.getElementById('aadhaarOtpInput').value = '';
                document.getElementById('aadhaarOtpInput').focus();
                sendBtn.textContent = 'OTP Sent';
                startAadhaarResendCountdown();

                // Demo mode only: a real integration would text the OTP to the farmer's
                // registered mobile instead of returning it in the API response.
                const hint = document.getElementById('aadhaarOtpHint');
                hint.textContent = data.devOtp
                    ? `Demo mode: your OTP is ${data.devOtp} (valid for 5 minutes). No real SMS is sent.`
                    : 'OTP sent to the mobile number linked to this Aadhaar.';
            } catch (err) {
                console.error('[aadhaar-otp] Network error calling /api/aadhaar/send-otp:', err);
                showAadhaarOtpError('Could not reach the server. Make sure the app is running via the Node server (not opened as a local file), and that the Aadhaar routes are registered.');
                sendBtn.disabled = false;
                sendBtn.textContent = 'Send OTP';
            }
        }

        async function verifyAadhaarOtp() {
            const aadhaar = document.getElementById('farmerAadhaar').value.trim();
            const otp = document.getElementById('aadhaarOtpInput').value.trim();
            const verifyBtn = document.getElementById('verifyAadhaarOtpBtn');

            if (!/^[0-9]{6}$/.test(otp)) {
                showAadhaarOtpError('Enter the 6-digit OTP.');
                return;
            }

            verifyBtn.disabled = true;
            verifyBtn.textContent = 'Verifying...';
            showAadhaarOtpError('');

            try {
                const res = await fetch('/api/aadhaar/verify-otp', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ aadhaar, otp })
                });
                const data = await res.json();

                if (!res.ok || !data.verified) {
                    showAadhaarOtpError(data.error || 'Incorrect OTP. Please try again.');
                    verifyBtn.disabled = false;
                    verifyBtn.textContent = 'Verify';
                    return;
                }

                aadhaarVerified = true;
                verifiedAadhaarValue = aadhaar;
                clearInterval(aadhaarResendInterval);

                const aadhaarField = document.getElementById('farmerAadhaar');
                aadhaarField.readOnly = true;
                aadhaarField.classList.remove('is-invalid');
                aadhaarField.classList.add('is-valid');
                const feedbackEl = aadhaarField.closest('.col-md-6, .col-12').querySelector('.invalid-feedback');
                if (feedbackEl) feedbackEl.style.display = 'none';
                document.getElementById('sendAadhaarOtpBtn').style.display = 'none';
                document.getElementById('aadhaarOtpSection').style.display = 'none';
                document.getElementById('aadhaarVerifiedBadge').style.display = 'block';
                verifyBtn.disabled = false;
                verifyBtn.textContent = 'Verify';
            } catch (err) {
                showAadhaarOtpError('Network error while verifying OTP. Please try again.');
                verifyBtn.disabled = false;
                verifyBtn.textContent = 'Verify';
            }
        }

        document.getElementById('sendAadhaarOtpBtn').addEventListener('click', sendAadhaarOtp);
        document.getElementById('verifyAadhaarOtpBtn').addEventListener('click', verifyAadhaarOtp);
        document.getElementById('resendAadhaarOtpBtn').addEventListener('click', sendAadhaarOtp);
        document.getElementById('changeAadhaarBtn').addEventListener('click', resetAadhaarVerification);

        // If the farmer edits the Aadhaar number after verifying (shouldn't normally happen
        // since the field becomes read-only, but guards against programmatic changes too)
        document.getElementById('farmerAadhaar').addEventListener('input', function() {
            if (aadhaarVerified && this.value.trim() !== verifiedAadhaarValue) {
                resetAadhaarVerification();
            }
        });

        // Live validation: check as the farmer types/selects, so errors clear immediately once fixed
        farmerFormFieldIds.forEach(id => {
            const field = document.getElementById(id);
            if (!field) return;
            const eventName = (field.tagName === 'SELECT') ? 'change' : 'input';
            field.addEventListener(eventName, () => validateFarmerField(field));
            field.addEventListener('blur', () => validateFarmerField(field));
        });

        // Bank account confirmation: block paste so a copy-pasted typo can't sail through
        // unnoticed, and re-check the match whenever either field changes.
        document.getElementById('farmerBankConfirm').addEventListener('paste', (e) => e.preventDefault());
        document.getElementById('farmerBank').addEventListener('input', () => {
            const confirmField = document.getElementById('farmerBankConfirm');
            if (confirmField.value) validateFarmerField(confirmField);
        });

        // ====== Farmer Portal: Join Queue ======
        document.getElementById('joinQueueForm').addEventListener('submit', function(e) {
            e.preventDefault();

            if (!validateFarmerForm()) {
                const firstInvalid = document.querySelector('#joinQueueForm .is-invalid');
                if (firstInvalid) firstInvalid.focus({ preventScroll: false });
                return;
            }

            document.getElementById('loadingSpinner').classList.add('active');
            setTimeout(() => {
                document.getElementById('loadingSpinner').classList.remove('active');
                const onlineTokens = queueData.filter(q => q.type === 'online');
                const nextNum = onlineTokens.length + 30;
                const token = 'O-' + String(nextNum).padStart(3, '0');
                const waitingCount = queueData.filter(q => q.status === 'waiting').length;
                const newToken = {
                    token, farmer: document.getElementById('farmerName').value,
                    type: 'online', crop: document.getElementById('cropType').value,
                    quantity: document.getElementById('estimatedQuantity').value,
                    status: 'waiting', counter: null
                };
                queueData.push(newToken);
                currentToken = token;

                // Calculate accurate ETA based on selected slot
                const dateStr = document.getElementById('preferredDate').value;
                const slotKey = document.getElementById('timeSlot').value;
                let etaText;
                if (dateStr && slotKey) {
                    etaText = getSlotEstimation(dateStr, slotKey);
                } else {
                    const etaMin = Math.ceil(((waitingCount + 1) * AVG_PROCESS_MIN) / ACTIVE_COUNTERS);
                    etaText = etaMin + ' min';
                }

                document.getElementById('tokenStatus').style.display = 'block';
                document.getElementById('tokenNumber').textContent = token;
                document.getElementById('queuePosition').textContent = waitingCount + 1;
                document.getElementById('waitTime').textContent = etaText;
                document.getElementById('counterNumber').textContent = '-';
                const progress = Math.max(5, 100 - ((waitingCount + 1) * 5));
                document.getElementById('progressBar').style.width = progress + '%';

                // Calculate expected turn time
                const now = new Date();
                let etaMinutes;
                if (dateStr && slotKey) {
                    const slot = slotConfig[slotKey];
                    const slotStart = new Date(dateStr + 'T' + String(slot.startH).padStart(2,'0') + ':00:00');
                    const queueProcess = Math.ceil(((waitingCount + 1) * AVG_PROCESS_MIN) / ACTIVE_COUNTERS);
                    etaMinutes = Math.max(0, Math.ceil((slotStart - now) / 60000) + queueProcess);
                } else {
                    etaMinutes = Math.ceil(((waitingCount + 1) * AVG_PROCESS_MIN) / ACTIVE_COUNTERS);
                }
                const expectedTime = new Date(now.getTime() + etaMinutes * 60000);
                document.getElementById('expectedTime').textContent = expectedTime.toLocaleTimeString();

                showNotification('Token Booked', `Your token ${token} has been booked. ETA: ${etaText}`);
                
                // Start the pipeline tracker - auto-advances through confirmed → checked_in → waiting
                startPipelineOnBooking();
            }, 1500);
        });

        function refreshTokenStatus() {
            if (!currentToken) return;
            const td = queueData.find(q => q.token === currentToken);
            if (!td) return;
            const waitingAhead = queueData.filter(q => q.status === 'waiting' && queueData.indexOf(q) < queueData.indexOf(td)).length;
            const waitingCount = queueData.filter(q => q.status === 'waiting').length;
            document.getElementById('queuePosition').textContent = waitingAhead + 1;
            const etaMin = Math.ceil(((waitingAhead + 1) * AVG_PROCESS_MIN) / ACTIVE_COUNTERS);
            document.getElementById('waitTime').textContent = etaMin + ' min';
            const now = new Date();
            document.getElementById('expectedTime').textContent = new Date(now.getTime() + etaMin * 60000).toLocaleTimeString();
            document.getElementById('progressBar').style.width = Math.max(5, 100 - ((waitingAhead + 1) * 5)) + '%';
            if (td.status === 'serving') {
                document.getElementById('counterNumber').textContent = 'C' + td.counter;
                document.getElementById('statusMessage').innerHTML = '<i class="bi bi-check-circle me-2 text-success"></i>Your turn has arrived! Please proceed to Counter ' + td.counter;
                document.getElementById('procurementStatus').style.display = 'block';
            }
            showNotification('Updated', 'Token status refreshed');
        }

        function leaveQueue() {
            resetPipeline();
            if (!currentToken) return;
            const idx = queueData.findIndex(q => q.token === currentToken);
            if (idx !== -1) queueData.splice(idx, 1);
            document.getElementById('tokenStatus').style.display = 'none';
            document.getElementById('procurementStatus').style.display = 'none';
            currentToken = null;
            showNotification('Left Queue', 'You have left the queue');
        }

        // ====== Kiosk ======
        function kioskNextStep(step) {
            document.querySelectorAll('.kiosk-step').forEach(s => s.classList.remove('active'));
            document.getElementById('kioskStep' + step).classList.add('active');
            if (step === 3) generateKioskToken();
        }
        function generateKioskToken() {
            const kioskTokens = queueData.filter(q => q.type === 'kiosk');
            const token = 'K-' + String(kioskTokens.length + 22).padStart(3, '0');
            const waitingCount = queueData.filter(q => q.status === 'waiting').length;
            queueData.push({ token, farmer: 'Kiosk Farmer', type: 'kiosk', crop: document.getElementById('kioskCropType').value, quantity: document.getElementById('kioskQuantity').value, status: 'waiting', counter: null });
            const etaMin = Math.ceil(((waitingCount + 1) * AVG_PROCESS_MIN) / ACTIVE_COUNTERS);
            document.getElementById('kioskTokenNumber').textContent = token;
            document.getElementById('kioskQueuePosition').textContent = waitingCount + 1;
            document.getElementById('kioskWaitTime').textContent = etaMin + ' min';
        }
        function printKioskToken() { showNotification('Print', 'Sending token to printer...'); }
        function kioskReset() { kioskNextStep(1); document.getElementById('kioskFarmerId').value = ''; document.getElementById('kioskCropType').value = ''; document.getElementById('kioskQuantity').value = ''; }

        // ====== QR ======
        function showQRGenerator() {
            const m = new bootstrap.Modal(document.getElementById('qrModal'));
            document.getElementById('qrCodeImage').innerHTML = '';
            new QRCode(document.getElementById('qrCodeImage'), { text: 'https://agriqueue.gov.in/kiosk/centre1', width: 200, height: 200, colorDark: '#16a34a', colorLight: '#ffffff' });
            m.show();
        }
        function printQRCode() { showNotification('Print', 'Sending QR to printer...'); }

        // ====== Modal Trigger & Payment Calculation ======
        function openModal(modalId, counterNum) {
            activeModalCounter = counterNum;
            if (modalId === 'paymentModal') {
                populatePaymentModal(counterNum);
            }
            const m = new bootstrap.Modal(document.getElementById(modalId));
            m.show();
        }

        function populatePaymentModal(counterNum) {
            const c = counterData[counterNum];
            if (!c || !c.serving) return;
            
            // Find the token data associated with the serving counter
            const tokenData = queueData.find(q => q.token === c.current);
            if (!tokenData) return;

            // Use the final weight saved during the Weight Measurement step (or 0 if not done yet)
            const finalWeight = tokenData.finalWeight || 0;
            const crop = tokenData.crop || '-';
            
            // Determine MSP based on crop type
            const mspRate = mspRates[crop.toLowerCase()] || 0;
            
            // Calculate Total Amount
            const totalAmount = (finalWeight * mspRate).toFixed(2);

            // Populate the modal fields
            document.getElementById('paymentFarmerName').textContent = c.farmer;
            document.getElementById('paymentCrop').textContent = crop;
            document.getElementById('paymentWeight').textContent = finalWeight + ' kg';
            document.getElementById('paymentMSP').textContent = '₹' + mspRate.toFixed(2) + '/kg';
            document.getElementById('paymentAmount').textContent = '₹' + totalAmount;
        }

        // ====== Quality/Weight/Payment Modals ======
        function saveQualityCheck() {
            const m = document.getElementById('moistureContent').value;
            const i = document.getElementById('impurities').value;
            const f = document.getElementById('foreignMatter').value;
            const s = document.getElementById('qualityStatus').value;
            if (!m || !i || !f) { showNotification('Error', 'Please fill all fields'); return; }
            bootstrap.Modal.getInstance(document.getElementById('qualityModal')).hide();
            document.getElementById('qualityStep').classList.add('completed');
            document.getElementById('qualityStep').classList.remove('active-step');
            document.getElementById('weightStep').classList.add('active-step');
            document.getElementById('qualityDetails').textContent = `Completed: Moisture ${m}%, Impurities ${i}%, Foreign Matter ${f}% - ${s}`;
            
            // Update pipeline: set quality result and advance to weight_check
            pipelineQualityResult = (s === 'failed') ? 'failed' : 'passed';
            if (currentPipelineStageIndex >= 0 && currentPipelineStageIndex < 6) {
                currentPipelineStageIndex = 5; // quality_check stage
                renderPipeline();
            }
            
            showNotification('Saved', 'Quality check completed: ' + s);
        }
        function calculateNetWeight() {
            const g = parseFloat(document.getElementById('grossWeight').value) || 0;
            const t = parseFloat(document.getElementById('tareWeight').value) || 0;
            const net = g - t;
            document.getElementById('netWeight').value = net.toFixed(2);
            const md = parseFloat(document.getElementById('moistureDeduction').value) || 0;
            document.getElementById('finalWeight').value = (net * (1 - md/100)).toFixed(2);
        }
        document.getElementById('grossWeight').addEventListener('input', calculateNetWeight);
        document.getElementById('tareWeight').addEventListener('input', calculateNetWeight);
        document.getElementById('moistureDeduction').addEventListener('input', calculateNetWeight);
        function saveWeightMeasurement() {
            const net = document.getElementById('netWeight').value;
            const fw = document.getElementById('finalWeight').value;
            if (!net) { showNotification('Error', 'Please enter weights'); return; }
            bootstrap.Modal.getInstance(document.getElementById('weightModal')).hide();
            document.getElementById('weightStep').classList.add('completed');
            document.getElementById('weightStep').classList.remove('active-step');
            document.getElementById('amountStep').classList.add('active-step');
            document.getElementById('weightDetails').textContent = `Completed: Net ${net} kg, Final ${fw} kg after deductions`;
            
            // Save final weight to token data
            if (activeModalCounter) {
                const c = counterData[activeModalCounter];
                const tokenData = queueData.find(q => q.token === c.current);
                if (tokenData) {
                    tokenData.finalWeight = parseFloat(fw);
                }
            }
            
            // Advance pipeline to procurement_completed
            if (currentPipelineStageIndex >= 0 && currentPipelineStageIndex < 7) {
                currentPipelineStageIndex = 7; // procurement_completed
                renderPipeline();
            }
            
            showNotification('Saved', `Weight: ${fw} kg final`);
        }
        function processPayment() {
            // Find the counter that triggered this modal
            bootstrap.Modal.getInstance(document.getElementById('paymentModal')).hide();
            
            // Advance pipeline through payment stages
            if (currentPipelineStageIndex >= 0) {
                currentPipelineStageIndex = 8; // payment_processing
                renderPipeline();
                setTimeout(() => {
                    currentPipelineStageIndex = 9; // payment_completed
                    renderPipeline();
                }, 1500);
            }
            
            showNotification('Payment', 'Payment processed successfully');
        }

        // ====== Admin ======
        function refreshAdminDashboard() {
            initPaymentData();
            initCharts();
            renderCentreCapacityCard();
        }

        // ====== Admin Dashboard: Centre Capacity settings ======
        const centreCapacityData = {
            morning:   { label: 'Morning',   booked: 60, capacity: 80, barId: 'capMorningBar',   pctId: 'capMorningPct',   bookedId: 'capMorningBooked' },
            afternoon: { label: 'Afternoon', booked: 48, capacity: 80, barId: 'capAfternoonBar', pctId: 'capAfternoonPct', bookedId: 'capAfternoonBooked' },
            evening:   { label: 'Evening',   booked: 32, capacity: 80, barId: 'capEveningBar',   pctId: 'capEveningPct',   bookedId: 'capEveningBooked' }
        };

        function renderCentreCapacityCard() {
            Object.values(centreCapacityData).forEach(slot => {
                const pct = Math.min(100, Math.round((slot.booked / slot.capacity) * 100));
                document.getElementById(slot.pctId).textContent = pct + '%';
                document.getElementById(slot.barId).style.width = pct + '%';
                document.getElementById(slot.bookedId).textContent = `${slot.booked}/${slot.capacity} tokens booked`;
            });
        }

        function openCapacitySettings() {
            document.getElementById('capMorningInput').value = centreCapacityData.morning.capacity;
            document.getElementById('capAfternoonInput').value = centreCapacityData.afternoon.capacity;
            document.getElementById('capEveningInput').value = centreCapacityData.evening.capacity;
            ['capMorningInput', 'capAfternoonInput', 'capEveningInput'].forEach(id => {
                document.getElementById(id).classList.remove('is-invalid');
            });
            new bootstrap.Modal(document.getElementById('capacitySettingsModal')).show();
        }

        function saveCapacitySettings() {
            const fields = [
                { key: 'morning',   inputId: 'capMorningInput',   errorId: 'capMorningError' },
                { key: 'afternoon', inputId: 'capAfternoonInput', errorId: 'capAfternoonError' },
                { key: 'evening',   inputId: 'capEveningInput',   errorId: 'capEveningError' }
            ];

            let allValid = true;
            const newValues = {};

            fields.forEach(({ key, inputId, errorId }) => {
                const input = document.getElementById(inputId);
                const errorEl = document.getElementById(errorId);
                const value = parseInt(input.value, 10);
                const booked = centreCapacityData[key].booked;
                let message = '';

                if (!Number.isInteger(value) || value < 1) {
                    message = 'Enter a whole number of at least 1.';
                } else if (value < booked) {
                    message = `Can't be less than the ${booked} tokens already booked.`;
                }

                if (message) {
                    input.classList.add('is-invalid');
                    errorEl.textContent = message;
                    errorEl.style.display = 'block';
                    allValid = false;
                } else {
                    input.classList.remove('is-invalid');
                    errorEl.style.display = 'none';
                    newValues[key] = value;
                }
            });

            if (!allValid) return;

            Object.keys(newValues).forEach(key => {
                centreCapacityData[key].capacity = newValues[key];
                // Keep the farmer-facing slot estimation in sync with the new capacity too
                if (slotConfig[key]) slotConfig[key].capacity = newValues[key];
            });

            renderCentreCapacityCard();
            bootstrap.Modal.getInstance(document.getElementById('capacitySettingsModal')).hide();
        }

        document.getElementById('capacitySettingsBtn').addEventListener('click', openCapacitySettings);
        function initPaymentData() {
            const data = [
                { token: 'O-015', farmer: 'Arun Kumar', crop: 'Paddy', quantity: '2450', amount: '73,500', status: 'completed' },
                { token: 'K-016', farmer: 'Bhola Prasad', crop: 'Wheat', quantity: '1920', amount: '57,600', status: 'completed' },
                { token: 'O-017', farmer: 'Champa Devi', crop: 'Paddy', quantity: '2780', amount: '83,400', status: 'processing' },
                { token: 'K-018', farmer: 'Dinesh Yadav', crop: 'Rice', quantity: '1650', amount: '49,500', status: 'processing' },
                { token: 'O-019', farmer: 'Esha Verma', crop: 'Paddy', quantity: '2340', amount: '70,200', status: 'pending' },
                { token: 'K-020', farmer: 'Farhan Ali', crop: 'Wheat', quantity: '2100', amount: '63,000', status: 'pending' }
            ];
            const tbody = document.getElementById('paymentTableBody');
            tbody.innerHTML = '';
            data.forEach(p => {
                const sc = p.status === 'completed' ? 'bg-success' : p.status === 'processing' ? 'bg-warning' : 'bg-secondary';
                tbody.innerHTML += `<tr><td><strong>${p.token}</strong></td><td>${p.farmer}</td><td>${p.crop}</td><td>${p.quantity}</td><td>₹${p.amount}</td><td><span class="badge ${sc}">${p.status.charAt(0).toUpperCase()+p.status.slice(1)}</span></td></tr>`;
            });
        }
        function initCharts() {
            const ctx = document.getElementById('cropChart');
            if (ctx._chart) ctx._chart.destroy();
            ctx._chart = new Chart(ctx.getContext('2d'), {
                type: 'doughnut',
                data: { labels: ['Paddy','Wheat','Rice'], datasets: [{ data: [65,25,10], backgroundColor: ['#16a34a','#f59e0b','#0ea5e9'], borderWidth: 0 }] },
                options: { responsive: true, plugins: { legend: { position: 'bottom' } } }
            });
        }

        // ====== Notifications ======
        function showNotification(title, msg) {
            document.getElementById('notificationTitle').textContent = title;
            document.getElementById('notificationMessage').textContent = msg;
            document.getElementById('notification').classList.add('show');
            setTimeout(hideNotification, 5000);
        }
        function hideNotification() { document.getElementById('notification').classList.remove('show'); }

        // ====== Clock ======
        function updateTimes() {
            const t = new Date().toLocaleTimeString();
            ['currentTimeFarmer','currentTimeStaff','currentTimeAdmin','currentTimeDisplay'].forEach(id => {
                const el = document.getElementById(id);
                if (el) el.textContent = t;
            });
        }

        // ====== Full Procurement Pipeline Tracker ======
        const pipelineStages = [
            { id: 'order_placed',          label: 'Order Placed',            icon: 'bi-cart-check' },
            { id: 'token_confirmed',       label: 'Token Confirmed',         icon: 'bi-ticket-perforated' },
            { id: 'checked_in',            label: 'Check-In',                icon: 'bi-box-arrow-in-right' },
            { id: 'waiting',               label: 'Waiting in Queue',        icon: 'bi-hourglass-split' },
            { id: 'called',                label: 'Called',                  icon: 'bi-megaphone' },
            { id: 'quality_check',         label: 'Quality Check',           icon: 'bi-clipboard-check' },
            { id: 'weight_check',          label: 'Weight Check',            icon: 'bi-speedometer2' },
            { id: 'procurement_completed', label: 'Procurement Completed',   icon: 'bi-check2-circle' },
            { id: 'payment_processing',    label: 'Payment Processing',      icon: 'bi-cash-coin' },
            { id: 'payment_completed',     label: 'Payment Completed',       icon: 'bi-bank2' }
        ];

        let currentPipelineStageIndex = -1;
        let pipelineQualityResult = null; // 'passed' | 'failed' | null
        let pipelineTimers = [];

        function clearPipelineTimers() {
            pipelineTimers.forEach(t => clearTimeout(t));
            pipelineTimers = [];
        }

        function renderPipeline() {
            const container = document.getElementById('pipelineTracker');
            if (!container) return;
            let html = '';
            pipelineStages.forEach((stage, idx) => {
                let stateClass = 'upcoming';
                let statusText = 'Upcoming';
                if (idx < currentPipelineStageIndex) { stateClass = 'completed'; statusText = 'Completed'; }
                else if (idx === currentPipelineStageIndex) { stateClass = 'current'; statusText = 'In Progress'; }

                const isLast = idx === pipelineStages.length - 1;
                // Show Passed/Failed branch only when quality_check has been reached
                const showBranch = stage.id === 'quality_check' && idx <= currentPipelineStageIndex;

                html += `<div class="pipeline-step ${stateClass}">
                    <div class="pipeline-marker">
                        <div class="pipeline-dot"><i class="bi ${stage.icon}"></i></div>
                        ${!isLast ? '<div class="pipeline-line"></div>' : ''}
                    </div>
                    <div class="pipeline-content">
                        <h6 class="mb-0">${stage.label}</h6>
                        <small class="pipeline-status-text">${statusText}</small>
                        ${showBranch ? renderQualityBranch() : ''}
                    </div>
                </div>`;
            });
            container.innerHTML = html;
        }

        function renderQualityBranch() {
            const passedActive = pipelineQualityResult === 'passed' ? 'active-pass' : '';
            const failedActive = pipelineQualityResult === 'failed' ? 'active-fail' : '';
            const passedDisabled = pipelineQualityResult === 'failed' ? 'disabled' : '';
            const failedDisabled = pipelineQualityResult === 'passed' ? 'disabled' : '';
            return `<div class="pipeline-branch">
                <div class="branch-option ${passedActive} ${passedDisabled}"><i class="bi bi-check-circle-fill"></i> Passed</div>
                <div class="branch-option ${failedActive} ${failedDisabled}"><i class="bi bi-x-circle-fill"></i> Failed</div>
            </div>`;
        }

        function setPipelineStage(stageId) {
            const idx = pipelineStages.findIndex(s => s.id === stageId);
            if (idx !== -1) { currentPipelineStageIndex = idx; renderPipeline(); }
        }

        // Auto-advance through order_placed → token_confirmed → checked_in → waiting on booking
        function startPipelineOnBooking() {
            clearPipelineTimers();
            currentPipelineStageIndex = -1;
            pipelineQualityResult = null;
            document.getElementById('pipelineTrackerCard').style.display = 'block';

            // Stage 0: Order Placed
            currentPipelineStageIndex = 0; renderPipeline();
            // Stage 1: Token Confirmed
            pipelineTimers.push(setTimeout(() => { currentPipelineStageIndex = 1; renderPipeline(); }, 800));
            // Stage 2: Check-In
            pipelineTimers.push(setTimeout(() => { currentPipelineStageIndex = 2; renderPipeline(); }, 1600));
            // Stage 3: Waiting in Queue
            pipelineTimers.push(setTimeout(() => { currentPipelineStageIndex = 3; renderPipeline(); }, 2400));
        }

        // Simulate full pipeline (for demo) - advances through remaining stages
        function simulateFullPipeline() {
            if (currentPipelineStageIndex < 3) {
                showNotification('Info', 'Please book a token first');
                return;
            }
            clearPipelineTimers();
            // Called
            pipelineTimers.push(setTimeout(() => { currentPipelineStageIndex = 4; renderPipeline(); }, 1000));
            // Quality Check → Passed (for demo, you can change to 'failed' to see red branch)
            pipelineTimers.push(setTimeout(() => {
                currentPipelineStageIndex = 5;
                pipelineQualityResult = 'passed';
                renderPipeline();
                showNotification('Quality Check', 'Quality check completed: PASSED');
            }, 2500));
            // Weight Check
            pipelineTimers.push(setTimeout(() => { currentPipelineStageIndex = 6; renderPipeline(); }, 4000));
            // Procurement Completed
            pipelineTimers.push(setTimeout(() => { currentPipelineStageIndex = 7; renderPipeline(); }, 5500));
            // Payment Processing
            pipelineTimers.push(setTimeout(() => { currentPipelineStageIndex = 8; renderPipeline(); }, 7000));
            // Payment Completed
            pipelineTimers.push(setTimeout(() => {
                currentPipelineStageIndex = 9; renderPipeline();
                showNotification('Success', 'Payment completed! Pipeline finished.');
            }, 9000));
        }

        function resetPipeline() {
            clearPipelineTimers();
            currentPipelineStageIndex = -1;
            pipelineQualityResult = null;
            const card = document.getElementById('pipelineTrackerCard');
            if (card) card.style.display = 'none';
        }

        // ====== Init ======
        function init() {
            initQueueData();
            initCounterData();
            updateTimes();
            setInterval(updateTimes, 1000);
            const today = new Date().toISOString().split('T')[0];
            document.getElementById('preferredDate').setAttribute('min', today);
            document.getElementById('preferredDate').value = today;
            AOS.init();
        }
        document.addEventListener('DOMContentLoaded', init);