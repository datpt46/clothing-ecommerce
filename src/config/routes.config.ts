import { NotFound } from "components/common";
import { HomePage, LoginSignupPage as LoginAndSignupPage, CheckoutPage } from "pages";
import { RouteProps } from "react-router-dom";

interface RouteType {
  id?: number;
  isPrivate?: boolean;
}

const routes: (RouteType & RouteProps)[] = [
  {
    id: 1,
    path: "/",
    exact: true,
    isPrivate: false,
    component: HomePage,
  },
  {
    id: 2,
    path: "/login",
    exact: false,
    isPrivate: false,
    component: LoginAndSignupPage,
  },
  {
    id: 3,
    path: "/checkout",
    exact: false,
    isPrivate: false,
    component: CheckoutPage,
  },
  {
    id: 4,
    exact: false,
    isPrivate: false,
    component: NotFound,
  },
];

export default routes;
