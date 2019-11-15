import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PAGE_PATHS, STORES } from '~constants';
import { inject, observer } from 'mobx-react';
import ProductsStore from '~stores/product/ProductStore';
import Modal from '~components/Modal';
import FilterModal from '~components/Modal/FilterModal';
import {getCategoryName} from '~pages/utils';
// @ts-ignore
import LogoImage from '~assets/logo-basic.svg';


type FixedTopBarProps = {
  [STORES.PRODUCTS_STORE]: ProductsStore;
}
 
function FixedTopBar(props: FixedTopBarProps) {
  const [openModal, setOpenModal] = useState(false);
  const showFilterButton = props[STORES.PRODUCTS_STORE].categoryOfPage === 0 ? true : false;
  const filtered = props[STORES.PRODUCTS_STORE].filteredCar;
  const title = getCategoryName(props[STORES.PRODUCTS_STORE].categoryOfPage) + " 조건 설정";

  return (
    <nav className="navbar nav-global fixed-top navbar-expand-sm">
      <div className="container">
        <Link to={PAGE_PATHS.PRODUCT_LISTS}>
          <img className="img-brand" alt="당근마켓" width="132"
               src={LogoImage} />
        </Link>
        <ul className="navbar-nav ml-auto">
          { showFilterButton && <li className="nav-item">
            <button className={filtered ? "btn-filter active" : "btn-filter"} onClick={() => {setOpenModal(true)}}>
              <i className="material-icons ic-filter">filter_list</i>
            </button>
            <Modal title={title} open={openModal} onClose={setOpenModal}>
              <FilterModal />
            </Modal>
          </li> }
          <li className="nav-item">
            {console.log('before the page regi')}
            <Link to={PAGE_PATHS.PRODUCT_REGISTRATION} >
              <i className="material-icons ic-create">create</i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default inject(STORES.PRODUCTS_STORE)(observer(FixedTopBar));