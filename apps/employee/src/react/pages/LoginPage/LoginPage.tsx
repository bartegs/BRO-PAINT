import * as React from "react";
import { LoginForm } from "./components/LoginForm";

export function LoginPage(): JSX.Element {
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");

  const loginPageState = {
    login,
    password,
    setLogin,
    setPassword,
  };

  return (
    <div className="login-page">
      <LoginForm {...loginPageState} />
    </div>
  );
}
