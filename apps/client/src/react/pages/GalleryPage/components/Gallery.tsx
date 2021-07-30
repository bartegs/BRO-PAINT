import * as React from "react";

export function Gallery(): JSX.Element {
  return (
    <div className="gallery-page__gallery">
      <img
        // eslint-disable-next-line global-require
        // eslint-disable-next-line import/no-useless-path-segments
        // src={require("./../../../../../../assets/images/logo-lg.png")}
        height="300px"
        width="300px"
        alt=""
      />
    </div>
  );
}
