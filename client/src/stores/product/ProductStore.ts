import { action, observable } from 'mobx';
import ProductService, { ProductDto, ProductRegistrationDto } from '~services/ProductService';
import autobind from 'autobind-decorator';

@autobind
class ProductsStore {
  @observable products: ProductDto[] = [];
  @observable detailProduct: ProductDto = {} as ProductDto;
  @observable category: number = -1;

  constructor(private productService: ProductService) {
  }

  @action
  async getAllProducts() {
    const response = await this.productService.getAll();
    this.setProducts(response.data.data);
  }

  @action
  async getProduct(id: string) {
    const response = await this.productService.getById(id);
    this.setDetailProduct(response.data.data);
  }

  @action
  async registrationProduct(product: ProductRegistrationDto) {
    try {
      const result = await this.productService.registration(product);
      alert(result.data.msg);
    } catch (e) {
      alert(e.response.data.msg);
    }
  }

  @action
  setProducts(products: ProductDto[]) {
    this.products = products;
  }

  @action
  setCategory(category: number) {
    this.category = category
  }

  @action
  setDetailProduct(product: ProductDto) {
    this.detailProduct = product;
  }
}

export default ProductsStore;