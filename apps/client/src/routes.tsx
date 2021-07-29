import * as React from "react";

import { Route } from "react-router-dom";
import { AboutUsPage } from "./react/pages/AboutUsPage";
import { HomePage } from "./react/pages/HomePage";
import { NewRepair } from "./react/pages/NewRepair";
import { ContactPage } from "./react/pages/ContactPage";

const RepairStatus = () => <div>RepairStatus</div>;

const Gallery = () => <div>Gallery</div>;
const Error = () => <div>Not found</div>;
const Employee = () => <div>Eployee</div>;

const routes = [
  { id: 0, route: "/nowa-naprawa", component: NewRepair },
  { id: 1, route: "/stan-naprawy", component: RepairStatus },
  { id: 2, route: "/o-nas", component: AboutUsPage },
  { id: 3, route: "/galeria", component: Gallery },
  { id: 4, route: "/kontakt", component: ContactPage },
  { id: 5, route: "/pracownik", component: Employee },
  { id: 6, route: "/", component: HomePage },
  { id: 7, route: "*", component: Error },
];

export default routes.map(({ route, component, id }) => (
  <Route exact path={route} component={component} key={id} />
));
