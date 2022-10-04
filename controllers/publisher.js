const fetch = require("cross-fetch");
const { response } = require("express");
const axios = require('axios');
// const AIC_URL = "https://dev-kw-oeodk.us.auth0.com/oauth/token";

const getCode = async (req, res = response) => {

    try {
        console.log('Dulith');
            
        const resp1 = await fetch(
            'https://dev-kw-oeodk.us.auth0.com/authorize?' + new URLSearchParams({
                audience: 'https://dev-kw-oeodk.us.auth0.com/api/v2/',
                client_id: 'FbCSH23HybQMV9UlXJfeKHogAEHojzCO',
                redirect_uri: 'http://localhost:3000/publisher/apis',
                scope: 'openid profile email',
                response_type: 'code',
                // auth0Client: 'eyJuYW1lIjoiYXV0aDAuanMiLCJ2ZXJzaW9uIjoiNi44LjQifQ',
                // state: 'RlZyVjlqYUpHTzltWC42c2FNRDRJT1JPfk1+TUFEa0RLb04yZldwYkpxVA==',
                // nonce: 'WE5LcDhvSkpncmhoYWxSelRaLmN6TlBwOWF5LWNMWXk3WXJDZ0R6SVhtNg=='
            }),
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    // "Cookie": "auth0=s%3Av1.gadzZXNzaW9ugqZoYW5kbGXEQENdLQctGkHkEcW0BlFLT-uvtLGAdj3karq567l459tc8Os3A1NmFs5OWqZdvlCn0pSTETxHRjzyY1JsqOsQG1amY29va2llg6dleHBpcmVz1_9F200AYzpHba5vcmlnaW5hbE1heEFnZc4PcxQAqHNhbWVTaXRlpG5vbmU.%2FB9YJ1wZOwFpttgvMHY%2F5nLwkT7RlY799xsVgyNMEF8; auth0_compat=s%3Av1.gadzZXNzaW9ugqZoYW5kbGXEQENdLQctGkHkEcW0BlFLT-uvtLGAdj3karq567l459tc8Os3A1NmFs5OWqZdvlCn0pSTETxHRjzyY1JsqOsQG1amY29va2llg6dleHBpcmVz1_9F200AYzpHba5vcmlnaW5hbE1heEFnZc4PcxQAqHNhbWVTaXRlpG5vbmU.%2FB9YJ1wZOwFpttgvMHY%2F5nLwkT7RlY799xsVgyNMEF8; did=s%3Av0%3Aa57a7020-4066-11ed-a047-1bc235bfbb2c.Ebm7rMVVqi3jX6pNc%2Fit3MdN2exWXfQs9R3pRauWuKE; did_compat=s%3Av0%3Aa57a7020-4066-11ed-a047-1bc235bfbb2c.Ebm7rMVVqi3jX6pNc%2Fit3MdN2exWXfQs9R3pRauWuKE",
                    "Host": "<calculated when request is sent></calculated>",
                    "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36",
                    "Accept": "*/*",
                    "Accept-Encoding": "gzip, deflate, br",
                    "Connection": "keep-alive"


                },
            }
        );
        console.log(resp1);
    } catch (err) {
        console.error(err);
    }
};

module.exports = {
    getCode,
};
