import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { authService } from "fbase";

const Profile = () => {
  let history = useHistory();
  const testRedirect = () => {
    history.push("/");
  };
  const [error, setError] = useState("");
  const onLogOutClick = () => {
    authService
      .signOut()
      .then(function () {
        history.push("/");
      })
      .catch(function (error) {
        setError(error);
      });
  };
  return (
    <>
      <button onClick={testRedirect}>Home</button>
      <button onClick={onLogOutClick}>Log Out</button>
      {error}
    </>
  );
};
export default Profile;
