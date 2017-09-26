import axios from 'axios';

class ApiRequest {

  get(url, config) {
    return this.request(url, {
      method: 'get',
      ...config
    })
  }

  post(url, data, config) {
    return this.request(url, {
      method: 'post',
      data,
      ...config
    })
  }

  async request(url, config) {
    try {
      return await axios(url, { ...config })
    } catch (error) {
      return Promise.reject(error)
    }
  }
}
export default ApiRequest;