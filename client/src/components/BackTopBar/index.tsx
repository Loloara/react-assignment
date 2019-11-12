import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { MouseEvent } from 'react';

function BackTopBar(props: RouteComponentProps) {
  const goBack = (evt: MouseEvent) => {
    evt.preventDefault();
    evt.stopPropagation();
    props.history.goBack();
  };

  return (
    <nav className="navbar nav-global fixed-top navbar-expand-sm">
      <div className="container">
        <a className="navbar-brand" onClick={goBack}>
          <i className="material-icons ic-filter">arrow_back_ios</i>뒤로
        </a>
      </div>
    </nav>
  );
}

export default withRouter(BackTopBar);
