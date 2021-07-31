import * as React from "react";
import classnames from "classnames";

import { Icon } from "../../../components/Icon";

export function Carousel(): JSX.Element {
  const [finishedPhotos, setFinishedPhotos] = React.useState(true);
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
        className="gallery-page__carousel__arrows-container gallery-page__carousel__arrows-container--left"
      >
        <Icon
          icon="arrow"
          size="gallery-arrow"
          color={isHoveredLeft ? "pink-light" : "pink"}
        />
        <Icon
          icon="arrow"
          size="gallery-arrow"
          color={isHoveredLeft ? "blue-light" : "blue"}
        />
        <Icon
          icon="arrow"
          size="gallery-arrow"
          color={isHoveredLeft ? "green-light" : "green"}
        />
      </button>
      <div className="gallery-page__carousel__toggler-switch">
        <div className="gallery-page__carousel__toggler-container">
          <button
            onClick={handleLeftClick}
            aria-label="Ukończone zlecenia"
            className={classnames("mr-4", "gallery-page__carousel__toggler", {
              "gallery-page__carousel__toggler--on": finishedPhotos,
            })}
          />
          <button
            onClick={handleRightClick}
            aria-label="Przebieg naszej pracy"
            className={classnames("gallery-page__carousel__toggler", {
              "gallery-page__carousel__toggler--on": !finishedPhotos,
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
        className="gallery-page__carousel__arrows-container"
      >
        <Icon
          icon="arrow"
          size="gallery-arrow"
          color={isHoveredRight ? "pink-light" : "pink"}
        />
        <Icon
          icon="arrow"
          size="gallery-arrow"
          color={isHoveredRight ? "blue-light" : "blue"}
        />
        <Icon
          icon="arrow"
          size="gallery-arrow"
          color={isHoveredRight ? "green-light" : "green"}
        />
      </button>
    </div>
  );
}
