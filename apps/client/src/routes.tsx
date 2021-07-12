import * as React from "react";

import { Route } from "react-router-dom";
import { HomePage, RepairStatusPage } from "./react/pages";

const NewRepair = () => <div>NewRepair</div>;
const AboutUs = () => <div>AboutUs</div>;
const Gallery = () => <div>Gallery</div>;
const Contact = () => <div>Contact</div>;
const Error = () => <div>Not found</div>;
const Employee = () => <div>Eployee</div>;

const routes = [
  { id: 0, route: "/nowa-naprawa", component: NewRepair },
  { id: 1, route: "/stan-naprawy", component: RepairStatusPage },
  { id: 2, route: "/o-nas", component: AboutUs },
  { id: 3, route: "/galeria", component: Gallery },
  { id: 4, route: "/kontakt", component: Contact },
  { id: 5, route: "/pracownik", component: Employee },
  { id: 6, route: "/", component: HomePage },
  { id: 7, route: "*", component: Error },
];

export default routes.map(({ route, component, id }) => (
  <Route exact path={route} component={component} key={id} />
));
