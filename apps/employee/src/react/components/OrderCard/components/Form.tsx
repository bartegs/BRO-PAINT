import * as React from "react";

import Select from "react-select";

import type { OrderType } from "../../../../../../../server/models/Order";
import type { StageColor } from "../../../../../../common/utils/types";

import { getEmployeeList } from "./utils";
import { sendUpdatedData } from "../../Board/utils";

import { Buttons } from "./Buttons";
import { EmployeeContext } from "../../../contexts";

interface OwnProps {
  color: StageColor;
  order: OrderType;
  substageList: {};
  setIsFormSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface SelectItemType {
  label: string;
  value: string | number;
}

export function Form({
  color,
  order,
  substageList,
  setIsFormSubmitted,
}: OwnProps): JSX.Element {
  const [selectedSubstage, setSelectedSubstage] = React.useState(null);
  const [selectedEmployee, setSelectedEmployee] = React.useState(null);
  const [employees, setEmployees] = React.useState<SelectItemType[]>([
    { value: "", label: "" },
  ]);

  const { orderDetails } = order;
  const { main } = orderDetails.stage;

  const { ordersDispatch } = React.useContext(EmployeeContext);

  React.useEffect(() => {
    getEmployeeList(setEmployees);
  }, []);

  function handleSelectedSubstageChange(currentSelected: SelectItemType) {
    setSelectedSubstage(currentSelected);
    setIsFormSubmitted(false);
  }

  function handleSelectedEmployeeChange(currentSelected: SelectItemType) {
    setSelectedEmployee(currentSelected);
    setIsFormSubmitted(false);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (selectedEmployee && selectedSubstage) {
      ordersDispatch({
        type: "UPDATE_ORDER_DETAILS",
        orderId: order._id,
        mainStage: main,
        substage: selectedSubstage.value,
        employee: selectedEmployee.value,
      });

      sendUpdatedData(
        {
          ...order,
          orderDetails: {
            ...orderDetails,
            stage: {
              ...orderDetails.stage,
              sub: selectedSubstage.value,
            },
            repairer: selectedEmployee.value,
          },
        },

        "orders",
        order._id
      );

      setIsFormSubmitted(true);
    }
  }

  function handleReset() {
    setSelectedEmployee(null);
    setSelectedSubstage(null);
    setIsFormSubmitted(true);
  }

  const processedSubstageList = Object.values(substageList).map(
    ({ name }, i) => ({
      value: i,
      label: name,
    })
  );

  return (
    <form onSubmit={handleSubmit} onReset={handleReset} className="mt-2">
      <Select
        className="mb-1"
        placeholder="przydziel sub-etap"
        options={processedSubstageList}
        value={selectedSubstage}
        onChange={handleSelectedSubstageChange}
      />
      <Select
        placeholder="przydziel pracownika"
        options={employees}
        value={selectedEmployee}
        onChange={handleSelectedEmployeeChange}
      />
      <Buttons color={color} />
    </form>
  );
}
