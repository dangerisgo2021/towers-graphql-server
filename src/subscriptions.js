exports.subscriptions = {
  onConnect: (q) => console.log("Connected to websocket", q),
  keepAlive: 1000
};