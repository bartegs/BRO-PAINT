import * as React from "react";
import classnames from "classnames";

import { ArrowIcon } from "../../../components/icons/ArrowIcon";

interface CarouselProps {
  finishedPhotos: boolean;
  setFinishedPhotos: (arg: boolean) => void;
}

export function Carousel({
  finishedPhotos,
  setFinishedPhotos,
}: CarouselProps): JSX.Element {
  const [isHoveredLeft, setIsHoveredLeft] = React.useState(false);
  const [isHoveredRight, setIsHoveredRight] = React.useState(false);

  function handleLeftClick() {
    setFinishedPhotos(true);
  }

  function handleRightClick() {
    setFinishedPhotos(false);
  }

  function handleLeftArrowsColorHover() {
    setIsHoveredLeft(true);
  }

  function handleLeftArrowsColor() {
    setIsHoveredLeft(false);
  }

  function handleRightArrowsColorHover() {
    setIsHoveredRight(true);
  }

  function handleRightArrowsColor() {
    setIsHoveredRight(false);
  }

  return (
    <div className="gallery-page__carousel">
      <button
        onClick={handleLeftClick}
        onMouseOver={handleLeftArrowsColorHover}
        onMouseOut={handleLeftArrowsColor}
        onFocus={handleLeftArrowsColorHover}
        onBlur={handleLeftArrowsColor}
        className="gallery-page__arrows-container gallery-page__arrows-container--left"
      >
        <ArrowIcon color={isHoveredLeft ? "pink-light" : "pink"} />
        <ArrowIcon color={isHoveredLeft ? "blue-light" : "blue"} />
        <ArrowIcon color={isHoveredLeft ? "green-light" : "green"} />
      </button>
      <div className="gallery-page__toggler-switch">
        <div className="gallery-page__toggler-container">
          <button
            onClick={handleLeftClick}
            aria-label="Ukończone zlecenia"
            className={classnames("mr-4", "gallery-page__toggler", {
              "gallery-page__toggler--on": finishedPhotos,
            })}
          />
          <button
            onClick={handleRightClick}
            aria-label="Przebieg naszej pracy"
            className={classnames("gallery-page__toggler", {
              "gallery-page__toggler--on": !finishedPhotos,
            })}
          />
        </div>
        <div>
          <p>
            {finishedPhotos ? "Ukończone zlecenia" : "Przebieg naszej pracy"}
          </p>
        </div>
      </div>
      <button
        onClick={handleRightClick}
        onMouseOver={handleRightArrowsColorHover}
        onMouseOut={handleRightArrowsColor}
        onFocus={handleRightArrowsColorHover}
        onBlur={handleRightArrowsColor}
        className="gallery-page__arrows-container gallery-page__arrows-container--right"
      >
        <ArrowIcon color={isHoveredRight ? "pink-light" : "pink"} />
        <ArrowIcon color={isHoveredRight ? "blue-light" : "blue"} />
        <ArrowIcon color={isHoveredRight ? "green-light" : "green"} />
      </button>
    </div>
  );
}
