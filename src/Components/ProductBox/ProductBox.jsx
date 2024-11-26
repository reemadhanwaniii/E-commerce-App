import './ProductBox.css';
import { Link } from 'react-router-dom';

function ProductBox({productImage, name, price, productId}) {
    return (
        <Link  to={`/products/${productId}`} 
            className="product-item text-decoration-none">
            <div className="product-img">
                <img src={productImage} alt="" />
            </div>
            <div className="product-name text-center">{name}</div>
            <div className="product-price text-center">&#8377; {price}</div>
        </Link>
    )
}

export default ProductBox;