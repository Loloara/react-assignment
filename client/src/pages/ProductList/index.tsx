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

class ProductList extends Component<InjectedProps & RouteComponentProps> {

  state = {
    clickedCategory: "car"
  }

  componentWillMount(): void {
    this.props[STORES.PRODUCTS_STORE].getAllProducts();
  }

  onClickCategory = (category: String) => {
    console.log(category)
    this.setState({ clickedCategory: category })
  }

  render() {
    const { products } = this.props[STORES.PRODUCTS_STORE];
    return (
      <>
        <FixedTopBar />
        <div className="container container-main-index">
    <h5 className="container-headline">{}</h5>

          <div className="categories-group">
            <Link
              to={PAGE_PATHS.PRODUCT_CAR_CATEGORY_LISTS}
              className="btn btn-category"
              onClick={this.onClickCategory("car")}
            >
              차량
            </Link>
            <Link 
              to={PAGE_PATHS.PRODUCT_POPULAR_LISTS} 
              className="btn btn-category"
            >
              인기매물
            </Link>
            <Link 
              to={PAGE_PATHS.PRODUCT_FURNITURE_CATEGORY_LISTS} 
              className="btn btn-category"
              onClick 
            >
              가구/인테리어
            </Link>
            <Link 
              to={PAGE_PATHS.PRODUCT_CHILD_CATEGORY_LISTS} 
              className="btn btn-category"

            >
              유아동/유아도서
            </Link>
            <Link 
              to={PAGE_PATHS.PRODUCT_LIFE_CATEGORY_LISTS} 
              className="btn btn-category"
            >
              생활/가공식품
            </Link>
          </div>

          <ul className="list-products row">
            {products.filter(item => item.tag === this.state.clickedCategory).map(v => (
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

export default inject(STORES.PRODUCTS_STORE)(observer(ProductList));