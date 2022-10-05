import React from "react";
const url = require('url');

function generateRandomString(length) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
}

async function generateCodeChallenge(codeVerifier) {
  var digest = await crypto.subtle.digest("SHA-256",
    new TextEncoder().encode(codeVerifier));

  return btoa(String.fromCharCode(...new Uint8Array(digest)))
    .replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_')
}


function login() {
  var codeVerifier = generateRandomString(64);

  Promise.resolve()
    .then(() => {
      return generateCodeChallenge(codeVerifier)
    })
    .then(function (codeChallenge) {
      window.sessionStorage.setItem("code_verifier", codeVerifier);

      var args = new URLSearchParams({
        client_id: "FbCSH23HybQMV9UlXJfeKHogAEHojzCO",
        redirect_uri: "https://localhost:4000/#/publisher/token",
        response_type: "code",
        scope: "openid",
        state: "RlZyVjlqYUpHTzltWC42c2FNRDRJT1JPfk1+TUFEa0RLb04yZldwYkpxVA==",
        code_challenge: codeChallenge,
        code_challenge_method: "S256"
      });
      window.location = "https://dev-kw-oeodk.us.auth0.com/authorize?" + args;  
    })  
}

const LoginButton = () => {

  return <button onClick={() => login()}>Log In</button>;
};

export default LoginButton;