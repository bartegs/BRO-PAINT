import * as React from "react";

import type { OrderType } from "../../../../../../../../../server/models/Order";
import type { StageColor } from "../../../../../../../../common/utils/types";

import { Buttons } from "../../Buttons";
import { EmployeeContext } from "../../../../../contexts";

interface OwnProps {
  color: StageColor;
  order: OrderType;
}
export interface SelectItemType {
  label: string;
  value: string | number;
}

export function Form({ color, order }: OwnProps): JSX.Element {
  const { ordersDispatch } = React.useContext(EmployeeContext);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // sendUpdatedData(
    //   {
    //     ...order,
    //     orderDetails: {
    //       ...orderDetails,
    //       stage: {
    //         ...orderDetails.stage,
    //         sub: { id: selectedSubstage.value, isFinished: false },
    //       },
    //       repairer: selectedEmployee.value,
    //     },
    //   },
    //
    //   "orders",
    //   order._id
    // );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-2">
      <Buttons color={color} />
    </form>
  );
}
