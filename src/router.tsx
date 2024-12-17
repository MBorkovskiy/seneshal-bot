import { createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import { App } from "./App";
import { MainPage } from "./pages/MainPage/MainPage";

export const AppRouter = () =>
  createBrowserRouter([
    {
      element: (
        <Suspense fallback={<div>Загрузка...</div>}>
          <App />
        </Suspense>
      ),
      children: [
        {
          path: "/",
          element: <MainPage />,
        },
      ],
    },
  ]);
