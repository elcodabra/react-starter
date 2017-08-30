import axios from 'axios';

class BackendService {
  constructor() {}

  getOrder(id) {
    return axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`)
  }

  getOrders() {
    return axios.get('http://jsonplaceholder.typicode.com/posts')
  }
}

export default BackendService;