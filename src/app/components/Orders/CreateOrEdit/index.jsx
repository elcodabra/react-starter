import React from 'react';
import BackendService from '../../../services/backend';
import OrderForm from './OrderForm';

class CreateOrEditOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: {
        title: '',
        body: ''
      }
    };

    this.backendService = new BackendService();

    this.getOrder = this.getOrder.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getOrder(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.getOrder(nextProps);
  }

  getOrder(props) {
    if (props.match.params.id) {
      this.backendService.getOrder(encodeURIComponent(props.match.params.id))
        .then((response) => {
          if (response.data) {
            this.setState({ order: response.data });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  handleSubmit(values) {
    console.log(values);
  }

  render() {
    return (
      <div>
        { this.props.match.params.id ?
          <h1>
            Edit Order #{this.props.match.params.id}
          </h1>
          :
          <h1>
            Create Order
          </h1>
        }
        <OrderForm onSubmit={this.handleSubmit} initialValues={this.state.order} enableReinitialize="true" />
      </div>
    )
  }
}

export default CreateOrEditOrder;