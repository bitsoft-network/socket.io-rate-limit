# ip-token-bucket

IP based token bucket rate limiter / throttler. Read more about [Token Buckets](https://en.wikipedia.org/wiki/Token_bucket).

## Usage

Install the package by typing `npm i @bitsoft-network/ip-token-bucket` in your project folder.

### Setup

```javascript
const TokenBucket = require("ip-token-bucket");

const bucket = new TokenBucket({
  maxBurst: 5, // Maximum burst (bucket size) that is accepted
  perSecond: 1, // How many tokens will be added every 1s
});

// Take one token out if 127.0.0.1 ip's bucket
const hasTokens = bucket.take("127.0.0.1");

if (hasTokens) {
  console.log("User had atleast one token!");
} else {
  console.log("User didn't have tokens left.");
}
```
