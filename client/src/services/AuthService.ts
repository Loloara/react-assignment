import axios from 'axios';
import { ApiResponse } from '~services/types';

export type LoginResponseDto = {
  token: string;
  id: number;
}

export type LoginSignupRequestDto = {
  email: string;
  password: string;
};

export type AuthResponseDto = {
  id: string;
  email: string;
  password: string;
}

const API_HOST = process.env.API_HOST || 'http://localhost:5000/api';

class AuthService {
  async login(body: LoginSignupRequestDto): Promise<ApiResponse<LoginResponseDto>> {
    return axios.post(`${API_HOST}/auth/login`, body);
  }

  async signUp(body: LoginSignupRequestDto): Promise<ApiResponse<AuthResponseDto>> {
    return axios.post(`${API_HOST}/auth/signup`, body);
  }
}

export default AuthService;
