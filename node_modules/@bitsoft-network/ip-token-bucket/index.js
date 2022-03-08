// Require dependencies
const TokenBucket = require("./lib/TokenBucket");

// Main class
class IPTokenBucket {
  constructor({ maxBurst, perSecond }) {
    this.buckets = new Map();
    this.capacity = maxBurst || 10;
    this.fillPerSecond = perSecond || 5;
  }

  // Take a token out of IP's bucket
  take(ipAddress) {
    // Check if ip doesn't have a bucket yet
    if (!this.buckets.has(ipAddress)) {
      // Set a new bucket for ip
      const bucket = new TokenBucket(this.capacity, this.fillPerSecond);
      this.buckets.set(ipAddress, bucket);
    }

    // Get ip's bucket
    const bucketForIP = this.buckets.get(ipAddress);

    // Return take value (boolean)
    return bucketForIP.take();
  }
}

// Export class
module.exports = IPTokenBucket;
