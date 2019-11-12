import { action, observable, reaction } from 'mobx';
import AuthService, { LoginSignupRequestDto } from '~services/AuthService';
import jwtDecode from 'jwt-decode';
import autobind from 'autobind-decorator';

export type Auth = {
  email: string
  id: number
}

@autobind
class AuthStore {
  @observable token: string | null = window.sessionStorage.getItem('jwt');
  @observable auth: Auth | undefined;
  @observable email = '';
  @observable password = '';
  private authService = new AuthService();

  constructor() {
    if (this.token) {
      this.auth = jwtDecode(this.token) as Auth;
    }

    reaction(
      () => this.token,
      token => {
        if (token != null) window.sessionStorage.setItem('jwt', token);
      }
    );
  }

  isLoggedIn() {
    return this.token != null;
  }

  @action
  async login() {
    const body: LoginSignupRequestDto = {
      email: this.email,
      password: this.password
    };
    const response = await this.authService.login(body);
    this.setToken(response.data.data.token);
  }

  async signUp(auth: LoginSignupRequestDto) {
    return await this.authService.signUp(auth);
  }

  @action
  resetPasswordAndEmail() {
    this.password = '';
    this.email = '';
  }

  @action
  setPassword(pw: string) {
    this.password = pw;
  }

  @action
  setEmail(email: string) {
    this.email = email;
  }

  @action
  setToken(token: string) {
    this.token = token;
    this.auth = jwtDecode(token) as Auth
  }

  @action
  signOut() {
    window.sessionStorage.removeItem('jwt');
    this.token = null;
    this.auth = undefined;
  }

}

export default AuthStore;
