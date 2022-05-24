import { $auth_api } from './index';

export default class FileService {
  static async getFiles(dirId) {
    return await $auth_api.get(`files${dirId ? '?parent=' + dirId : ''}`);
  }

  static async createDirectory(name, dirId) {
    return await $auth_api.post(`files`, { name, parent: dirId, type: `dir` });
  }
}
