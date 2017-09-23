import ApiRequests from './request';

const url = "http://jsonplaceholder.typicode.com";

const apiRequests = new ApiRequests();

const BackendService = {

  getUrl() {
    return url;
  },

  getOrder(id) {
    return apiRequests.get(`${this.getUrl()}/posts/${id}`)
  },

  getOrders() {
    return apiRequests.get(`${this.getUrl()}/posts`)
  }
}

export default BackendService;