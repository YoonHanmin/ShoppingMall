import React from "react";
import { Link } from 'react-router-dom';
import '../css/sellPage.css';

function SellPage(){
    return (
        <>
            <div className="sell-header">
                <h1>내 물건 판매하기</h1>
               
            </div>
            <div className="sell-content">
                <div className="sell-content-header">
                    <h2><b>빠르고 간편하게 내 물건 팔기</b></h2>
                    <p>전자기기 판매는 쉽고 간단하게 시작할 수 있습니다. 이제 바로 판매를 시작하세요!</p>
                    <button className="sell-button">
                        <Link to="/sell"><span>판매하기</span></Link>
                    </button>
                </div>
                <div className="sell-content-body">
                    이미지
                </div>
            </div>
        </>
    );
}

export default SellPage;
