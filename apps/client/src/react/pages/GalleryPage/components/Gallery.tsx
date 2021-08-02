/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import * as React from "react";
import * as Modal from "react-modal";
import { audi } from "../assets";

Modal.setAppElement("div");

export function Gallery(): JSX.Element {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div id="gallery" className="gallery-page__gallery">
        <img
          onClick={openModal}
          className="gallery-page__gallery__image"
          src={audi}
          alt=""
        />
        <img
          onClick={openModal}
          className="gallery-page__gallery__image"
          src={audi}
          alt=""
        />
        <img
          onClick={openModal}
          className="gallery-page__gallery__image"
          src={audi}
          alt=""
        />
        <img
          onClick={openModal}
          className="gallery-page__gallery__image"
          src={audi}
          alt=""
        />
        <img
          onClick={openModal}
          className="gallery-page__gallery__image"
          src={audi}
          alt=""
        />
        <img
          onClick={openModal}
          className="gallery-page__gallery__image"
          src={audi}
          alt=""
        />
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="gallery-page__gallery__modal"
        overlayClassName="gallery-page__gallery__overlay"
      >
        <img
          className="gallery-page__gallery__modal__full-screen-image"
          src={audi}
          alt=""
        />
        <div className="gallery-page__gallery__modal__button__container">
          <button
            className="gallery-page__gallery__modal__button"
            aria-label="Zamknij pełny ekran"
            onClick={closeModal}
          />
        </div>
      </Modal>
    </>
  );
}
