import * as React from "react";

import { host } from "../../../../../../../../common/utils/contants";
import { getToken } from "../../../../../../../../common/utils/functions";

import type { SelectItemType } from "./Form";

export function getEmployeeList(
  setEmployees: React.Dispatch<React.SetStateAction<SelectItemType[]>>
) {
  fetch(`${host}/employees/test`, {
    headers: {
      authorization: `Bearer ${getToken()}`,
    },
  })
    .then((resp) => resp.json())
    .then((result) =>
      result.map(
        (item: {
          _id: string;
          employeeInfo: { firstName: string; lastName: string };
        }) => {
          const { _id: id, employeeInfo } = item;
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
