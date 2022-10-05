import React from 'react';
const axios = require('axios');

function TokenProcessor() {
  const params = new URLSearchParams(window.location.search);
  const code = params.get('code');
  if (code) {

    var args = new URLSearchParams({
      client_id: "FbCSH23HybQMV9UlXJfeKHogAEHojzCO",
      code_verifier: window.sessionStorage.getItem("code_verifier"),
      grant_type: "authorization_code",
      redirect_uri: "https://localhost:4000/users",
      code: code
    });

    axios.post('https://dev-kw-oeodk.us.auth0.com/oauth/token', args)
      .then((res) => {
        window.sessionStorage.setItem("token", res.data.access_token);
        var newArgs = new URLSearchParams({
          client_id: "FbCSH23HybQMV9UlXJfeKHogAEHojzCO",
          grant_type: "urn:ietf:params:oauth:grant-type:token-exchange",
          subject_token_type: "urn:ietf:params:oauth:token-type:jwt",
          requested_token_type: "urn:ietf:params:oauth:token-type:jwt",
          scope: "apim:api_manage apim:subscription_manage apim:tier_manage apim:admin",
          subject_token: res.data.access_token,
          org_handle: "organization"
        });

        axios.post('https://da59-203-94-95-4.in.ngrok.io/api/am/sts/v1/oauth2/token', newArgs)
        .then((res) => {
          window.sessionStorage.setItem("exchanged_token", res.data.access_token);
          window.location.href = "https://localhost:4000/users";
        })
      })
  }
  return <></>;
}

export default TokenProcessor;