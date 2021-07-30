import * as React from "react";
import { audi } from "../assets";

export function Gallery(): JSX.Element {
  return (
    <div className="gallery-page__gallery">
      <img className="gallery-page__gallery__image" src={audi} alt="" />
      <img className="gallery-page__gallery__image" src={audi} alt="" />
      <img className="gallery-page__gallery__image" src={audi} alt="" />
      <img className="gallery-page__gallery__image" src={audi} alt="" />
      <img className="gallery-page__gallery__image" src={audi} alt="" />
      <img className="gallery-page__gallery__image" src={audi} alt="" />
      <img className="gallery-page__gallery__image" src={audi} alt="" />
      <img className="gallery-page__gallery__image" src={audi} alt="" />
      <img className="gallery-page__gallery__image" src={audi} alt="" />
    </div>
  );
}
