import axios from 'axios';

const API_BASE_URL = "http://localhost:8081";

class UserService {
  getItem() {
    return axios.get(`${API_BASE_URL}/inventory_farrellnaufalmochammad`);
  }

  createItem(inventory) {
    return axios.post(`${API_BASE_URL}/inventory_farrellnaufalmochammad`, inventory);
  }

  getItemById(inventoryId) {
    return axios.get(`${API_BASE_URL}/inventory_farrellnaufalmochammad/${inventoryId}`);
  }

  updateItem(inventory, inventoryId) {
    return axios.put(`${API_BASE_URL}/inventory_farrellnaufalmochammad/${inventoryId}`, inventory);
  }

  deleteItem(inventoryId) {
    return axios.delete(`${API_BASE_URL}/inventory_farrellnaufalmochammad/${inventoryId}`);
  }

  searchItemByName(name) {
    return axios.get(`${API_BASE_URL}/inventory_farrellnaufalmochammad/search?name=${name}`);
  }
}

export default new UserService();
