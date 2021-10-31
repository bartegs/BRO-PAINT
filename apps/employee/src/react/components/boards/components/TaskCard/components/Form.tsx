import * as React from "react";

import type { OrderType } from "../../../../../../../../../server/models/Order";
import type { StageColor } from "../../../../../../../../common/utils/types";

import { EmployeeContext } from "../../../../../contexts";
import { sendUpdatedData } from "../../../utils";
import { Button } from "../../../../../../../../common/react/components";

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

  const { orderDetails } = order;
  const { main, sub } = orderDetails.stage;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    ordersDispatch({
      type: "UPDATE_ORDER_SUBSTAGE",
      orderId: order._id,
      mainStage: main,
      isSubstageFinished: true,
    });

    sendUpdatedData(
      {
        ...order,
        orderDetails: {
          ...orderDetails,
          stage: {
            ...orderDetails.stage,
            sub: {
              ...order.orderDetails.stage.sub,
              isFinished: true,
            },
          },
        },
      },

      "orders",
      order._id
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-2">
      <div className="order-card__buttons order-card__buttons--odd">
        <Button
          type="submit"
          text="Zrobione"
          additionalClasses="order-card__button mr-1"
          color={color}
          isDisabled={sub.isFinished}
        />
      </div>
    </form>
  );
}
