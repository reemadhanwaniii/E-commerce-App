import axios from "axios";
import { getCartByUser } from "../Apis/fakeStoreProdApis";

export async function fetchUserCart(userId, setCart) {
    const response = await axios.get(getCartByUser(userId));
    setCart(response.data[0]);
}