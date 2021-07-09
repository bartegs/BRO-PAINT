import * as React from "react";

import classnames from "classnames";

interface InputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  value: string;
  checked?: boolean;
  placeholder?: string;
  id?: string;
  additionalClasses?: string;
  type?: string;
}

export function Input({
  onChange,
  name,
  value,
  checked,
  placeholder,
  id,
  additionalClasses,
  type,
}: InputProps) {
  return (
    <input
      onChange={onChange}
      className={classnames("input", additionalClasses)}
      name={name}
      placeholder={placeholder}
      value={value}
      checked={checked}
      id={id}
      type={type}
    />
  );
}
