import axios from 'axios';
import {Lokka} from 'lokka'
import {Transport} from 'lokka-transport-http'

const client = new Lokka({
  transport: new Transport('https://api.graph.cool/simple/v1/cj7j4hfua06ub0123qy0zawpi')
});

class BackendService {
  constructor() {}

  getOrder(id) {
    return axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`)
  }

  getOrders() {
    return axios.get('http://jsonplaceholder.typicode.com/posts')
  }

  getTweets() {
    return client.query(`  
      query {
        allTweets(orderBy: createdAt_DESC) {
          id
          content
          createdAt
          updatedAt
          account {
            shortName
            fullName
            img
          }
        }
      }
    `)
  }

  addTweet({content}) {
    return client.mutate(`
    {
      createTweet(
        content: "${content}"
      ) {
        id
        content
        createdAt
        updatedAt
      }
    }
  `);
  }
}

export default BackendService;

