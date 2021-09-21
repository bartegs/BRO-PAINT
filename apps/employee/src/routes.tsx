import * as React from "react";
import { Route } from "react-router-dom";

import { NewRepairs, RepairManagementPage } from "./react/pages";

const Error = () => <div>Not found</div>;
// const OrdersManagmentPage = () => <div>OrdersManagmentPage</div>;
const LoginPage = () => <div>LoginPage</div>;

const routes = [
  { id: 0, route: "/zaloguj-sie", component: LoginPage },
  { id: 1, route: "/zarzadzanie-zleceniami", component: RepairManagementPage },
  { id: 2, route: "/", component: NewRepairs },
  { id: 3, route: "*", component: Error },
];

export default routes.map(({ route, component, id }) => (
  <Route exact path={route} component={component} key={id} />
));
