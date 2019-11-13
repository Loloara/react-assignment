import React, { Component } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { PAGE_PATHS, STORES } from '~constants';
import { inject, observer } from 'mobx-react';
import ProductsStore from '~stores/product/ProductStore';
import Footer from '~components/Footer';
import FixedTopBar from '~components/FixedTopBar';
import Product from '~pages/ProductList/Product';

interface InjectedProps {
  [STORES.PRODUCTS_STORE]: ProductsStore;
}

class FilteredProductList extends Component<InjectedProps & RouteComponentProps> {
  getTitleByCategoryNum(category: number): string {
    if(category === 0) {
      return "중고 차량 목록";
    } else if(category === 1) {
      return "중고 인기매물 목록";
    } else if(category === 2) {
      return "중고 가구/인테리어 목록";
    } else if(category ===3){
      return "중고 유아동/유아도서 목록";
    }else if (category === 4){
      return "중고 생활/가공식품 목록";
    }
  }

  render() {
    const { products } = this.props[STORES.PRODUCTS_STORE];
    const title = this.getTitleByCategoryNum(this.props[STORES.PRODUCTS_STORE].category);
    return (
      <>
        <FixedTopBar />
        <div className="container container-main-index">
          <h5 className="container-headline">{title}</h5>
          <ul className="list-products row">
            {
              products.map(v => (
              <li
                key={v.id}
                className="list-products-item col-12 col-md-4 col-lg-3"
              >
                <Link to={`${PAGE_PATHS.PRODUCT}/${v.id}`}>
                  <Product product={v} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Footer />
      </>
    );
  }
}

export default inject(STORES.PRODUCTS_STORE)(observer(FilteredProductList));
