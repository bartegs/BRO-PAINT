import * as React from "react";
import * as Modal from "react-modal";
import { Photos } from "./Photos";

Modal.setAppElement("div");

interface GalleryProps {
  finishedPhotos: boolean;
}

export function Gallery({ finishedPhotos }: GalleryProps): JSX.Element {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [targetImage, setTargetImage] = React.useState("");
  const [targetAlt, setTargetAlt] = React.useState("");

  function handleModal(e: React.MouseEvent) {
    setTargetImage((e.target as HTMLImageElement).src);
    setTargetAlt((e.target as HTMLImageElement).alt);
    setIsModalOpen((prevState) => !prevState);
  }

  return (
    <>
      <div id="gallery" className="gallery-page__gallery">
        <Photos finishedPhotos={finishedPhotos} handleModal={handleModal} />
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleModal}
        className="gallery-page__gallery__modal"
        overlayClassName="gallery-page__gallery__overlay"
      >
        <img
          className="gallery-page__gallery__modal__full-screen-image"
          src={targetImage}
          alt={targetAlt}
        />
        <div className="gallery-page__gallery__modal__button__container">
          <button
            className="gallery-page__gallery__modal__button"
            aria-label="Zamknij pełny ekran"
            onClick={handleModal}
          />
        </div>
      </Modal>
    </>
  );
}
