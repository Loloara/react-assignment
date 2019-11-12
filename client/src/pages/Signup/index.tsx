import React, { ChangeEvent, MouseEvent, useState } from 'react';
import { inject} from 'mobx-react';
import { PAGE_PATHS, STORES } from '~constants';
import AuthStore from '~stores/auth/AuthStore';
import { Link } from 'react-router-dom';
import TopBar from '~components/TopBar';

interface InjectedProps {
  authStore: AuthStore;
}

function Singup(props: InjectedProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const handleSingup = async (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (password.length < 5) {
      alert('비밀번호는 5글자 이상입니다.');
      return false;
    }
    if (email.length < 5) {
      alert('ID는 5글자 이상입니다.');
      return false;
    }
    if (password !== rePassword) {
      alert('입력하신 비밀번호가 비밀번호확인에 입력한 비밀번호와 다릅니다.');
      return false;
    }
    try {
      const result = await props.authStore.signUp({
        email: email,
        password: password,
      });
      alert(result.data.msg);
    } catch (err) {
      alert(err.response.data.msg);
    }
    return false;
  };

  const changeEmail = (v: ChangeEvent<HTMLInputElement>) => {
    setEmail(v.target.value);
  };

  const changePassword = (v: ChangeEvent<HTMLInputElement>) =>
    setPassword(v.target.value);

  const changeRePassword = (v: ChangeEvent<HTMLInputElement>) =>
    setRePassword(v.target.value);

  return (
    <>
      <TopBar />
      <div className="container container-sm container-sign">
        <form className="form-sign">
          <h5 className="form-headline">🍲 계정 만들기 🐇</h5>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="inputEmail"
              value={email}
              onChange={changeEmail}
              placeholder="이메일 입력"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              value={password}
              onChange={changePassword}
              placeholder="비밀번호 입력"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              value={rePassword}
              onChange={changeRePassword}
              placeholder="비밀번호 확인하기"
            />
          </div>

          <button className="btn btn-block btn-primary" onClick={handleSingup}>
            동의하고 시작하기
          </button>
          <Link to={PAGE_PATHS.SIGNIN} className="btn btn-block btn-light">
            로그인
          </Link>

          <h6 className="txt-terms">
            <a href="#">이용약관</a> 및 <a href="#">개인정보</a>취급방침
          </h6>
        </form>
      </div>
    </>
  );
}

export default inject(STORES.AUTH_STORE)(Singup);
