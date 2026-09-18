let ioInstance = null;

function initSocket(io) {
  ioInstance = io;
}

function getIO() {
  if (!ioInstance) throw new Error('Socket.io not initialized yet');
  return ioInstance;
}

// Broadcast a named event with a payload to every connected client.
// Used to push live queue/counter/display updates without polling.
function broadcast(event, payload) {
  if (ioInstance) ioInstance.emit(event, payload);
}

module.exports = { initSocket, getIO, broadcast };
