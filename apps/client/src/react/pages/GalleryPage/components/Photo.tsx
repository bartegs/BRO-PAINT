import * as React from "react";

interface PhotoProps {
  photo: string;
  caption: string;
  onClick: (e: React.MouseEvent) => void;
}

export function Photo({ photo, caption, onClick }: PhotoProps): JSX.Element {
  return (
    <img
      role="presentation"
      className="gallery-page__image"
      src={photo}
      alt={caption}
      onClick={onClick}
    />
  );
}
