import axios from 'axios';

export default class MuseumService {
  baseURL = 'http://localhost:3000';
  museums = axios.create({
    baseURL: this.baseURL,
    withCredentials: true
  })

  getMuseums() {
    return this.museums.get("/");
  }

  getMuseum(id) {
    return this.museums.get(`/museum/${id}`);
  }
}
