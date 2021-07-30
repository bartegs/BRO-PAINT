import * as React from "react";

import { Carousel } from "./components/Carousel";
import { Gallery } from "./components/Gallery";

export function GalleryPage(): JSX.Element {
  return (
    <div className="gallery-page container">
      <Carousel />
      <Gallery />
    </div>
  );
}
