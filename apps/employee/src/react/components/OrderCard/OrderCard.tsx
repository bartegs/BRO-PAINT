import * as React from "react";
import { Draggable } from "react-beautiful-dnd";

// import { useLocation } from "react-router-dom";

import { FormEvent, useContext, useEffect, useState } from "react";
import Select from "react-select";
import { StageColor } from "../../../../../common/utils/types";

import { Icon } from "../../../../../client/src/react/components/icons/Icon";
import { Buttons } from "./components";
import { sendUpdatedData } from "../Board/utils";
import { OrderType } from "../../../../../../server/models/Order";
import { getEmployeeList } from "./utils";
import { EmployeeContext } from "../../contexts/EmployeeContext";

interface OwnProps {
  order: OrderType;
  index: number;
  stageColor: StageColor;
  stage: {};
}

export interface SelectItemType {
  label: string;
  value: string | number;
}

export function OrderCard({
  order,
  index,
  stageColor,
  stage,
}: OwnProps): JSX.Element {
  const [employees, setEmployees] = useState<SelectItemType[]>([
    { value: "", label: "" },
  ]);
  const [selectedSubstage, setSelectedSubstage] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const { ordersDispatch } = useContext(EmployeeContext);

  useEffect(() => {
    getEmployeeList(setEmployees);
  }, []);

  // const { pathname } = useLocation();

  const substageList = Object.values(stage).map((item, i) => ({
    value: i,
    label: item,
  }));

  const { customerInfo, carInfo, orderDetails } = order;
  const { names } = customerInfo;
  const { licencePlate, model, make } = carInfo;
  const { orderNumber } = orderDetails;
  const { main } = orderDetails.stage;

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

  return (
    <Draggable draggableId={`${orderNumber}`} index={index}>
      {(provided) => (
        <div
          className="board__order order-card"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div className="order-card__heading">
            <strong className="order-card__id">#{orderNumber}</strong>
            <span className="order-card__label label">Kolor</span>
          </div>
          <div className="order-card__car">
            <Icon icon="car" size="sm" />
            <span className="ml-2 mr-1">
              {make} {model}
            </span>
            <span>{licencePlate}</span>
          </div>
          <div className="order-card__client">
            <Icon icon="person" size="sm" />
            <span className="ml-2">{names}</span>
          </div>
          {/* to be moved to separate component */}
          <form onSubmit={handleSubmit} className="mt-2">
            <Select
              className="mb-1"
              placeholder="przydziel sub-etap"
              options={substageList}
              value={selectedSubstage}
              onChange={handleSelectedSubstageChange}
            />
            <Select
              placeholder="przydziel pracownika"
              options={employees}
              value={selectedEmployee}
              onChange={handleSelectedEmployeeChange}
            />
            <Buttons color={stageColor} />
          </form>
          {/* {!pathname.includes("zarzadzanie-zleceniami") && ( */}
          {/* )} */}
        </div>
      )}
    </Draggable>
  );
}
