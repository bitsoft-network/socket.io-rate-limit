// Main Class
class TokenBucket {
  constructor(capacity, fillPerSecond) {
    this.capacity = capacity;
    this.fillPerSecond = fillPerSecond;

    this.lastFilled = Math.floor(Date.now() / 1000);
    this.tokens = capacity;
  }

  // Take (use) a token out of the bucket
  take() {
    // Check if bucket needs to be refilled
    this.#refill();

    // If there are tokens left, use one
    if (this.tokens > 0) {
      this.tokens -= 1;
      return true;
    }

    // Otherwise bucket is empty
    return false;
  }

  // Calculate how many tokens (if any) should have been added since the last request
  #refill() {
    const now = Math.floor(Date.now() / 1000);
    const rate = (now - this.lastFilled) / this.fillPerSecond;

    this.tokens = Math.min(
      this.capacity,
      this.tokens + Math.floor(rate * this.capacity)
    );
    this.lastFilled = now;
  }
}

// Export class
module.exports = TokenBucket;
