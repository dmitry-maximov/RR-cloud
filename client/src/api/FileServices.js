import { $auth_api } from './index';

export default class FileService {
  static async getFiles(dirId) {
    return await $auth_api.get(`files${dirId ? '?parent=' + dirId : ''}`);
  }

  static async createDirectory(name, dirId) {
    return await $auth_api.post(`files`, { name, parent: dirId, type: `dir` });
  }

  static async uploadFile(file, dirId) {
    const formData = new FormData();
    formData.append('file', file);

    if (dirId) {
      formData.append('parent', dirId);
    }

    return await $auth_api.post(`files/upload`, formData);
  }

  static async downloadFile(fileId) {
    return await $auth_api.get(`files/download?id=${fileId}`, {
      responseType: 'blob',
    });
  }
}
