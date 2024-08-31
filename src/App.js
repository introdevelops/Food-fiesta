import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import MainContainer from "./Components/MainContainer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
import MidCarousal from "./Components/MidCarousal";
import userContext from "./Utils/userContext";
import { Provider } from "react-redux";
import appStore from "./Redux Store/appStore";
import Offers from "./Components/Offers";
import Footer from "./Components/Footer";
import Cart from "./Components/Cart";
import LoadingScreen from "./Utils/LoadingScreen";





const Help = lazy(() => import("./Components/Help"));


const AppLayout = () => (
  <Provider store={appStore}>
    <userContext.Provider value={{ loggedInUser: "Neeraj" }}>
      <div className="app h-full w-full overflow-hidden ">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </userContext.Provider>
  </Provider>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: (
          <>
            <MidCarousal />
            <MainContainer />
          </>
        ),
      },
     {
        path: "/help",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <Help />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
     
      {
        path: "/Cart",
        element: <Cart />,
      },
      {
        path: "/offers",
        element: <Offers />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
