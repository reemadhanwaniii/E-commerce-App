import './ProductList.css';
import ProductBox from '../../Components/ProductBox/ProductBox';
import FilterProducts from '../../Components/FilterProducts/FilterProducts';
import { useEffect, useState } from 'react';
import { getAllProducts } from '../../Apis/fakeStoreProdApis';
import axios from 'axios';

function ProductList() {

   const [productList,setProductList] = useState(null);

   async function downloadProductList() {
        const response = await axios.get(getAllProducts());
        setProductList(response.data);
        console.log(response.data);
   }

   useEffect(()=>{
    downloadProductList();
   },[])

    return(
        <div className='container'>
            <div className='row'>
                <h2 className='product-list-title text-center'>All Products</h2>
                <div className='product-list-wrapper d-flex flex-row'>
                    {/**list of products */}
                    <FilterProducts/>
                    <div className='product-list-box' id='productList'>
                        
                        { productList && productList.map((product)=> 
                                <ProductBox 
                                    key={product.id}
                                    productImage={product.image} 
                                    name={product.title} 
                                    price={product.price} 
                                />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductList