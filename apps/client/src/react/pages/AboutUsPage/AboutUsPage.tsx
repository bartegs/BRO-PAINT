import * as React from "react";
import { CardWithImage, CardWithText } from "./components";

export function AboutUsPage(): JSX.Element {
  const aboutUsPageContent = {
    aboutUs: [
      {
        color: "green",
        title: "Kim jesteśmy?",
        content:
          "Jesteśmy prężnie rozwijającą się firmą świadczącą usługi blacharsko-lakiernicze oraz detailingowe z siedzibą w Gdańsku. Oferujemy szereg usług, począwszy od napraw blacharskich, przez kompleksowe usługi lakiernicze na detailingu kończąc.",
      },
      {
        color: "blue",
        title: "Dlaczego my?",
        content:
          "Jesteśmy prężnie rozwijającą się firmą świadczącą usługi blacharsko-lakiernicze oraz detailingowe z siedzibą w Gdańsku. Oferujemy szereg usług, począwszy od napraw blacharskich, przez kompleksowe usługi lakiernicze na detailingu kończąc.",
      },
      {
        color: "pink",
        title: "Co nas wyróżnia?",
        content:
          "Dysponujemy profesjonalną komorą lakierniczą a nasz zespół składa się z ludzi, którzy pracę traktują jako pasję i każdego dnia dążą do perfekcji.",
      },
    ],

    services: [
      {
        image: "tinsmith",
        color: "green",
        title: "BLACHARKA",
        content:
          "Twój samochód został uszkodzony? Żaden problem! Wymienimy uszkodzone elementy, wszystko perfekcyjnie spasujemy a na końcu polakierujemy fabrycznym lakierem i auto będzie jak nowe!",
      },
      {
        image: "painting",
        color: "blue",
        title: "LAKIEROWANIE",
        content:
          "Twoje auto zostało zarysowane? A może przyszła pora na zmiany i chcesz zmienić kolor swojego samochodu? Mamy w swojej ofercie oficjalne kolory wszystkich producentów i nie tylko, więc każdy znajdzie coś dla siebie!",
      },
      {
        image: "detailing",
        color: "pink",
        title: "DETAILING",
        content:
          "Chcesz przywrócić dawną świetność swojemu autu? Zapraszamy na kompleksowy detailing! Nasi specjaliści sprawią, że będziesz przeciereać oczy ze zdumienia jak to możliwe, że Twoje auto tak pięknie wygląda!",
      },
    ],
  };

  return (
    <div className="about-us-page container">
      <h2 className="about-us-page__heading">
        Mamy doświadczenie, pasję, umiejęności oraz indywidualne
        <br /> podejście do każdego klienta.
      </h2>
      <div className="about-us-page__cards-with-image">
        {aboutUsPageContent.services.map((item) => (
          <CardWithImage {...item} />
        ))}
      </div>
      <div className="about-us-page__cards-with-text">
        {aboutUsPageContent.aboutUs.map((item) => (
          <CardWithText {...item} />
        ))}
      </div>
    </div>
  );
}
