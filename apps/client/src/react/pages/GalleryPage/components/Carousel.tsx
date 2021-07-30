import * as React from "react";

import { Icon } from "../../../components/Icon";

export function Carousel(): JSX.Element {
  return (
    <div className="gallery-page__carousel">
      <div className="gallery-page__carousel__arrows-container gallery-page__carousel__arrows-container--left">
        <Icon icon="arrow" size="gallery-arrow" color="pink" />
        <Icon icon="arrow" size="gallery-arrow" color="blue" />
        <Icon icon="arrow" size="gallery-arrow" color="green" />
      </div>
      <div className="gallery-page__carousel__toggler-container">
        <div className="gallery-page__carousel__toggler">
          <div className="gallery-page__carousel__toggler gallery-page__carousel__toggler--on" />
          <div className="gallery-page__carousel__toggler gallery-page__carousel__toggler--off" />
          <p>Ukończone Zlecenia</p>
        </div>
      </div>
      <div className="gallery-page__carousel__arrows-container">
        <Icon icon="arrow" size="gallery-arrow" color="pink" />
        <Icon icon="arrow" size="gallery-arrow" color="blue" />
        <Icon icon="arrow" size="gallery-arrow" color="green" />
      </div>
    </div>
  );
}
