import { action, observable } from 'mobx';
import ProductService, { ProductDto, ProductRegistrationDto } from '~services/ProductService';
import autobind from 'autobind-decorator';

@autobind
class ProductsStore {
  @observable products: ProductDto[] = [];
  @observable detailProduct: ProductDto = {} as ProductDto;

  @observable currentCategory: number = -1;

  // @observable clickedCategory: number = -1;
  // @observable clickedCategoryTitle: String = ""

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
    this.currentCategory = category
  }

  @action
  setDetailProduct(product: ProductDto) {
    console.log("product", product);
    this.detailProduct = product;
  }
}

export default ProductsStore;
