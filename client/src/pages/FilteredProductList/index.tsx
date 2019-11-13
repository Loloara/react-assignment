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

  componentWillMount(): void {

  }

  getTitleByCategoryNum(category: number): string {

    if(category === 0) {
      return "차량"
    } else if(category === 1) {
      return "차량2"
    }

  }

  render() {
    const { products } = this.props[STORES.PRODUCTS_STORE];
  

    console.log("products", products);
    const title = this.getTitleByCategoryNum(this.props[STORES.PRODUCTS_STORE].currentCategory)

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
