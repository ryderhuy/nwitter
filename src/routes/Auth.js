import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import "../index.css";
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
    // event.preventDefault();
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
  const onSocialClick = async (name) => {
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
    <div className="login-form">
      <Form onFinish={onSubmit}>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            name="email"
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
            value={email}
            onChange={onChange}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            name="password"
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            value={passWord}
            onChange={onChange}
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            {isNewAccount === false ? "Create new account" : "Log In"}
          </Button>
        </Form.Item>
      </Form>

      <span className="text-error">{error}</span>
      <span>Or login with</span>
      <div className="login-social">
        <Button name="google" onClick={() => onSocialClick("google")}>
          Continue with Google
        </Button>
        <Button name="github" onClick={() => onSocialClick("github")}>
          Continue with Github
        </Button>
        <span onClick={toggleAccount}>
          {isNewAccount ? "Sign In" : "Create new account"}
        </span>
      </div>
    </div>
  );
};
export default Auth;
