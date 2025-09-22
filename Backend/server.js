const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const WebSocket = require("ws");

const app = express();
app.use(bodyParser.json());

// Example webhook route
app.post("/webhook", (req, res) => {
  console.log("Webhook received:", req.body);

  // Broadcast to all websocket clients
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(req.body));
    }
  });

  res.status(200).json({ success: true });
});

// Create server
const server = http.createServer(app);

// Attach WebSocket server
const wss = new WebSocket.Server({ server });

// Listen on all network interfaces (IPv4 + IPv6)
server.listen(3000, "::", () => {
  console.log("Server running on http://localhost:3000");
  console.log("WebSocket endpoint: ws://localhost:3000");
  console.log("n8n webhook URL: http://localhost:3000/webhook");
});
