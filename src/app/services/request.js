import axios from 'axios';
import BackendService from './backend';

 class ApiRequest {

   get(url, config) {
     return this.request(axios.get(url, config))
   }

   post(url, data, config) {
     return this.request(axios.post(url, data, config))
   }

   request(promise) {
     return new Promise((resolve, reject) => {
       promise
         .then((data) => {
           resolve(data)
         })
         .catch((error) => {
           if (error.response && error.response.status && error.response.status == 404) {
             document.location.href = BackendService.getUrl()
           } else {
             reject(error)
           }
         })
     })
   }

 }

 export default ApiRequest;