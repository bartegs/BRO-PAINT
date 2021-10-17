import * as React from "react";

import type { SelectItemType } from "./components";

export function getEmployeeList(
  setEmployees: React.Dispatch<React.SetStateAction<SelectItemType[]>>
) {
  fetch("http://localhost:3000/employees/test")
    .then((resp) => resp.json())
    .then((result) =>
      result.map(
        (item: {
          _id: string;
          employeeInfo: { firstName: string; lastName: string };
        }) => {
          const { _id, employeeInfo } = item;
          const { firstName, lastName } = employeeInfo;

          return {
            value: _id,
            label: `${firstName} ${lastName}`,
          };
        }
      )
    )
    .then((employees) => setEmployees(employees));
}
