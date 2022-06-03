import { $auth_api } from './index';

export default class DiskService {
  static async getInfo() {
    return await $auth_api.get('disk');
  }
}
