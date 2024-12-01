import OrderDetailsProduct from '../../Components/OrderDetailsProduct/OrderDetailsProduct';
import './Cart.css';
import { useEffect,useContext } from 'react';
import axios from 'axios';
import CartContext from '../../Context/CartContext';
import { getProductById } from '../../Apis/fakeStoreProdApis';

function Cart() {
    

    const {cart} = useContext(CartContext);
    async function downloadCartProducts(cart) {
        if(!cart || !cart.products) return;
        const productsPromise = cart.products.map(product => axios.get(getProductById(product.productId)));
        const productPromiseResponse = await axios.all(productsPromise);   
        
    }
    useEffect(() => {
        console.log(cart);
        downloadCartProducts(cart);
    }, [cart])

    return (
        <div className="container">
            <div className="row">
                <h2 className="cart-title text-center">Your cart</h2>
                <div className="cart-wrapper d-flex flex-row">
                    <div className="order-details d-flex flex-column" id="orderDetails">
                        <div className="order-details-title fw-bold">Order Details</div>
                        
                        <OrderDetailsProduct />
                        <hr />
                        <OrderDetailsProduct />
                        <hr />
                        
                    </div>
                    <div className="price-details d-flex flex-column" id="priceDetails">
                        <div className="price-details-box">
                            <div className="price-details-title fw-bold">Price Details</div>
                            <div className="price-details-data">
                                <div className="price-details-item d-flex flex-row justify-content-between">
                                    <div>Price</div>
                                    <div id="total-price"></div>
                                </div>
                                <div className="price-details-item d-flex flex-row justify-content-between">
                                    <div>Discount</div>
                                    <div>10</div>
                                </div>
                                <div className="price-details-item d-flex flex-row justify-content-between">
                                    <div>Delivery Charges</div>
                                    <div>FREE</div>
                                </div>
                                <div className="price-details-item d-flex flex-row justify-content-between">
                                    <div>Total</div>
                                    <div id="net-price"></div>
                                </div>
                            </div>
                        </div>
                        <div className="price-details-btn-group">
                            <a href="productList.html" className="continue-shopping-btn btn btn-info text-decoration-none">
                                Continue Shopping
                            </a>
                            <a href="checkout.html" className="checkout-btn btn btn-primary text-decoration-none">
                                Checkout
                            </a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cart;