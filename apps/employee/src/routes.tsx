import * as React from "react";
import { Route } from "react-router-dom";

// temp
import { Navbar } from "../../common/react/components";
import { NavPanel } from "./react/components/NavPanel";

import { RepairManagementPage, LoginPage } from "./react/pages";

const Error = () => <div>Not found</div>;
const NewOrdersPage = () => (
  <>
    <Navbar />
    <div className="content">
      <NavPanel />
    </div>
  </>
);
// const OrdersManagmentPage = () => <div>OrdersManagmentPage</div>;

const routes = [
  { id: 0, route: "/zaloguj-sie", component: LoginPage },
  { id: 1, route: "/zarzadzanie-zleceniami", component: RepairManagementPage },
  { id: 2, route: "/", component: NewOrdersPage },
  { id: 3, route: "*", component: Error },
];

export default routes.map(({ route, component, id }) => (
  <Route exact path={route} component={component} key={id} />
));
