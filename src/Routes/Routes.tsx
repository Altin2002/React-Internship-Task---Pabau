/* eslint-disable react-refresh/only-export-components */
import { RouteObject, useRoutes } from "react-router-dom";
import { ItemDetails } from "../components/ItemDetails";
import { MainLayout } from "../components/layout/MainLayout";
import { Main } from "../components/Main";

export const appRoutes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Main /> },
      { path: "/:id", element: <ItemDetails /> },
    ],
  },
];

export const Routes = () => {
  const routes = useRoutes(appRoutes);

  return routes;
};
