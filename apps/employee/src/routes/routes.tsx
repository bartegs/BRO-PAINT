import * as React from "react";
import { Route } from "react-router-dom";

import { ProtectedRoute } from "./ProtectedRoute";

import {
  AwaitingOrdersPage,
  OrdersManagementPage,
  LoginPage,
  WorkmanPage,
} from "../react/pages";

interface RouteType {
  id: number;
  route: string;
  component: () => JSX.Element;
  isProtected: boolean;
}

const Error = () => <div>Not found</div>;

export const managerRoutes = [
  { id: 0, route: "/logowanie", component: LoginPage, isProtected: false },
  {
    id: 1,
    route: "/zarzadzanie-zleceniami",
    component: OrdersManagementPage,
    isProtected: true,
  },
  { id: 2, route: "/", component: AwaitingOrdersPage, isProtected: true },
  { id: 3, route: "*", component: Error, isProtected: false },
];

export const workmanRoutes = [
  { id: 0, route: "/logowanie", component: LoginPage, isProtected: false },
  {
    id: 1,
    route: "/",
    component: WorkmanPage,
    isProtected: true,
  },
  { id: 3, route: "*", component: Error, isProtected: false },
];

export default function createRoutes(routes: RouteType[]) {
  return routes.map(({ route, component, id, isProtected }) =>
    isProtected ? (
      <ProtectedRoute exact path={route} component={component} key={id} />
    ) : (
      <Route exact path={route} component={component} key={id} />
    )
  );
}
