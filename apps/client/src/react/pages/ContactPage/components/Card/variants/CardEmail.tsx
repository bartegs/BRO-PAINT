import * as React from "react";

import { Card } from "../Card";
import { Input } from "../../../../../components/Input";
import { Button } from "../../../../../components/Button";

export function CardEmail(): JSX.Element {
  const [messageUs, setMessageUs] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  function handleValueChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value, name } = event.currentTarget;

    if (name === "name") {
      setMessageUs(() => ({
        ...messageUs,
        name: value,
      }));
    } else if (name === "email") {
      setMessageUs(() => ({
        ...messageUs,
        email: value,
      }));
    }
  }

  function handleTextAreaChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    const { value, name } = event.currentTarget;
    if (name === "message") {
      setMessageUs(() => ({
        ...messageUs,
        message: value,
      }));
    }
  }

  return (
    <Card category="email" icon="email" color="pink">
      <Input
        placeholder="Podaj imię"
        name="name"
        value={messageUs.name}
        onChange={handleValueChange}
        additionalClasses="mb-3"
        borderColor="pink"
        fontTheme="dark"
      />
      <Input
        placeholder="Podaj email"
        name="email"
        value={messageUs.email}
        onChange={handleValueChange}
        additionalClasses="mb-3"
        borderColor="pink"
        fontTheme="dark"
      />
      <label htmlFor="message" className="contact-page__card--email__label">
        Jak możemy Ci pomóc?
      </label>
      <textarea
        name="message"
        id="message"
        className="mt-1 text-area text-area--contact-page "
        placeholder="Twoja wiadomość"
        value={messageUs.message}
        onChange={handleTextAreaChange}
      />
      <Button
        text="Wyślij"
        color="pink"
        type="submit"
        additionalClasses="email-card__button"
      />
    </Card>
  );
}
