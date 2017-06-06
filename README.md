# kraken-exchange-api

# Quick Start

## Status
This project is still in very early development and some major functionality is probably missing.
All documented endpoints and objects should be usable though.

If you like to contribute feel free to contact author of this repo or push `Pull Request` with changes.


## Installation
This library is `not yet available` in `npm`. We are planning to release it when it will be production ready.

## Requirements
This library was written in ES2015 code. We highly recommenda any version of Node.js greater than 7.


## API Clients
API Clients provide simple way to use Kraken API directly without need to use Classes that we provided.

### Public API Client
Kraken Exchange provide set of endpoints that don't require authentication
to get basic information about Market. See [`Public market data section at Kraken Docs`](https://www.kraken.com/help/api#public-market-data) 

### Authenticated API Client
To access Private API from Kraken you need to request ApiKey and ApiSecret from your Account Settings in Kraken Dashboard.


## Built-In Kraken API Objects
Every Object we created provide both `Promise` and `callback` support.

### Kraken.Time
#### getUnixTime()
```javascript
Kraken.Time.getUnixTime(/** optional **/ callback) 
```
* Arguments:
    * `callback` (optional)   
* Returns: `Promise`
    * Resolved Value Type: `integer`
#### getTimeinRfc1123()
```javascript
Kraken.Time.getTimeInRfc1123(/** optional **/ callback) 
```
Returns RFC1123 compilant timestamp string.

* Arguments:
    * `callback` (optional)   
* Returns: `Promise`
    * Resolved Value Type: `string`

##### Example Usage:
```javascript
const KrakenTime = require('kraken-exchange-api').Time
const time = new KrakenTime

// Promise Based
time
  .getUnixTime()
  .then((unixTimeStamp) => {
    console.log(unixTimeStamp)
  })


// Callback Based
time
  .getUnixTime((unixTimeStamp) => {
    console.log(unixTimeStamp)
  })
```