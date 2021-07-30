import * as React from "react";

import { Carousel } from "./components/Carousel";

export function GalleryPage(): JSX.Element {
  return (
    <div className="gallery-page container">
      <Carousel />
    </div>
  );
}
