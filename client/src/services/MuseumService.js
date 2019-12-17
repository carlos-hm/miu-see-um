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

  addHall(data, id) {
    return this.museums.post(`/hall/${id}/new`, data)
  }

  getHall(id) {
    return this.museums.get(`/hall/one/${id}`);
  }
  
  getHalls(id) {
    return this.museums.get(`/hall/${id}`);
  }

  updateHall(data, id) {
    return this.museums.patch(`/hall/${id}`, data);
  }

  deleteHall(id) {
    return this.museums.delete(`/hall/${id}`);
  }
  
  getUserMuseum(id) {
    return this.museums.get(`/museum/profile/${id}`);
  }

  updateMuseum(data, id) {
    return this.museums.patch(`/museum/${id}`, data);
  }

  getArtwork(id) {
    return this.museums.get(`/artwork/${id}`);
  }

  updateArtwork(data, id) {
    return this.museums.patch(`/artwork/${id}`, data);
  }

  addArtwork(data, id) {
    return this.museums.post(`/artwork/${id}/new`, data);
  }

  deleteArtwork(id) {
    return this.museums.delete(`/artwork/${id}`);
  }

}
