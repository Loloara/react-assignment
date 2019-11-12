import React, { ChangeEvent, FormEvent, useState } from 'react';
import { STORES } from '~constants';
import { inject, observer } from 'mobx-react';
import ProductsStore from '~stores/product/ProductStore';
import BackTopBar from '~components/BackTopBar';
import Footer from '~components/Footer';

interface InjectedProps {
  [STORES.PRODUCTS_STORE]: ProductsStore;
}


const ProductRegistration = inject(STORES.PRODUCTS_STORE)(observer((props: InjectedProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState();
  const [fileName, setFileName] = useState('파일선택');
  const [image, setImage] = useState();

  const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files != null && event.target.files.length > 0) {
      setFileName(event.target.files[0].name);
      setImage(event.target.files[0]);
    }
  };

  const onCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value ? Number(event.target.value) : undefined);
  };

  const onRegister = async (event: FormEvent) => {
    event.preventDefault();
    event.stopPropagation();

    await props.productsStore.registrationProduct({
      title,
      description,
      category,
      image,
      price
    });
  };

  return (
    <>
      <BackTopBar />
      <div className="container container-sm container-item-create">
        <h5 className="container-headline">중고거래 상품 등록</h5>

        <form className="form-item-create" onSubmit={onRegister}>
          <div className="form-group form-picture">
            <div className="file-box">
              <input className="upload-name" value={fileName} disabled />

              <label htmlFor="ex_filename" className="btn btn-secondary">업로드</label>
              <input type="file" id="ex_filename" className="upload-hidden" onChange={onFileChange}/>
            </div>
          </div>

          <div className="form-group form-title">
            <input type="text" className="form-control" id="productsTitle" placeholder="제품 이름을 입력해주세요." value={title}
                   onChange={v => setTitle(v.target.value)}/>
          </div>
          <div className="form-group form-category">
            <select id="productsCategory" className="form-control" value={category} onChange={onCategoryChange}>
              <option value={undefined}>카테고리를 선택해주세요.</option>
              <option value={0}>차량</option>
              <option value={1}>가구/인테리어</option>
              <option value={2}>유아동/유아도서</option>
              <option value={3}>생활/가공식품</option>
            </select>
          </div>
          <div className="form-group form-price">
            <input type="number" className="form-control" id="productsPrice" min="0" step="1000" value={price}
                   onChange={v => setPrice(Number(v.target.value))}
                   placeholder="가격을 입력해주세요. (￦)"/>
          </div>
          <div className="form-group form-description">
            <textarea className="form-control" id="productsDescription" rows={10} value={description}
                      onChange={v => setDescription(v.target.value)}
                      placeholder="제품 설명을 작성해주세요."/>
          </div>
          <div className="form-group form-car-model-year">
            <select id="carModelYear" className="form-control">
              <option value="">차량 연식을 선택해주세요</option>
              <option value="2020">2020년</option>
              <option value="2019">2019년</option>
              <option value="2018">2018년</option>
              <option value="2017">2017년</option>
              <option value="2016">2016년</option>
              <option value="2015">2015년</option>
              <option value="2014">2014년</option>
              <option value="2013">2013년</option>
              <option value="2012">2012년</option>
              <option value="2011">2011년</option>
              <option value="2010">2010년</option>
            </select>
          </div>
          // 이하 부분 구현해야할 부분
          <div className="form-group form-car-mileage">
            <input type="number" className="form-control" id="carMileage" placeholder="주행거리를 입력해주세요.(km)"/>
          </div>
          <div className="form-group form-car-smoking">
            <label>차량 판매자 흡연 여부</label>
            <div className="form-check form-check-inline form-check-smoking">
              <input className="form-check-input" type="radio" name="smokingOptions" id="inlineSmoker" value="true" />
                <label className="form-check-label smoker" htmlFor="inlineSmoker">예, 흡연자 입니다.</label>
            </div>
            <div className="form-check form-check-inline form-check-nonsmoking">
              <input className="form-check-input" type="radio" name="smokingOptions" id="inlineNonSmoker" value="false" />
                <label className="form-check-label non-smoker" htmlFor="inlineNonSmoker">아니오, 비 흡연자 입니다.</label>
            </div>
          </div>
          <button className="btn btn-primary btn-submit">상품 등록하기</button>
        </form>
      </div>

      <Footer />
    </>
  );
}));

export default ProductRegistration;