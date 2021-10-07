import * as React from "react";
import { Route } from "react-router-dom";
import {
  HomePage,
  NewOrderPage,
  OrderStatusPage,
  GalleryPage,
  AboutUsPage,
  ContactPage,
  CopyrightPage,
  PrivacyPage,
} from "./react/pages";

const Error = () => <div>Not found</div>;

const routes = [
  { id: 0, route: "/nowe-zlecenie", component: NewOrderPage },
  { id: 1, route: "/status-zlecenia", component: OrderStatusPage },
  { id: 2, route: "/o-nas", component: AboutUsPage },
  { id: 3, route: "/galeria", component: GalleryPage },
  { id: 4, route: "/kontakt", component: ContactPage },
  { id: 5, route: "/polityka-prywatnosci", component: PrivacyPage },
  { id: 6, route: "/prawa-autorskie", component: CopyrightPage },
  { id: 7, route: "/", component: HomePage },
  { id: 8, route: "*", component: Error },
];

export default routes.map(({ route, component, id }) => (
  <Route exact path={route} component={component} key={id} />
));
