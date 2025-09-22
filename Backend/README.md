# n8n WebSocket Backend

A simple Node.js backend that receives data from n8n webhooks and broadcasts it to connected WebSocket clients.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Start the server:

```bash
npm start
```

Or for development with auto-reload:

```bash
npm run dev
```

## Usage

### Server Endpoints

- **GET /** - Health check endpoint
- **POST /webhook** - Receives data from n8n and broadcasts to WebSocket clients

### n8n Configuration

In your n8n workflow, use an HTTP Request node with:

- **Method**: POST
- **URL**: `http://localhost:3000/webhook`
- **Body**: Raw JSON with your data

### Frontend WebSocket Connection

Connect to the WebSocket server using:

```javascript
const socket = io("http://localhost:3000");

socket.on("n8n-data", (data) => {
  console.log("Received data from n8n:", data);
});
```

## Testing

You can test the webhook endpoint with curl:

```bash
curl -X POST http://localhost:3000/webhook \
  -H "Content-Type: application/json" \
  -d '{"test": "data from n8n"}'
```

The server runs on `http://localhost:3000` by default.
