import { render } from "@testing-library/react";
import * as React from "react";

import { Gallery } from "./Gallery";

describe("Gallery", () => {
  const finishedPhotos = true;

  it(`should render correctly to the page`, () => {
    const { container } = render(<Gallery finishedPhotos={finishedPhotos} />);

    const gallery = container.querySelector("div.gallery-page__gallery");
    expect(gallery).toBeInTheDocument();
  });

  it(`should render a photo`, () => {
    const { container } = render(<Gallery finishedPhotos={finishedPhotos} />);

    const photo = container.querySelector("img.gallery-page__image");
    expect(photo).toBeInTheDocument();
  });
});
