require("dotenv").config();
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actionCreates/index";

const GoogleAuth = ({ signIn, signOut, isSignedIn }) => {
  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: process.env.Client_Id,
          scope: "email",
        })
        .then(() => {
          const auth = window.gapi.auth2.getAuthInstance();

          onAuthChange(auth.isSignedIn.get());
          auth.isSignedIn.listen(onAuthChange);
        });
    });
  }, []);

  const onAuthChange = (isSignedIn) => {
    const Id = window.gapi.auth2.getAuthInstance().currentUser.get().getId();
    if (isSignedIn) {
      signIn(Id);
    } else {
      signOut();
    }
  };

  const handleClick = () => {
    const auth = window.gapi.auth2.getAuthInstance();
    if (isSignedIn) {
      auth.signOut();
    } else {
      auth.signIn();
    }
  };

  if (isSignedIn === null) {
    return null;
  } else if (isSignedIn) {
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

const mapStateToProps = (state) => ({
  isSignedIn: state.auth.isSignedIn,
});

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
