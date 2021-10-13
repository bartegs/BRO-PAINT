import * as React from "react";
import type { SelectItemType } from "./OrderCard";

export function getEmployeeList(
  setEmployees: React.Dispatch<React.SetStateAction<SelectItemType[]>>
) {
  fetch("http://localhost:3000/employees/test")
    .then((resp) => resp.json())
    .then((result) =>
      result.map(
        (item: {
          id: string;
          employeeInfo: { firstName: string; lastName: string };
        }) => {
          const { id, employeeInfo } = item;
          const { firstName, lastName } = employeeInfo;

          return {
            value: id,
            label: `${firstName} ${lastName}`,
          };
        }
      )
    )
    .then((employees) => setEmployees(employees));
}
