import React, { useState, useEffect } from 'react';
import '../css/sell.css';
function Sell() {
  // 상태 관리
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [product, setProduct] = useState('');
  const [storage, setStorage] = useState('');
  const [accessories, setAccessories] = useState([]);

  const [availableCategories, setAvailableCategories] = useState([]);
  
  const [availableProducts, setAvailableProducts] = useState([]);
  const [availableStorage, setAvailableStorage] = useState([]);
  const [availableAccessories, setAvailableAccessories] = useState([]);

  // 카테고리 리스트
  const brands = ['애플', '삼성'];

  // 브랜드, 카테고리, 제품에 따른 선택 항목 데이터 (예시)
  const productData = {
    애플: {
      휴대폰: ['아이폰12', '아이폰13', '아이폰14'],
      태블릿: ['아이패드12', '아이패드 에어4'],
      주변기기 : ['에어팟1','에어팟2']
    },
    삼성: {
      휴대폰: ['갤럭시S21', '갤럭시S22'],
      태블릿: ['갤럭시탭S7', '갤럭시탭A7'],
      주변기기 : ['갤럭시 버즈 프로4','갤럭지 버즈 5']
    },
    
  };

  const storageData = {
    아이폰12: ['64GB', '128GB', '256GB'],
    아이폰13: ['64GB', '128GB', '256GB'],
    아이폰14: ['128GB', '256GB', '512GB'],
    아이패드12: ['64GB', '256GB'],
    아이패드_에어4: ['64GB', '128GB'],
    갤럭시S21: ['128GB', '256GB'],
    갤럭시탭S7: ['128GB', '256GB'],
  };

  const accessoriesData = {
    아이폰12: ['충전기', '케이스', '이어폰'],
    아이폰13: ['충전기', '케이스'],
    아이폰14: ['충전기', '케이스', '애플펜슬'],
    아이패드12: ['충전기', '키보드', '애플펜슬'],
    아이패드_에어4: ['충전기', '키보드'],
    갤럭시S21: ['충전기', '케이스'],
    갤럭시탭S7: ['충전기', '키보드'],
  };

  // 브랜드 선택시 카테고리 설정
  useEffect(() => {
    if (brand) {
      setAvailableCategories(Object.keys(productData[brand]));
    } else {
      setAvailableCategories([]);
    }
  }, [brand]);

  // 카테고리 선택시 제품 설정
  useEffect(() => {
    if (brand && category) {
      setAvailableProducts(productData[brand][category]);
    } else {
      setAvailableProducts([]);
    }
  }, [brand, category]);

  // 제품 선택시 저장 용량 설정
  useEffect(() => {
    if (product) {
      setAvailableStorage(storageData[product] || []);
      setStorage('');
      setAccessories([]);
    }
  }, [product]);

  // 제품 선택시 구성품 설정
  useEffect(() => {
    if (product) {
      setAvailableAccessories(accessoriesData[product] || []);
    }
  }, [product]);

  // 폼 제출 처리
  const handleSubmit = (e) => {
    e.preventDefault();
    // 선택된 정보 출력 (이후 서버로 전송 등)
    console.log({ brand, category, product, storage, accessories });
  };

  const handleReset = () => {
    setBrand('');
    setCategory('');
    setProduct('');
    setStorage('');
    setAccessories([]);
    setAvailableCategories([]);
    setAvailableProducts([]);
    setAvailableStorage([]);
    setAvailableAccessories([]);
  };


  return (
    <div className="sell-container">
      <h1>휴대폰 판매</h1>
      <form onSubmit={handleSubmit} className="sell-form">
        
       {/* 브랜드 선택 */}
       
        <div className="form-group">
          <label>브랜드</label>
          <div className="options-container">
            {brands.map((brandOption) => (
              <div
                key={brandOption}
                className={`option ${brand === brandOption ? 'selected' : ''}`}
                onClick={() => setBrand(brandOption)}
              >
                {brandOption}
              </div>
            ))}
          </div>
        </div>
        


        {/* 카테고리 선택 */}
            {brand && (
          <div className="form-group">
            <label>카테고리</label>
            <div className="options-container">
              {availableCategories.map((categoryOption) => (
                <div
                  key={categoryOption}
                  className={`option ${category === categoryOption ? 'selected' : ''}`}
                  onClick={() => setCategory(categoryOption)}
                >
                  {categoryOption}
                </div>
              ))}
            </div>
          </div>
          )}

       
        

        {/* 제품 선택 */}
        {category && (
          <div className="form-group">
            <label>제품</label>
            <div className="options-container">
              {availableProducts.map((productOption) => (
                <div
                  key={productOption}
                  className={`option ${product === productOption ? 'selected' : ''}`}
                  onClick={() => setProduct(productOption)}
                >
                  {productOption}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 저장 용량 선택 */}
        {product && (
          <div className="form-group">
            <label>저장 용량</label>
            <div className="options-container">
              {availableStorage.map((storageOption) => (
                <div
                  key={storageOption}
                  className={`option ${storage === storageOption ? 'selected' : ''}`}
                  onClick={() => setStorage(storageOption)}
                >
                  {storageOption}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 구성품 선택 */}
        {storage && (
          <div className="form-group">
            <label>구성품</label>
            <div className="options-container">
              {availableAccessories.map((accessory) => (
                <div
                  key={accessory}
                  className={`option ${accessories.includes(accessory) ? 'selected' : ''}`}
                  onClick={() => {
                    if (accessories.includes(accessory)) {
                      setAccessories(accessories.filter((acc) => acc !== accessory));
                    } else {
                      setAccessories([...accessories, accessory]);
                    }
                  }}
                >
                  {accessory}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 제출 버튼 */}
        <div className="btn-div">
        <button type="button" className="reset-button" onClick={handleReset}>
                <img src="/assets/reload.png"  className="reset-icon" width="30px" />초기화
        </button>
        <button type="submit" className="submit-button">판매하기</button>

        </div>
      </form>
    </div>
  );
}

export default Sell;
