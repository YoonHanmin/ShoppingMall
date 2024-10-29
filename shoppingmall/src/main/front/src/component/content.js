import React,{useEffect,useState } from 'react';
import '../css/content.css';
import axios  from 'axios';
function Content(){


    const [products,setProducts] = useState([]);
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(true);
    useEffect(()=> {
    const fetchProducts = async() => {
        try{
            const response = await axios.get('/product/all');
            console.log(response.data);
            if(response.status === 200){
                setProducts(response.data);
            }else{
                setError("There's no Products.")
            }

        }catch(err){
           console.error("Error fetching products:", err); // 전체 오류 정보 출력
               setError(err.message);
        }finally{
            setLoading(false);
        }

    }
     function getProducts(){
            axios
                .get("product/all")
                .then((response) => {
                    console.log(response.data);
                    setProducts(response.data);

                })
                .catch((error)=>{
                    console.log(error);
                    console.log("에러발생")
                })
        }



    getProducts();
//    fetchProducts();
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
                <ul>
                    <li>ALL</li>
                    <li>WOMEN</li>
                    <li>MAN</li>
                    <li>SALE</li>
                    
                </ul>
            </div>

            <div className='row product-list'>
                {products.map(product => (
                     <div className="col-3 product-card" key = {product.id}>
                        <img src={product.image_url || "/assets/product/product.jpg"} alt="Product 1" className="product-image" />
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