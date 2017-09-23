import React from 'react';
import { Link } from 'react-router-dom';
import BackendService from '../../../services/backend';

class ListOrders extends React.Component {
  constructor(props) {
    super(props);
    this.getOrders.bind(this);
  }

  componentDidMount() {
    this.getOrders(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.getOrders(nextProps);
  }

  getOrders(props) {
    // TODO: refactor props for size & limit
    BackendService.getOrders()
      .then((response) => {
        console.log('resolve 2')
        if (response.data) {
          this.setState({ orders: response.data });
        }
      })
      .catch((error) => {
        console.log('error 2')
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <div>
          <h1>List Orders:</h1>
          <ul>
            {this.state && this.state.orders &&
              this.state.orders.map((item, index) =>
                <li key={index}>
                  <Link to={"/orders/view/"+item.id}>{index + 1}. {item.title}</Link>
                </li>
              )
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default ListOrders;