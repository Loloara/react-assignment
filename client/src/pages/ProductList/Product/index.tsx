import React from 'react';
import { ProductDto } from '~services/ProductService';
import moment from 'moment';
import { getCategoryName } from '~pages/utils';

type ProductProps = {
  product: ProductDto;
};

function Product(props: ProductProps) {
  const { image, title, price, category, createdAt } = props.product;
  const time = moment(createdAt).locale('kr');

  return (
    <div className="card">
      <div
        className="card-img-top"
        style={{
          background: `url(\'${image}\') no-repeat center`,
          backgroundSize: 'cover',
          height: '240px',
        }}
      />
      <div className="card-body">
        <h5 className="title">{title}</h5>
        <h6 className="price">{price}</h6>
        <h6 className="category">{getCategoryName(category)}</h6>
      </div>
      <div className="card-footer text-muted">
        <time dateTime={time.toISOString()}>
          {time.fromNow()}
        </time>
      </div>
    </div>
  );
}

export default Product;
