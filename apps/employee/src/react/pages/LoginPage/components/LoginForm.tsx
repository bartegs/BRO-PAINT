import * as React from "react";

import { useHistory } from "react-router-dom";
import {
  Logo,
  Button,
  InputOutlined,
} from "../../../../../../common/react/components";
import { LoginContext } from "../../../contexts";
import { host } from "../../../../../../common/utils/contants";

export function LoginForm(): JSX.Element {
  const [nickName, setNickName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { setIsLogged } = React.useContext(LoginContext);

  const history = useHistory();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    fetch(`${host}/employees/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ login: { nickName, password } }),
    })
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        }

        throw new Error("jednak u mnie nie działa");
      })
      .then((data) => {
        sessionStorage.setItem("token", data.token);
        sessionStorage.setItem("role", data.role);

        setIsLogged(true);

        history.push("");
      })
      .catch((error: Error) => console.log(error.message));

    setNickName("");
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
          value={nickName}
          setState={setNickName}
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
