import AuthStore from './auth/AuthStore';
import ProductsStore from '~stores/product/ProductStore';
import ProductService from '~services/ProductService';

export default class RootStore {
  static instance: RootStore;

  authStore = new AuthStore();
  productsStore = new ProductsStore(new ProductService(this.authStore));
}