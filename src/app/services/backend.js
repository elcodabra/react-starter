import axios from 'axios';

class BackendService {
  constructor() {}

  getUser(id) {
    return axios.get(`http://jsonplaceholder.typicode.com/users/${id}`)
  }
}

export default BackendService;