import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import Sucursales from "./components/pages/Sucursales";
import Logueo from "./components/pages/Logueo";
import LoadingPage from "./components/pages/Cargando";
import ErrorPage from "./components/pages/ErrorPage";
import Carrito from "./components/pages/Carrito";
import CrearCuenta from "./components/pages/CrearCuenta";

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
                path: "/logueo",
                element: <Logueo />
            },
            {
                path: "/carrito",
                element: <Carrito />
            },
            {
                path: "/crearCuenta",
                element: <CrearCuenta />
            },
            {
                path: "*",
                element: <ErrorPage />
            }
        ]
    }
])