import * as React from "react";

import { Carousel } from "./components/Carousel";
import { Gallery } from "./components/Gallery";

export function GalleryPage(): JSX.Element {
  const [finishedPhotos, setFinishedPhotos] = React.useState(true);

  return (
    <div className="gallery-page container">
      <Carousel
        finishedPhotos={finishedPhotos}
        setFinishedPhotos={setFinishedPhotos}
      />
      <Gallery finishedPhotos={finishedPhotos} />
    </div>
  );
}
