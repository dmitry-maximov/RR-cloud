import { $api, $auth_api } from './index';

export default class AuthService {
  static async registration(email, password, name, family, login) {
    return await $api.post('auth/registration', {
      email,
      password,
      name,
      family,
      login,
    });
  }

  static async login(email, password) {
    return await $api.post('auth/login', {
      email,
      password,
    });
  }

  static async logout() {
    return await $api.post('auth/login');
  }

  static async checkAuth() {
    return await $api.get('auth/refresh');
  }
}