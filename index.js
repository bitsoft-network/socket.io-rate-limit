// Require dependencies
const TokenBucket = require("@bitsoft-network/ip-token-bucket");

// Main function
const socketRateLimiter = (socket, next) => {
  next();
};

// Export function
module.exports = socketRateLimiter;
