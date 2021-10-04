import { screen, render } from "@testing-library/react";
import * as React from "react";
import { GalleryPage } from "./GalleryPage";

describe("GalleryPage", () => {
  it(`should render correctly to the page`, () => {
    const { container } = render(<GalleryPage />);

    const galleryPage = container.querySelector("div.gallery-page");
    expect(galleryPage).toBeInTheDocument();
  });

  it(`should render the carousel component`, () => {
    const { container } = render(<GalleryPage />);

    const carousel = container.querySelector("div.gallery-page__carousel");
    expect(carousel).toBeInTheDocument();
  });

  it(`should render the gallery component`, () => {
    const { container } = render(<GalleryPage />);

    const gallery = container.querySelector("div.gallery-page__gallery");
    expect(gallery).toBeInTheDocument();
  });

  it(`Should render a text "Ukończone zlecenia" which is the photo category selected by default`, () => {
    render(<GalleryPage />);

    const finishedParagraph = screen.getByText("Ukończone zlecenia");
    expect(finishedParagraph).toBeInTheDocument();
  });

  it(`should contain at least 9 photos`, () => {
    const { container } = render(<GalleryPage />);

    const photos = container.querySelectorAll("img.gallery-page__image").length;
    expect(photos >= 9).toBeTruthy();
  });
});
