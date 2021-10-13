import Select from "react-select";
import * as React from "react";
import { FormEvent, useContext, useEffect, useState } from "react";
import { Buttons } from "./Buttons";
import { sendUpdatedData } from "../../Board/utils";
import { EmployeeContext } from "../../../contexts";
import { getEmployeeList } from "../utils";
import { OrderType } from "../../../../../../../server/models/Order";
import { StageColor } from "../../../../../../common/utils/types";

interface OwnProps {
  color: StageColor;
  order: OrderType;
  substageList: {};
}
export interface SelectItemType {
  label: string;
  value: string | number;
}

export function Form({ color, order, substageList }: OwnProps): JSX.Element {
  const [selectedSubstage, setSelectedSubstage] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [employees, setEmployees] = useState<SelectItemType[]>([
    { value: "", label: "" },
  ]);

  const { orderDetails } = order;
  const { main } = orderDetails.stage;

  const { ordersDispatch } = useContext(EmployeeContext);

  useEffect(() => {
    getEmployeeList(setEmployees);
  }, []);

  function handleSelectedSubstageChange(currentSelected: SelectItemType) {
    setSelectedSubstage(currentSelected);
  }

  function handleSelectedEmployeeChange(currentSelected: SelectItemType) {
    setSelectedEmployee(currentSelected);
  }

  function handleSubmit(e: FormEvent) {
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
    }
  }

  const procesedSubstageList = Object.values(substageList).map(
    ({ name }, i) => ({
      value: i,
      label: name,
    })
  );

  return (
    <form onSubmit={handleSubmit} className="mt-2">
      <Select
        className="mb-1"
        placeholder="przydziel sub-etap"
        options={procesedSubstageList}
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
