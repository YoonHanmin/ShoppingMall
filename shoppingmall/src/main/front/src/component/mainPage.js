import React,{useEffect,useState } from 'react';
import '../css/content.css';
import axios  from 'axios';
function MainPage(){
 
    function getProducts(category){
        axios
             .get(`product/${category.toLowerCase()}`)
            .then((response) => {
                
                console.log(response.data);
                setProducts(response.data);

            })
            .catch((error)=>{
                console.log(error);
                console.log("에러발생")
            })
    }

    const [products,setProducts] = useState([]);
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(true);

    const [badgeVisible, setBadgeVisible] = useState('ALL'); // 어떤 배지를 표시할지 추적

    const handleClick = (item) => {
        setBadgeVisible(item); // 클릭된 아이템 저장
        getProducts(item);
    };

    useEffect(()=> {
        getProducts('ALL');
    
    },[]);

   


    return (
        <>
        <div className='container-wrap'>
            <div className='container-header'>
            <h1>Weekly Best </h1>
            </div>
             <div className='container-nav'>
            <ul>
                <li onClick={() => handleClick('ALL')}>
                    <span>ALL</span>
                    {badgeVisible === 'ALL' && <span className="badge-dot"></span>}
                </li>
                <li onClick={() => handleClick('WOMEN')}>
                    <span>WOMEN</span>
                    {badgeVisible === 'WOMEN' && <span className="badge-dot"></span>}
                </li>
                <li onClick={() => handleClick('MAN')}>
                    <span>MAN</span>
                    {badgeVisible === 'MAN' && <span className="badge-dot"></span>}
                </li>
                <li onClick={() => handleClick('SALE')}>
                    <span>SALE</span>
                    {badgeVisible === 'SALE' && <span className="badge-dot"></span>}
                </li>
            </ul>
        </div>

            <div className='row product-list'>
                {products.map(product => (
                     <div className="col-3 product-card" key = {product.id}>
                     <img src={`/assets/product/${product.image_url}`} alt="Product 1" className="product-image" />
                        <p className="product-name">{product.name}</p>
                        {/* <p className="product-description">{product.description}</p> */}
                        <p className="product-price">₩{product.price.toLocaleString()}</p>
                        <button className="add-to-cart">Add to Cart</button>
                    </div>
                ))}

        </div>
        </div>
        </>
    )
}

export default MainPage;