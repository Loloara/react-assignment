import React, { Component } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { PAGE_PATHS, STORES } from '~constants';
import { inject, observer } from 'mobx-react';
import ProductsStore from '~stores/product/ProductStore';
import Footer from '~components/Footer';
import FixedTopBar from '~components/FixedTopBar';
import Product from '~pages/ProductList/Product';
import Utils from '~pages/utils';

interface InjectedProps {
  [STORES.PRODUCTS_STORE]: ProductsStore;
}

class CategorizedProductList extends Component<InjectedProps & RouteComponentProps> {
  render() {
    const { products } = this.props[STORES.PRODUCTS_STORE];
    const title = "중고 " + Utils.getCategoryName(this.props[STORES.PRODUCTS_STORE].categoryOfPage) + " 목록";
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

export default inject(STORES.PRODUCTS_STORE)(observer(CategorizedProductList));
