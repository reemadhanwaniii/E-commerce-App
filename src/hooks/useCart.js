import { useContext, useEffect } from "react";
import CartContext from "../Context/CartContext";
import { fetchUserCart } from "../Helper/fetchUserCartHelper";

function useCart(userId) {
    const {cart, setCart} = useContext(CartContext);
   
    useEffect(() => {
        fetchUserCart(userId,setCart);
    }, [userId]);
    return [cart, setCart];
}
export default useCart;