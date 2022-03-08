// Require dependencies
const TokenBucket = require("@bitsoft-network/ip-token-bucket");

// Main function
const socketRateLimiter = config => {
  // Get config values
  const { proxy, maxBurst, perSecond } = config;

  // Make a new IP bucket
  const bucket = new TokenBucket({
    maxBurst,
    perSecond,
  });

  // Return socket.io middleware
  return (socket, next) => {
    // Get client IP
    const remoteAddress = socket.request.socket.remoteAddress;
    const xForwardedFor =
      socket.handshake.headers["X-Forwarded-For"].split(",")[0];

    // If using proxy, use headers instead
    const ipAddress = proxy ? xForwardedFor || remoteAddress : remoteAddress;

    // Take one token out if ip's bucket
    const hasTokens = bucket.take(ipAddress);

    // If user is allowed to make this request
    if (hasTokens) {
      next();
    } else {
      next(new Error("Too many requests, slow down."));
    }
  };
};

// Export function
module.exports = socketRateLimiter;
