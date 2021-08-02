/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import * as React from "react";
// import * as Modal from "react-modal";

import { audi, bmw, ferrari, detailing, painting, tinsmith } from "../assets";

const finishedGallery = [
  { photo: audi, caption: "audi" },
  { photo: bmw, caption: "bmw" },
  { photo: ferrari, caption: "ferrari" },
];

const unfinishedGallery = [
  { photo: detailing, caption: "detailing" },
  { photo: painting, caption: "painting" },
  { photo: tinsmith, caption: "tinsmith" },
];

interface PhotoProps {
  photo?: string | any;
  caption: string;
}

// const [modalIsOpen, setIsOpen] = React.useState(false);

// function closeModal() {
//   setIsOpen(false);
// }

// function openModal() {
//   const [modalIsOpen, setIsOpen] = React.useState(false);

//   setIsOpen(true);
// }

export function Photo({ photo, caption }: PhotoProps): JSX.Element {
  // function openModal.caption() {
  // const [modalIsOpen, setIsOpen] = React.useState(false);
  return (
    <img
      // onClick={openModal}
      className="gallery-page__gallery__image"
      src={photo}
      alt={JSON.stringify(caption)}
    />
  );
}

export const finished = finishedGallery.map(({ photo, caption }) => (
  <Photo photo={photo} caption={caption} key={caption} />
));

export const unfinished = unfinishedGallery.map(({ photo, caption }) => (
  <Photo photo={photo} caption={caption} key={caption} />
));

// const [modalIsOpen, setIsOpen] = React.useState(false);

// function closeModal() {
//   setIsOpen(false);
// }

// function openModal() {
//   setIsOpen(true);
// }

export const finishedModal = finishedGallery.map(({ photo, caption }) => (
  // <Modal
  //   isOpen={modalIsOpen}
  //   onRequestClose={closeModal}
  //   className="gallery-page__gallery__modal"
  //   overlayClassName="gallery-page__gallery__overlay"
  // >
  <img
    className="gallery-page__gallery__modal__full-screen-image"
    src={photo}
    alt={caption}
  />
  // <div className="gallery-page__gallery__modal__button__container">
  //   <button
  //     className="gallery-page__gallery__modal__button"
  //     aria-label="Zamknij pełny ekran"
  //     onClick={closeModal}
  //   />
  // </div>
  // </Modal>
));
