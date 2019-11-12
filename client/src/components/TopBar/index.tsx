import * as React from 'react';
// @ts-ignore
import LogoImage from '~assets/logo-basic.svg';
import { Link } from 'react-router-dom';

function TopBar() {
  return (
    <nav className="navbar nav-global nav-global-sign navbar-expand-sm">
      <div className="container d-flex justify-content-center">
        <Link to={"/"}>
          <img
            className="img-brand"
            alt="당근마켓"
            width="132"
            src={LogoImage}
          />
        </Link>
      </div>
    </nav>
  );
}

export default TopBar;
