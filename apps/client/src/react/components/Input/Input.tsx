import * as React from "react";

import classnames from "classnames";

interface InputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  value: string;
  placeholder: string;
  id?: string;
  additionalClasses?: string;
}

export function Input({
  onChange,
  name,
  value,
  placeholder,
  id,
  additionalClasses,
}: InputProps) {
  return (
    <input
      onChange={onChange}
      className={classnames("input", additionalClasses)}
      name={name}
      placeholder={placeholder}
      value={value}
      id={id}
    />
  );
}
