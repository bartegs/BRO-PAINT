import * as React from "react";
import * as Modal from "react-modal";
import { Photos } from "./Photos";
import {
  mclarenLg,
  c5Lg,
  californiaLg,
  c6Lg,
  porscheLg,
  huracanLg,
  rs7GreyLg,
  mustangLg,
  c43Lg,
  rs7WhiteLg,
  e61Lg,
  a5Lg,
  c8Lg,
  db9Lg,
  ferrariBlackLg,
  g20Lg,
  gallardoLg,
  rs6Lg,
  rs7GoldLg,
  s63Lg,
  s90Lg,
  brosLg,
  cuttingLg,
  detailingLg,
  ferrariLg,
  paintingLg,
  prepLg,
  scratch1Lg,
  scratch2Lg,
  scratch3Lg,
  tapeLg,
  washingLg,
  jetWashLg,
} from "../assets/index";

interface GalleryProps {
  finishedPhotos: boolean;
}

export function Gallery({ finishedPhotos }: GalleryProps): JSX.Element {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [targetImage, setTargetImage] = React.useState("");
  const [targetAlt, setTargetAlt] = React.useState("");

  function handleModal(e: React.MouseEvent) {
    const smallImage = (e.target as HTMLImageElement).alt;
    let largeImage;

    switch (smallImage) {
      case "mclaren":
        largeImage = mclarenLg;
        break;
      case "c5":
        largeImage = c5Lg;
        break;
      case "california":
        largeImage = californiaLg;
        break;
      case "c6":
        largeImage = c6Lg;
        break;
      case "porsche":
        largeImage = porscheLg;
        break;
      case "huracan":
        largeImage = huracanLg;
        break;
      case "rs7Grey":
        largeImage = rs7GreyLg;
        break;
      case "mustang":
        largeImage = mustangLg;
        break;
      case "c43":
        largeImage = c43Lg;
        break;
      case "rs7White":
        largeImage = rs7WhiteLg;
        break;
      case "e61":
        largeImage = e61Lg;
        break;
      case "a5":
        largeImage = a5Lg;
        break;
      case "c8":
        largeImage = c8Lg;
        break;
      case "db9":
        largeImage = db9Lg;
        break;
      case "ferrariBlack":
        largeImage = ferrariBlackLg;
        break;
      case "g20":
        largeImage = g20Lg;
        break;
      case "gallardo":
        largeImage = gallardoLg;
        break;
      case "rs6":
        largeImage = rs6Lg;
        break;
      case "rs7Gold":
        largeImage = rs7GoldLg;
        break;
      case "s63":
        largeImage = s63Lg;
        break;
      case "s90":
        largeImage = s90Lg;
        break;
      case "bros":
        largeImage = brosLg;
        break;
      case "cutting":
        largeImage = cuttingLg;
        break;
      case "detailing":
        largeImage = detailingLg;
        break;
      case "ferrari":
        largeImage = ferrariLg;
        break;
      case "painting":
        largeImage = paintingLg;
        break;
      case "prep":
        largeImage = prepLg;
        break;
      case "scratch1":
        largeImage = scratch1Lg;
        break;
      case "scratch2":
        largeImage = scratch2Lg;
        break;
      case "scratch3":
        largeImage = scratch3Lg;
        break;
      case "tape":
        largeImage = tapeLg;
        break;
      case "washing":
        largeImage = washingLg;
        break;
      case "jetWash":
        largeImage = jetWashLg;
        break;
      default:
        largeImage = (e.target as HTMLImageElement).src;
    }

    setTargetImage(largeImage);
    setTargetAlt((e.target as HTMLImageElement).alt);
    setIsModalOpen((prevState) => !prevState);
  }

  return (
    <>
      <div id="gallery" className="gallery-page__gallery">
        <Photos finishedPhotos={finishedPhotos} handleModal={handleModal} />
      </div>
      <Modal
        ariaHideApp={false}
        isOpen={isModalOpen}
        onRequestClose={handleModal}
        className="gallery-page__modal"
        overlayClassName="gallery-page__overlay"
      >
        <img
          className="gallery-page__full-screen-image"
          src={targetImage}
          alt={targetAlt}
        />
        <div className="gallery-page__button-container">
          <button
            className="gallery-page__button"
            aria-label="Zamknij pełny ekran"
            onClick={handleModal}
          />
        </div>
      </Modal>
    </>
  );
}
