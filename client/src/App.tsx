import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Login from './pages/Signin';
import PrivateRoute from './components/PrivateRouter';
import { inject, observer } from 'mobx-react';
import autobind from 'autobind-decorator';
import { PAGE_PATHS, STORES } from '~constants';
import ProductList from '~pages/ProductList';
import Singup from '~pages/Signup';
import ProductRegistration from '~pages/ProductRegistration';
import ProductDetail from '~pages/ProductDetail';
import CarProductList from '~pages/CarProductList';
import PopularProductList from '~pages/PopularProductList';
import FurnitureProductList from '~pages/FurnitureProductList';
import ChildProductList from '~pages/ChildProductList';
import LifeProductList from '~pages/LifeProductList';

@inject(STORES.AUTH_STORE)
@observer
@autobind
export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path={PAGE_PATHS.SIGNIN} component={Login} />
          <Route path={PAGE_PATHS.SIGNUP} component={Singup} />
          <PrivateRoute
            path={`${PAGE_PATHS.PRODUCT}/:id`}
            redirectTo={PAGE_PATHS.SIGNIN}
            component={ProductDetail}
          />
          <PrivateRoute
            path={PAGE_PATHS.PRODUCT_LISTS}
            redirectTo={PAGE_PATHS.SIGNIN}
            component={ProductList}
          />
          <PrivateRoute
            path={PAGE_PATHS.PRODUCT_REGISTRATION}
            redirectTo={PAGE_PATHS.SIGNIN}
            component={ProductRegistration}
          />
          <PrivateRoute
            path={PAGE_PATHS.PRODUCT_CAR_CATEGORY_LISTS}
            redirectTo={PAGE_PATHS.SIGNIN}
            component={CarProductList}
          />
          <PrivateRoute
            path={PAGE_PATHS.PRODUCT_POPULAR_LISTS}
            redirectTo={PAGE_PATHS.SIGNIN}
            component={PopularProductList}
          />
          <PrivateRoute
            path={PAGE_PATHS.PRODUCT_FURNITURE_CATEGORY_LISTS}
            redirectTo={PAGE_PATHS.SIGNIN}
            component={FurnitureProductList}
          />
          <PrivateRoute
            path={PAGE_PATHS.PRODUCT_CHILD_CATEGORY_LISTS}
            redirectTo={PAGE_PATHS.SIGNIN}
            component={ChildProductList}
          />
          <PrivateRoute
            path={PAGE_PATHS.PRODUCT_LIFE_CATEGORY_LISTS}
            redirectTo={PAGE_PATHS.SIGNIN}
            component={LifeProductList}
          />
          <Redirect from="/" to={PAGE_PATHS.PRODUCT_LISTS} />
        </Switch>
      </Router>
    );
  }
}
