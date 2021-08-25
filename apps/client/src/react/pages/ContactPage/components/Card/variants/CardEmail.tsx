import * as React from "react";

import { Card } from "../Card";
import { Input } from "../../../../../components/forms/components/Input";
import { Button } from "../../../../../components/Button";
import { TextArea } from "../../../../../components/forms/components/TextArea";

export function CardEmail(): JSX.Element {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    // eslint-disable-next-line no-alert
    alert("Wiadomość Wysłana!");
    setName("");
    setEmail("");
    setMessage("");
  }
  return (
    <Card category="email" icon="email" color="pink">
      <form onSubmit={sendMessage}>
        <Input
          placeholder="Podaj imię*"
          name="name"
          value={name}
          setState={setName}
          additionalClasses="mb-3"
          borderColor="pink"
          fontTheme="dark"
          required
        />
        <Input
          placeholder="Podaj email*"
          name="email"
          value={email}
          setState={setEmail}
          additionalClasses="mb-3"
          borderColor="pink"
          fontTheme="dark"
          required
        />
        <TextArea
          labelText="Jak możemy Ci pomóc?*"
          name="message"
          id="message"
          value={message}
          placeholder="Twoja wiadomość"
          setState={setMessage}
          color="pink"
          variant="underlined"
          additionalClasses="mt-1"
          required
        />
        <Button text="Wyślij" variant="primary" color="pink" type="submit" />
      </form>
    </Card>
  );
}
