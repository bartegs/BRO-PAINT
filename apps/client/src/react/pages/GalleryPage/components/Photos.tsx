import * as React from "react";
import { Photo } from "./Photo";
import { audi, bmw, ferrari, detailing, painting, tinsmith } from "../assets";

interface PhotosProps {
  handleModal: (e: React.MouseEvent) => void;
  finishedPhotos: boolean;
}

export function Photos({
  handleModal,
  finishedPhotos,
}: PhotosProps): JSX.Element {
  const images = {
    finished: [
      { photo: audi, caption: "audi" },
      { photo: bmw, caption: "bmw" },
      { photo: ferrari, caption: "ferrari" },
    ],
    unfinished: [
      { photo: detailing, caption: "detailing" },
      { photo: painting, caption: "painting" },
      { photo: tinsmith, caption: "tinsmith" },
    ],
  };

  const { finished, unfinished } = images;
  const photosToRender = finishedPhotos ? finished : unfinished;

  return (
    <>
      {photosToRender.map(({ photo, caption }) => (
        <Photo
          onClick={handleModal}
          photo={photo}
          caption={caption}
          key={caption}
        />
      ))}
    </>
  );
}
