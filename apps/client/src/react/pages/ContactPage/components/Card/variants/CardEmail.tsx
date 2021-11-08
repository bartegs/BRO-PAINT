import * as React from "react";

import { Card } from "../Card";
import { Button } from "../../../../../../../../common/react/components";
import { TextArea, Input } from "../../../../../components/forms/components";

export function CardEmail(): JSX.Element {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [isMessageSent, setIsMessageSent] = React.useState(false);

  function sendMessage(e: React.FormEvent) {
    e.preventDefault();

    fetch("emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    setName("");
    setEmail("");
    setMessage("");
    setIsMessageSent(true);
  }

  return (
    <Card category="email" icon="email" color="pink">
      {!isMessageSent ? (
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
      ) : (
        <div className="form-confirmation">
          <span className="form-confirmation__heading">
            Dziękujemy za kontakt!
          </span>
          <span>
            Otrzymaliśmy Twoją wiadomość i postaramy się na nią odpowiedzieć
            najszybciej jak to możliwe. Jeśli Twoja sprawa jest pilna, zachęcamy
            do kontaktu telefonicznego na numery podane wyżej.
          </span>
        </div>
      )}
    </Card>
  );
}
