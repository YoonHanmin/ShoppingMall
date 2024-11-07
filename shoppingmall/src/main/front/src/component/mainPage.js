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
           <div>
           <img src='/assets/main1.png' alt="logo" height="500px" width="100%"  />
           <img src='/assets/main2.png' alt="logo" />
           </div>
        </div>
        </>
    )
}

export default MainPage;