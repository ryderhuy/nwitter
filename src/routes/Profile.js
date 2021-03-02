import React from "react";
import { authService } from "fbase";
import { Redirect } from "react-router-dom";
const Profile = () => {
  <Redirect strict from="*" to="/" />;
  // <Redirect from="*" to="/" />;
  const onLogOutClick = () => {
    authService.signOut();
    // history.push("/");
  };
  return (
    <>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};
export default Profile;
