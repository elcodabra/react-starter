import axios from 'axios';
import BackendService from './backend';

 class ApiRequest {

   get(url, config) {
     return this.request({
       method: 'get',
       url,
       ...config
     })
   }

   post(url, data, config) {
     return this.request({
       method: 'post',
       url,
       data,
       ...config
     })
   }

   async request(config) {
     try {
       console.log('resolve 1');
       return await axios({
         ...config
       })
     } catch (error) {
       if (error.response && error.response.status && error.response.status == 404) {
         document.location.href = BackendService.getUrl()
       } else {
         return Promise.reject(error)
       }
     }
   }

 }

 export default ApiRequest;