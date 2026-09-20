// ===================================================================================
// DEMO notification sender — logs what WOULD be sent instead of actually delivering
// an SMS/WhatsApp message. There is no way to fake a real phone delivery, so this
// exists purely to build and test the notification *flow* (when to send, what to
// say) end to end. Swap the TODO block below for a real provider once you have one:
//
//   SMS:      Twilio, MSG91, Textlocal (MSG91 is commonly used for India/agri projects)
//   WhatsApp: Twilio WhatsApp Business API, or Meta's WhatsApp Cloud API directly
//
// Both require a paid account, a verified sender ID / business profile, and an API
// key that must live server-side only (never in frontend code) — exactly like this
// controller already does.
// ===================================================================================

function isValidMobile(mobile) {
  return typeof mobile === 'string' && /^[6-9][0-9]{9}$/.test(mobile);
}

// In-memory log so the admin/staff side can see what "went out" during a demo,
// without needing a database. Resets when the server restarts.
const sentLog = [];

// POST /api/notifications/send   Body: { mobile, message, channel }
async function sendNotification(req, res) {
  const { mobile, message, channel } = req.body;

  if (!isValidMobile(mobile)) {
    return res.status(400).json({ error: 'A valid 10-digit mobile number is required' });
  }
  if (!message || typeof message !== 'string' || !message.trim()) {
    return res.status(400).json({ error: 'Message text is required' });
  }
  const useChannel = (channel === 'whatsapp') ? 'whatsapp' : 'sms';

  // TODO(production): replace this block with a real provider call, e.g.:
  //   if (useChannel === 'sms') {
  //       await twilioClient.messages.create({ to: '+91' + mobile, from: TWILIO_SMS_NUMBER, body: message });
  //   } else {
  //       await twilioClient.messages.create({ to: 'whatsapp:+91' + mobile, from: TWILIO_WHATSAPP_NUMBER, body: message });
  //   }
  const entry = {
    mobile,
    channel: useChannel,
    message,
    sentAt: new Date().toISOString()
  };
  sentLog.push(entry);
  console.log(`[notify-demo][${useChannel.toUpperCase()}] To ${mobile}: "${message}"`);

  res.json({ success: true, demo: true, channel: useChannel });
}

// GET /api/notifications/log  (demo helper — lets staff/admin see what was "sent" without a real phone)
async function getLog(req, res) {
  res.json({ log: sentLog.slice(-50).reverse() }); // most recent first, capped for sanity
}

module.exports = { sendNotification, getLog };