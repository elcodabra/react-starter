import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectOrders } from '../ordersActions';

class ListOrders extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(selectOrders());
  }

  render() {
    const orders = this.props.orders;
    return (
      <div>
        <div>
          <h1>List Orders:<Link to={"/orders/create"}>New</Link></h1>
          <ul>
            {orders &&
              orders.slice(0, 10).map((item, index) =>
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

const mapState = (state) => ({
  orders: state.ordersReducer.orders
});


export default connect(mapState)(ListOrders);