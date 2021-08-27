import * as React from "react";

import { Icon } from "../../../../components/icons/Icon";

interface CardProps {
  icon: "phone" | "email" | "location";
  color: "green" | "blue" | "pink";
  category: "address" | "phone" | "email";
  children: React.ReactNode;
}

export function Card({
  icon,
  color,
  category,
  children,
}: CardProps): JSX.Element {
  return (
    <div className={`contact-page__card contact-page__card--${category}`}>
      <Icon icon={icon} size="md" color={color} additionalClasses="mb-3" />
      {children}
    </div>
  );
}
