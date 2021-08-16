import * as React from "react";
import { CardWithImage, CardWithText } from "./components";
import { detailing, tinsmith, painting } from "./assets";

export function AboutUsPage(): JSX.Element {
  const aboutUsPageContent = {
    aboutUs: [
      {
        id: 0,
        color: "green",
        title: "Kim jesteśmy?",
        content:
          "Jesteśmy prężnie rozwijającą się firmą świadczącą usługi blacharsko-lakiernicze oraz detailingowe z siedzibą w Gdańsku. Oferujemy szereg usług, począwszy od napraw blacharskich, przez kompleksowe usługi lakiernicze na detailingu kończąc.",
      },
      {
        id: 1,
        color: "blue",
        title: "Dlaczego my?",
        content:
          "Jesteśmy prężnie rozwijającą się firmą świadczącą usługi blacharsko-lakiernicze oraz detailingowe z siedzibą w Gdańsku. Oferujemy szereg usług, począwszy od napraw blacharskich, przez kompleksowe usługi lakiernicze na detailingu kończąc.",
      },
      {
        id: 2,
        color: "pink",
        title: "Co nas wyróżnia?",
        content:
          "Dysponujemy profesjonalną komorą lakierniczą a nasz zespół składa się z ludzi, którzy pracę traktują jako pasję i każdego dnia dążą do perfekcji.",
      },
    ],

    services: [
      {
        id: 0,
        image: tinsmith,
        color: "green",
        title: "BLACHARKA",
        content:
          "Twój samochód został uszkodzony? Żaden problem! Wymienimy uszkodzone elementy, wszystko perfekcyjnie spasujemy a na końcu polakierujemy fabrycznym lakierem i auto będzie jak nowe!",
      },
      {
        id: 1,
        image: painting,
        color: "blue",
        title: "LAKIEROWANIE",
        content:
          "Twoje auto zostało zarysowane? A może przyszła pora na zmiany i chcesz zmienić kolor swojego samochodu? Mamy w swojej ofercie oficjalne kolory wszystkich producentów i nie tylko, więc każdy znajdzie coś dla siebie!",
      },
      {
        id: 2,
        image: detailing,
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
        Mamy doświadczenie, pasję, umiejęności oraz indywidualne podejście do
        każdego klienta.
      </h2>
      <section className="about-us-page__cards-with-image">
        {aboutUsPageContent.services.map((item) => (
          <CardWithImage {...item} key={item.id} />
        ))}
      </section>
      <section className="about-us-page__cards-with-text">
        {aboutUsPageContent.aboutUs.map((item) => (
          <CardWithText {...item} key={item.id} />
        ))}
      </section>
    </div>
  );
}
