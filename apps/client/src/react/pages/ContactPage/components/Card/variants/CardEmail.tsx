import * as React from "react";

import { Card } from "../Card";
// import { Temp } from "../../../../../components/forms/components/Temp";
import { Button } from "../../../../../components/Button";
import { TextArea } from "../../../../../components/forms/components/TextArea";

export function CardEmail(): JSX.Element {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [isMessageSent, setIsMessageSent] = React.useState(false);

  function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
    setIsMessageSent(true);
  }
  return (
    <Card category="email" icon="email" color="pink">
      {!isMessageSent ? (
        <form onSubmit={sendMessage}>
          {/* <Temp
            placeholder="Podaj imię*"
            name="name"
            value={name}
            setState={setName}
            additionalClasses="mb-3"
            borderColor="pink"
            fontTheme="dark"
            required
          />
          <Temp
            placeholder="Podaj email*"
            name="email"
            value={email}
            setState={setEmail}
            additionalClasses="mb-3"
            borderColor="pink"
            fontTheme="dark"
            required
          /> */}
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
