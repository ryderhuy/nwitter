import React, { useState } from "react";
import { authService, firebaseInstance } from "fbase";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");
  const [isNewAccount, setNewAccount] = useState(false);
  const [error, setError] = useState("");
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassWord(value);
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      let data;
      if (isNewAccount) {
        data = await authService.signInWithEmailAndPassword(email, passWord);
      } else {
        data = await authService.createUserWithEmailAndPassword(
          email,
          passWord
        );
      }
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  };
  const toggleAccount = () => setNewAccount((prev) => !prev);
  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    if (name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (name === "github") {
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }
    const data = await authService.signInWithPopup(provider);
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="text"
          placeholder="email"
          required
          value={email}
          onChange={onChange}
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          required
          value={passWord}
          onChange={onChange}
        />
        <input
          type="submit"
          value={isNewAccount === false ? "Create new account" : "Log In"}
        />
        {error}
      </form>
      <span onClick={toggleAccount}>
        {isNewAccount ? "Sign In" : "Create Account"}
      </span>
      <button name="google" onClick={onSocialClick}>
        Continue with Google
      </button>
      <button name="github" onClick={onSocialClick}>
        Continue with Github
      </button>
    </div>
  );
};
export default Auth;
