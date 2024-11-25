import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import ProductList from "../Pages/ProductList/ProductList";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import Login from "../Pages/Authentication/Login";
import Signup from "../Pages/Authentication/Signup";

function MainRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/products" element={<ProductList/>}/>
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<Error/>} />
        </Routes>
    )
}

export default MainRoutes;