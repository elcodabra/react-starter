import ApiRequests from './request';

const request = new ApiRequests();

const BackendService = {

  getOrder(id) {
    return request.get(`http://jsonplaceholder.typicode.com/posts/${id}`)
  },

  getOrders() {
    return request.get('http://jsonplaceholder.typicode.com/posts')
  },

}

export default BackendService;