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

  const [selectProducts,setSelectProduct] = useState([]);
  const [saleWay,setSaleWay] = useState('');

  const [step1,setStep1] = useState(true);
  const [step2,setStep2] = useState(false);
  const [step3,setStep3] = useState(false);

  const [sellerName, setSellerName] = useState('');
  const [sellerPhone, setSellerPhone] = useState('');
  const [sellerEmail, setSellerEmail] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'sellerName') setSellerName(value);
    if (name === 'sellerPhone') setSellerPhone(value);
    if (name === 'sellerEmail') setSellerEmail(value);
  };
  // 카테고리 리스트
  const brands = ['apple', 'samsung'];

  // 브랜드, 카테고리, 제품에 따른 선택 항목 데이터 (예시)
  const productData = {
    apple: {
      휴대폰: ['아이폰12', '아이폰13', '아이폰14'],
      태블릿: ['아이패드12', '아이패드 에어4'],
      주변기기 : ['에어팟1','에어팟2']
    },
    samsung: {
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
    const formData = {
      selectProducts,
      saleWay,
      sellerName,
      sellerPhone,
      sellerEmail,
    };


    console.log(formData);

    // formData 판매접수 api 작성해주세요.
    
  };
  const select =() => {
    
    const selectedProductInfo = { brand, category, product, storage, accessories };
    setSelectProduct([selectedProductInfo]); 
    setStep1(false);
    setStep2(true);
    console.log("선택된 제품 정보:", selectedProductInfo);
  };
  const stepBack = () => {
    setStep1(true);
    setStep2(false);
  }

  const stepNext = () => {
   setStep2(false);
   setStep3(true); 
  }

  const handleSaleWaySelect = (num) => {
    setSaleWay(num);
  }


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
    setSelectProduct([]);
  };


  return (
    <>
    <div className = "container">
    <div className="sell-container">
      {step1 && (
        <>
        <h1> 1. 제품을 선택해주세요.</h1>
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
                
                <img src={`/assets/${brandOption}.JPG`} alt="logo" height="100px" width="100px"  />
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
        <button type="button" className="select-button" onClick={select}>선택하기</button>

        </div>
     
    </>
  )} 
  {/* step1 */}

  { step2 && (
    <>
    <h1> 2. 판매방식을 선택해주세요. </h1>
      <div className="step2-container">
      <div className="step2-box"
      onClick={() => handleSaleWaySelect('1')} 
      style={{ border: saleWay === '1' ? '3px solid #4b0082' : '', 
    }}
      >
        <span><h2>직접 검수</h2></span>
        {/* 이미지 넣어주세요. */}
      </div>
      <div div className="step2-box"
      onClick={() => handleSaleWaySelect('2')} 
      style={{ border: saleWay === '2' ? '3px solid #4b0082' : '', 
    }}
      >
      <span><h2>간편 검수</h2></span>
       {/* 이미지 넣어주세요. */}
      </div>
      </div>
  <button type="button" className="select-button" onClick={stepBack}>뒤로가기</button>
  &nbsp;&nbsp;&nbsp;&nbsp;
  { saleWay && (
  <button type="button" className="select-button" onClick={stepNext}>다음</button>
)}
    </>
)}

  {step3 && (
    <>
     
     <h1> 3. 판매자 정보를 입력해주세요. </h1>
    
              <div className="form-group">
                <label>이름</label>
                <input type="text" name="sellerName" value={sellerName} onChange={handleInputChange} placeholder="이름을 입력하세요" required />
              </div>
              <div className="form-group">
                <label>휴대전화</label>
                <input type="text" name="sellerPhone" value={sellerPhone} onChange={handleInputChange} placeholder="휴대전화 번호를 입력하세요" required />
              </div>
              <div className="form-group">
                <label>이메일</label>
                <input type="email" name="sellerEmail" value={sellerEmail} onChange={handleInputChange} placeholder="이메일을 입력하세요" required />
              </div>
             

    </>


  )}
  </div>
    <div className = "order-container">
    <h1>판매하기</h1>
    <form onSubmit={handleSubmit} className="sell-form">
    <div className="products">
            {selectProducts.length > 0 ? (
              selectProducts.map((productInfo, index) => (
                <div key={index} className="product-item">
                  <p><strong>브랜드:</strong> {productInfo.brand}</p>
                  <p><strong>카테고리:</strong> {productInfo.category}</p>
                  <p><strong>제품:</strong> {productInfo.product}</p>
                  <p><strong>저장 용량:</strong> {productInfo.storage}</p>
                  <p><strong>구성품:</strong> {productInfo.accessories.join(', ')}</p>
                </div>
              ))
            ) : (
              <p>선택된 제품이 없습니다.</p>
            )}
            {saleWay && (
              <div>
                <p><strong>판매방식: </strong>
                {saleWay === '1' ? '직접검수' : saleWay === '2' ? '간편검수' : '선택되지 않음'}
                </p>
                
              </div>
            )}

            { sellerName && sellerPhone && sellerEmail && (
              <div>
                {sellerName},{sellerPhone},{sellerEmail}
              </div>

            )}
          </div>
    <button type="submit" className="submit-button">접수하기</button>
    </form>
    </div>

    </div>
    </>
  );
}

export default Sell;
