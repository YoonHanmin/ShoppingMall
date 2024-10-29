import React,{useEffect,useState } from 'react';
import '../css/content.css';
import axios  from 'axios';
function Content(){


    const [products,setProducts] = useState([]);
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(true);
    useEffect(()=> {
  
     function getProducts(){
            axios
                .get("product/all")
                .then((response) => {
                    setLoading(false);
                    console.log(response.data);
                    setProducts(response.data);

                })
                .catch((error)=>{
                    console.log(error);
                    console.log("에러발생")
                })
        }



    getProducts();
    },[]);
    if(loading){
        return <div>Loading...</div>
    }

    if(error){
        return <div>{error}</div>
    }


    return (
        <>
        <div className='container-wrap'>
            <div className='container-header'>
            <h1>Weekly Best </h1>
            </div>
            <div className='container-nav'>
                <ul >
                    <li key="ALL">ALL</li>
                    <li key="WOMEN">WOMEN</li>
                    <li key="MAN">MAN</li>
                    <li key="SALE">SALE</li>
                    
                </ul>
            </div>

            <div className='row product-list'>
                {products.map(product => (
                     <div className="col-3 product-card" key = {product.id}>
                        <img src={product.image_url} alt="Product 1" className="product-image" />
                        <p className="product-name">{product.name}</p>
                        <p className="product-description">{product.description}</p>
                        <p className="product-price">{product.price}</p>
                        <button className="add-to-cart">Add to Cart</button>
                    </div>
                ))}

        </div>
        </div>
        </>
    )
}

export default Content;