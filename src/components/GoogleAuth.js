require("dotenv").config();
import React, { useEffect, useState } from "react";

const GoogleAuth = () => {
  const [isSignIn, isSignInSet] = useState(null);

  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: process.env.Client_Id,
          scope: "email",
        })
        .then(() => {
          const auth = window.gapi.auth2.getAuthInstance();

          isSignInSet(auth.isSignedIn.get());
          auth.isSignedIn.listen(() => isSignInSet(auth.isSignedIn.get()));
        });
    });
  }, []);

  //   const onAuthChange = () => {
  //     isSignInSet(window.gapi.auth2.getAuthInstance().isSignedIn.get());
  //   };

  const handleClick = () => {
    const auth = window.gapi.auth2.getAuthInstance();
    if (isSignIn) {
      auth.signOut();
    } else {
      auth.signIn();
    }
  };

  if (isSignIn === null) {
    return null;
  } else if (isSignIn) {
    return (
      <button className="ui red google button" onClick={handleClick}>
        <i className="google icon" />
        Sign Out
      </button>
    );
  } else {
    return (
      <button className="ui red google button" onClick={handleClick}>
        <i className="google icon" />
        Sign In with google
      </button>
    );
  }
};

export default GoogleAuth;
