import { createBrowserRouter } from "react-router-dom"
import App from "../App";
import Home from "../pages/home/Home";
import CategoryPage from "../pages/category/CategoryPage";
import Search from "../pages/search/Search";
import ShopPage from "../pages/shop/productDetails/ShopPage";
import SingleProducts from "../pages/shop/productDetails/SingleProducts";
import Login from "../components/Login";
import Register from "../components/Register";
import Contact from "../components/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/categories/:categoryName", element: <CategoryPage /> },
            { path: "/search", element: <Search /> },
            { path: "/shop", element: <ShopPage /> },
            { path: "/contact", element: <Contact /> },
            { path: "/shop/:id", element: <SingleProducts /> },
        ]
    },
    {
        path: "/Login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />
    }
])

export default router;