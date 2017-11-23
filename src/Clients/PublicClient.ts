const KRAKEN_API_ENDPOINT_URL = require('../Config').KRAKEN_API_ENDPOINT;
const request = require('request-promise');

export class PublicClient {

    constructor() {}

    get(path, message?) {
        return this.request('get', path, message);
    }

    post(path, message) {
        return this.request('post', path, message);
    }

    request(method, path, message) {
        const uri = KRAKEN_API_ENDPOINT_URL + path;
        const options = {
            headers: {
                'User-Agent': 'Kraken Node API Client'
            },
            method: method,
            uri: uri,
            qs: message,
            resolveWithFullResponse: true,
            json: true
        };

        return request(options);
    }
}
