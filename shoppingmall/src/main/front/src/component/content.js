import React,{useEffect} from 'react';
import '../css/content.css';
import axios  from 'axios';
function Content(){

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

                <div className="col-3 product-card">
                <img src="/assets/product/product.jpg" alt="Product 1" className="product-image" />
                <div>
                <p className="product-name">오버핏 데님셔츠(셋업)</p>
                <p className="product-price">36,900</p>
                 <p className="product-description"></p>
                </div>
            </div>
            <div className="col-3 product-card">
                <img src="/assets/product/product.jpg" alt="Product 1" className="product-image" />
                <div>
                <p className="product-name">오버핏 데님셔츠(셋업)</p>
                <p className="product-price">36,900</p>
                 <p className="product-description"></p>
                </div>
            </div>
            <div className="col-3 product-card">
                <img src="/assets/product/product.jpg" alt="Product 1" className="product-image" />
                <div>
                <p className="product-name">오버핏 데님셔츠(셋업)</p>
                <p className="product-price">36,900</p>
                 <p className="product-description"></p>
                </div>
            </div>
            <div className="col-3 product-card">
                <img src="/assets/product/product.jpg" alt="Product 1" className="product-image" />
                <div>
                <p className="product-name">오버핏 데님셔츠(셋업)</p>
                <p className="product-price">36,900</p>
                 <p className="product-description"></p>
                </div>
            </div>
            <div className="col-3 product-card">
                <img src="/assets/product/product.jpg" alt="Product 1" className="product-image" />
                <div>
                <p className="product-name">오버핏 데님셔츠(셋업)</p>
                <p className="product-price">36,900</p>
                 <p className="product-description"></p>
                </div>
            </div>
           


        </div>
        </div>
        </>
    )
}

export default Content;