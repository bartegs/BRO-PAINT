import * as React from "react";
import classnames from "classnames";

interface FileProps {
  name: string;
  id: string;
  additionalClasses?: string;
}

export function File({ name, id, additionalClasses }: FileProps): JSX.Element {
  return (
    <>
      <label
        htmlFor={id}
        className={classnames("file__label", additionalClasses)}
      >
        Jeśli chcesz, możesz załączyć zdjęcia auta, pomoże nam to w oszacowaniu
        wymaganej pracy.
      </label>
      <input type="file" className="file my-3" multiple id={id} name={name} />
    </>
  );
}
