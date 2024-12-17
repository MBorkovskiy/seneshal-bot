import { createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import { App } from "./App";
import { Meet } from "./pages/Meet/Meet";
import { Villa } from "./pages/Villa/Villa";
import { Date } from "./pages/Date/Date";
import { Showcase } from "./pages/Showcase/Showcase";

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
          element: <Meet />,
        },
        {
          path: "/villa",
          element: <Villa />,
        },
        {
          path: "/date",
          element: <Date />,
        },
        {
          path: "/showcase",
          element: <Showcase />,
        },
      ],
    },
  ]);
