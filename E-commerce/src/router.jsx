import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import Sucursales from "./components/pages/Sucursales";
import Contacto from "./components/pages/Contacto";
import LoadingPage from "./components/pages/Cargando";
import ErrorPage from "./components/pages/ErrorPage";

export const router = createBrowserRouter([
    {
        path : "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/product",
                element: <Products />
            },
            {
                path: "/sucursales",
                element: <Sucursales/>
            },
            {
                path: "/contacto",
                element: <Contacto />
            },
            {
                path: "*",
                element: <ErrorPage />
            }
        ]
    }
])