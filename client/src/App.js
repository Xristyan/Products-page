import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./components/pages/root";
import ShopPage from "./components/pages/shopPage/shopPage";
import CategoryRoot from "./components/pages/categoryRoot";

const router = createBrowserRouter([
  {
    path: "",
    element: <Root />,
    children: [
      { index: true, element: <ShopPage /> },
      {
        path: ":peopleType",
        element: <CategoryRoot />,
        children: [
          {
            index: true,
            element: <ShopPage />,
          },
          {
            path: ":category",
            element: <ShopPage />,
          },
        ],
      },
    ],
  },
]);
function App() {
  return (
    <>
      <div id="modal-portal" />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
