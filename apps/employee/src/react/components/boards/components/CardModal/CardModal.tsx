import * as React from "react";
import * as ReactModal from "react-modal";
import { OrderType } from "../../../../../../../../server/models/Order";

interface OwnProps {
  isOpen: boolean;
  closeModal: () => void;
  labelColor: string;
  substageName: string;
  order: OrderType;
}

export function CardModal({
  isOpen,
  closeModal,
  labelColor,
  substageName,
  order,
}: OwnProps) {
  const { customerInfo, carInfo, orderDetails, orderInfo } = order;
  const { names, phone, email } = customerInfo;
  const { licencePlate, model, make, productionYear, paintCode } = carInfo;
  const { orderNumber } = orderDetails;
  const { comment } = orderInfo;

  const details = [
    { key: "AUTO", value: `${model} ${make}` },
    { key: "ROCZNIK", value: productionYear },
    { key: "KOD LAKIERU ", value: paintCode },
    { key: "NR REJESTRACYJNY", value: licencePlate },
    { key: "USŁUGA", value: "NAPRAWA" },
    { key: "ZLECENIODAWCA", value: names },
    { key: "EMAIL", value: email },
    { key: "TELEFON ", value: phone },
  ];
  return (
    <ReactModal
      className="card-modal"
      ariaHideApp={false}
      onRequestClose={closeModal}
      isOpen={isOpen}
      overlayClassName="modal-overlay"
    >
      <div className="card-modal__content">
        <div className="card-modal__heading">
          <strong className="card-modal__id">#{orderNumber}</strong>
          <span
            className="card-modal__label"
            style={{ backgroundColor: labelColor }}
          >
            {substageName}
          </span>
          <div
            tabIndex={0}
            onKeyDown={(event) => event.code !== "Tab" && closeModal()}
            role="button"
            onClick={closeModal}
            className="card-modal__cross cross"
          >
            <div className="cross__bar" />
            <div className="cross__bar" />
          </div>
        </div>
        <div className="card-modal__text-wrapper">
          <div className="card-modal__details details">
            {details.map(({ key, value }) => (
              <div className="details__item">
                <div className="details__key">{key}:</div>
                <div className="details__value">{value}</div>
              </div>
            ))}
          </div>
          <div className="card-modal__comment comment">
            <h3 className="comment__heading">Uwagi</h3>
            <p className="comment__text">{comment || "Brak"}</p>
          </div>
        </div>
        <div className="card-modal__image" />
      </div>
    </ReactModal>
  );
}
