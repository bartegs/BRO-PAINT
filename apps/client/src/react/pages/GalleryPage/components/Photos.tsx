import * as React from "react";
import {
  a5,
  c5,
  c6,
  c8,
  c43,
  california,
  db9,
  e61,
  ferrariBlack,
  g20,
  gallardo,
  huracan,
  mclaren,
  mustang,
  porsche,
  rs6,
  rs7Gold,
  rs7Grey,
  rs7White,
  s63,
  s90,
  bros,
  cutting,
  detailing,
  ferrari,
  painting,
  prep,
  scratch1,
  scratch2,
  scratch3,
  tape,
  washing,
  jetWash,
} from "../assets";
import { Photo } from "./Photo";

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
      { photo: mclaren, caption: "mclaren" },
      { photo: c5, caption: "c5" },
      { photo: california, caption: "california" },
      { photo: c6, caption: "c6" },
      { photo: porsche, caption: "porsche" },
      { photo: huracan, caption: "huracan" },
      { photo: rs7Grey, caption: "rs7Grey" },
      { photo: mustang, caption: "mustang" },
      { photo: c43, caption: "c43" },
      { photo: rs7White, caption: "rs7White" },
      { photo: e61, caption: "e61" },
      { photo: a5, caption: "a5" },
      { photo: c8, caption: "c8" },
      { photo: db9, caption: "db9" },
      { photo: ferrariBlack, caption: "ferrariBlack" },
      { photo: g20, caption: "g20" },
      { photo: gallardo, caption: "gallardo" },
      { photo: rs6, caption: "rs6" },
      { photo: rs7Gold, caption: "rs7Gold" },
      { photo: s63, caption: "s63" },
      { photo: s90, caption: "s90" },
    ],
    unfinished: [
      { photo: cutting, caption: "cutting" },
      { photo: painting, caption: "painting" },
      { photo: bros, caption: "bros" },
      { photo: prep, caption: "prep" },
      { photo: ferrari, caption: "ferrari" },
      { photo: tape, caption: "tape" },
      { photo: scratch1, caption: "scratch1" },
      { photo: scratch2, caption: "scratch2" },
      { photo: scratch3, caption: "scratch3" },
      { photo: washing, caption: "washing" },
      { photo: jetWash, caption: "jetWash" },
      { photo: detailing, caption: "detailing" },
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
