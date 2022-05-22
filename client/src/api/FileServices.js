import { $auth_api } from './index';

export default class FileService {
  static async getFiles(dirId) {
    return await $auth_api.get(`files${dirId ? '?parent=' + dirId : ''}`);
  }
}
