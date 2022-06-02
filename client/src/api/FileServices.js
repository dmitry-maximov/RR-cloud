import { $auth_api } from './index';

export default class FileService {
  static async getFiles(dirId, sort) {
    let url = `files`;
    if (dirId) {
      url = `files?parent=${dirId}`;
    }
    if (sort) {
      url = `files?sort=${sort}`;
    }
    if (dirId && sort) {
      url = `files?parent=${dirId}&sort=${sort}`;
    }
    return await $auth_api.get(url);
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
  static async deleteFiles(fileId) {
    return await $auth_api.delete(`files?id=${fileId}`);
  }

  static async searchFiles(searchQuery) {
    return await $auth_api.get(`files/search?search=${searchQuery}`);
  }

  static async favoritFiles(sort) {
    return await $auth_api.get(`files/favorit?sort=${sort}`);
  }

  static async setFavoritFile(fileId, state = true) {
    return await $auth_api.post(`files/favorit`, { id: fileId, state });
  }
}
