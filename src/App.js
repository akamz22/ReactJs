import React, { lazy, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Suspense } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import About from "./components/About";
import Cart from "./components/Cart";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import userContext from "./utils/userContext";
import { Provider } from "react-redux";
import store from "./utils/store";
//Chunking
//Code Spliting
//Dynamic Bundling
//LazyLoading
//OnDemandLoading
//Dymnamic Import

const Instamart = lazy(() => import('./components/Instamart'))
//upon on demand loading --> upon render react will suspend loading
const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Ashwini Kumar",
    email: "example@gmail.com",
  })
  return (
    <Provider store={store}>
      <userContext.Provider value={{
        user: user,
        setUser: setUser
      }}>
        <Header />
        <Outlet />
        <Footer />
      </userContext.Provider>
    </Provider>

  )
}

const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: '/',
          element: <Body user={{
            Name: "Namaste dev",
            Email: "support@namastedev.com"
          }} />
        },
        {
          path: '/about',
          element: <About />,
          children: [
            {
              path: 'profile',
              element: <Profile />
            },
          ],
        },
        {
          path: '/contact',
          element: <Contact />
        }, 
        {
          path: '/cart',
          element: <Cart />
        },
        {
          path: '/restaurant/:resId',
          element: <RestaurantMenu />
        },
        {
          path: '/instamart',
          element: (
            <Suspense fallback={<Shimmer />}>
              <Instamart />
            </Suspense>),
        }
      ],
    }
  ]
)







//paasing a react element inside the root................................. 
const root = ReactDOM.createRoot(document.getElementById("root"))



root.render(<RouterProvider router={appRouter} />)