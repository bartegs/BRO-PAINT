import * as React from "react";

import { Logo } from "../../../../../../common/react/components/Logo/Logo";
import { Button } from "../../../../../../common/react/components/Button/Button";
import { InputOutlined } from "../../../../../../common/react/components/InputOutlined";

interface LoginFormProps {
  login: string;
  password: string;
  setLogin: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}

export function LoginForm({
  login,
  password,
  setLogin,
  setPassword,
}: LoginFormProps): JSX.Element {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLogin("");
    setPassword("");
  }

  return (
    <div className="login-form">
      <div className="login-form__image" />
      <span className="login-form__logo">
        <Logo />
      </span>
      <form action="" className="login-form__form" onSubmit={handleSubmit}>
        <InputOutlined
          placeholder="Podaj login"
          name="login"
          id="login"
          labelText="Login"
          labelCentered
          value={login}
          setState={setLogin}
          color="pink"
          fontTheme="dark"
          required
        />
        <InputOutlined
          placeholder="Podaj hasło"
          name="password"
          id="password"
          labelText="Hasło"
          labelCentered
          value={password}
          setState={setPassword}
          additionalClasses="mt-3"
          color="pink"
          fontTheme="dark"
          password
          required
        />
        <div className="login-form__button">
          <Button
            text="Zaloguj"
            variant="primary"
            color="pink"
            type="submit"
            additionalClasses="my-4"
          />
        </div>
      </form>
    </div>
  );
}
