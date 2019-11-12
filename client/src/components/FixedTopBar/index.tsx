import * as React from 'react';
import { Link } from 'react-router-dom';
import { PAGE_PATHS } from '~constants';
// @ts-ignore
import LogoImage from '~assets/logo-basic.svg';

function FixedTopBar() {
  return (
    <nav className="navbar nav-global fixed-top navbar-expand-sm">
      <div className="container">
        <Link to={PAGE_PATHS.PRODUCT_LISTS}>
          <img className="img-brand" alt="당근마켓" width="132"
               src={LogoImage} />
        </Link>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to={PAGE_PATHS.PRODUCT_REGISTRATION} >
              <i className="material-icons ic-create">create</i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default FixedTopBar;
