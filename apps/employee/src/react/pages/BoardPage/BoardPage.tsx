import * as React from "react";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { NavPanel } from "./components";

const stages = [
  {
    id: 0,
    color: "grey",
    title: "ZLECENIA PRZYJĘTE",
  },
  {
    id: 1,
    color: "green",
    title: "PRACE PRZYGOTOWAWCZO BlACHARSKIE",
  },
  {
    id: 2,
    color: "blue",
    title: "PRACE LAKIERNICZE PRACE LAKIERNICZE",
  },
  {
    id: 3,
    color: "pink",
    title: "PRACE DETAILINGOWE",
  },
  {
    id: 4,
    color: "miki",
    title: "ZLECENIA UKOŃCZONE",
  },
];

// manageTaksPage
export function BoardPage(): JSX.Element {
  return (
    <div className="board-page">
      <NavPanel />
      <section className="board-page__board board">
        <DragDropContext>
          {stages.map(({ id, title }) => (
            <Droppable droppableId={title}>
              {(provided) => (
                <div
                  className="board__column"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  <div className="board__title">{title}</div>
                </div>
              )}
            </Droppable>
          ))}
        </DragDropContext>
      </section>
    </div>
  );
}
