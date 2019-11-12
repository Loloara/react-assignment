import React, { ChangeEvent, MouseEvent, useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import { PAGE_PATHS, STORES } from '~constants';
import AuthStore from '~stores/auth/AuthStore';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import TopBar from '~components/TopBar';

interface InjectedProps {
  [STORES.AUTH_STORE]: AuthStore;
}

function Signin(props: InjectedProps & RouteComponentProps) {
  const { authStore, history } = props;

  useEffect(() => {
    authStore.resetPasswordAndEmail();
  }, []);

  const handleLogin = async (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await authStore.login();
      history.push(PAGE_PATHS.PRODUCT_LISTS);
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  const changeEmail = (v: ChangeEvent<HTMLInputElement>) => {
    authStore.setEmail(v.target.value);
  };

  const changePassword = (v: ChangeEvent<HTMLInputElement>) => {
    authStore.setPassword(v.target.value);
  };

  return (
    <>
      <TopBar />
      <div className="container container-sm container-sign">
        <form className="form-sign">
          <h5 className="form-headline">🥕 로그인 🐰</h5>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              value={authStore.email}
              onChange={changeEmail}
              placeholder="이메일 입력"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              value={authStore.password}
              onChange={changePassword}
              placeholder="비밀번호 입력"
            />
          </div>
          <button onClick={handleLogin} className="btn btn-block btn-primary">
            로그인 하기
          </button>
          <Link to={PAGE_PATHS.SIGNUP} className="btn btn-block btn-light">
            계정 만들기
          </Link>

          <h6 className="txt-terms">
            <a href="#">이용약관</a> 및 <a href="#">개인정보</a> 취급방침
          </h6>
        </form>
      </div>
    </>
  );
}

export default inject(STORES.AUTH_STORE)(observer(Signin));
