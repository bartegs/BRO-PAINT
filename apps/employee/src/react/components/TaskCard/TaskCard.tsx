import * as React from "react";
import { Icon } from "../../../../../client/src/react/components/icons/Icon";

interface OwnProps {
  hasLabel: boolean;
}

export function TaskCard({ taskId, id, carModel }): JSX.Element {
  return (
    <div className="board__task task-card" key={id}>
      <div className="task-card__temp">
        <strong className="task-card__id">#{taskId}</strong>
        <span className="task-card__label label">Kolor</span>
      </div>
      <div className="task-card__client-car">
        <Icon icon="car" size="sm" />
        <span className="ml-2 mr-1">Toiota</span> <span>Nli2237</span>
      </div>
      <div className="task-card__client">
        <Icon icon="person" size="sm" />
        <span className="ml-2">Kuba</span>
      </div>
    </div>
  );
}
