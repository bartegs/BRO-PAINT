import * as React from "react";

export function ThankYouPage(): JSX.Element {
  return (
    <div className="container thank-you-page">
      <div className="thank-you-page__card">
        <h1 className="thank-you-page__heading">Dziękujemy!</h1>
        <p className="thank-you-page__text">
          Twoje zgłoszenie właśnie do nas wyruszyło. Skontakujemy się z Tobą w
          ciągu w ciągu 48h.
        </p>
        <p className="thank-you-page__signature signature">
          Pozdrawiamy, <br />
          <span className="signature__first-word">Zespół </span>
          <span className="signature__second-word">Bro </span>
          <span className="signature__third-word"> Paint</span>
        </p>
      </div>
    </div>
  );
}
