# socket.io-rate-limit

IP based token bucket rate limiting middleware for socket.io. Using `@bitsoft-network/ip-token-bucket`. Documentation for that package can be found [here](https://www.npmjs.com/package/@bitsoft-network/ip-token-bucket)

## Usage

Install the package by typing `npm i @bitsoft-network/socket.io-rate-limit` in your project folder.

### Setup

```javascript
const socketRateLimiter = require("@bitsoft-network/socket.io-rate-limit");

/* ... get access to socket.io's main object */
io.use(socketRateLimiter({ proxy: false, maxBurst: 5, perSecond: 1 }));
```

## Methods

### socketRateLimiter

Pass this with the config as an middleware to `io.use()`.

#### Parameters

- config (ConfigObject)

#### Returns

- Function (SocketIOMiddleware)

## Objects

### ConfigObject

Object which holds all configuration values for the middleware.

#### Example

```javascript
const config = {
  // If the socket server is running behind a proxy
  // (nginx, haproxy, etc.). This is used when getting
  // the client IP from websocket request.
  proxy: true,

  // Maximum ws event "burst" (token bucket size)
  maxBurst: 5,

  // How many tokens will be added every 1s
  perSecond: 1,
};

io.use(socketRateLimiter(config));
```

## License

MIT <3
