import * as React from "react";

export function CopyrightPage(): JSX.Element {
  return (
    <div className="copyright-page__container">
      <h3 className="mb-5">Nasza strona korzysta z:</h3>
      <span className="mb-1 copyright-page__attribution">
        Ikon autorstwa
        <a
          className="copyright-page__link"
          href="https://fonts.google.com/icons?selected=Material+Icons"
        >
          {" "}
          Google{" "}
        </a>
        z
        <a
          className="copyright-page__link"
          href="https://fonts.google.com/icons?selected=Material+Icons"
        >
          {" "}
          www.fonts.google.com/icons
        </a>
      </span>
      <span className="mb-1 copyright-page__attribution">
        Ikon autorstwa
        <a className="copyright-page__link" href="https://www.freepik.com">
          {" "}
          Freepik,{" "}
        </a>
        <a
          className="copyright-page__link"
          href="https://www.flaticon.com/authors/those-icons"
        >
          Those Icons{" "}
        </a>{" "}
        oraz{" "}
        <a
          className="copyright-page__link"
          href="https://www.flaticon.com/authors/gregor-cresnar"
        >
          Gregor Cresnar{" "}
        </a>
        z{" "}
        <a className="copyright-page__link" href="https://www.flaticon.com/">
          www.flaticon.com
        </a>
      </span>

      <span className="mb-1 copyright-page__attribution">
        Zdjęć autorstwa{" "}
        <a
          className="copyright-page__link"
          href="https://www.freepik.com/jcomp"
        >
          jcomp{" "}
        </a>
        oraz{" "}
        <a
          className="copyright-page__link"
          href="https://www.freepik.com/prostooleh"
        >
          prostooleh{" "}
        </a>
        z{" "}
        <a className="copyright-page__link" href="https://www.freepik.com/">
          freepik.com{" "}
        </a>
      </span>
      <span className="mb-1 copyright-page__attribution">
        Zdjęć autorstwa{" "}
        <a
          className="copyright-page__link"
          href="https://pixabay.com/pl/users/MertSabanci"
        >
          MertSabanci{" "}
        </a>
        oraz{" "}
        <a
          className="copyright-page__link"
          href="https://pixabay.com/pl/users/4657743-4657743/"
        >
          4657743{" "}
        </a>
        z{" "}
        <a className="copyright-page__link" href="https://pixabay.com/">
          pixabay.com{" "}
        </a>
      </span>
      <span className="mb-1 copyright-page__attribution">
        Zdjęć autorstwa{" "}
        <a
          className="copyright-page__link"
          href="https://www.pexels.com/@cottonbro"
        >
          cottonbro{" "}
        </a>
        oraz{" "}
        <a
          className="copyright-page__link"
          href="https://www.pexels.com/@tima-miroshnichenko"
        >
          Tima Miroshnichenko{" "}
        </a>
        z{" "}
        <a className="copyright-page__link" href="https://pexel.com/">
          pexel.com{" "}
        </a>
      </span>
      <h3 className="mt-5">
        Chcielibyśmy serdecznie podziękować autorom wyżej wymienonych treści za
        możliwość ich wykorzystania.
      </h3>
      <h2 className="copyright-page__heading mt-10">
        BRO PAINT © 2021 Wszelkie Prawa Zastrzeżone
      </h2>
    </div>
  );
}
