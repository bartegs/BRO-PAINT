import * as React from "react";
import classnames from "classnames";

interface FileProps {
  name: string;
  id: string;
  fileAdditionalClasses?: string;
  labelAdditionalClasses?: string;
  required?: boolean;
}

export function File({
  name,
  id,
  fileAdditionalClasses,
  labelAdditionalClasses,
  required,
}: FileProps): JSX.Element {
  return (
    <>
      <label
        htmlFor={id}
        className={classnames("file__label", labelAdditionalClasses)}
      >
        Jeśli chcesz, możesz załączyć zdjęcia auta, pomoże nam to w oszacowaniu
        wymaganej pracy.
      </label>
      <input
        type="file"
        className={classnames("file", fileAdditionalClasses)}
        multiple
        id={id}
        name={name}
        required={required}
      />
    </>
  );
}
