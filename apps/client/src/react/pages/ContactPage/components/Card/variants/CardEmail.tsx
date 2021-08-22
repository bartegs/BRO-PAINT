import * as React from "react";

import { Card } from "../Card";
import { Input } from "../../../../../components/forms/components/Input";
import { Button } from "../../../../../components/Button";
import { TextArea } from "../../../../../components/forms/components/TextArea";

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
      <TextArea
        labelText="Jak możemy Ci pomóc?"
        name="message"
        id="message"
        value={messageUs.message}
        placeholder="Twoja wiadomość"
        onChange={handleTextAreaChange}
        color="pink"
        variant="underlined"
        additionalClasses="mt-1"
      />
      <Button text="Wyślij" variant="primary" color="pink" type="submit" />
    </Card>
  );
}
