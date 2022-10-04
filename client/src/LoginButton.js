import React from "react";

function login() {
  const url = new URL("https://dev-kw-oeodk.us.auth0.com/authorize");

  url.searchParams.append("client_id", "FbCSH23HybQMV9UlXJfeKHogAEHojzCO");
  url.searchParams.append("redirect_uri", "http://localhost:3000/publisher/apis");
  url.searchParams.append("scope", "openid");
  url.searchParams.append("response_type", "code");
  url.searchParams.append("state","RlZyVjlqYUpHTzltWC42c2FNRDRJT1JPfk1+TUFEa0RLb04yZldwYkpxVA==");

  window.location.href = url;
}

const LoginButton = () => {

  return <button onClick={() => login()}>Log In</button>;
};

export default LoginButton;