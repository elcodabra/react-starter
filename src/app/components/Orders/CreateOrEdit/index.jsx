import React from 'react';
import BackendService from '../../../services/backend';

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
    this.handleInputChange = this.handleInputChange.bind(this);
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

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      order: Object.assign({}, this.state.order, {
        [name]: value
      })
    });
  }

  handleSubmit() {
    console.log(this.state);
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
        <div>
          <div>
            <label>
              name:
              <input
                type="text"
                name="title"
                value={this.state.order.title}
                onChange={this.handleInputChange} />
            </label>
          </div>
          <div>
            <label>
              body:
              <input
                type="text"
                name="body"
                value={this.state.order.body}
                onChange={this.handleInputChange} />
            </label>
          </div>
          <div>
            <button onClick={this.handleSubmit}>{ this.props.match.params.id ? 'Save' : 'Add' }</button>
          </div>
          {/*{JSON.stringify(this.state.order)}*/}
        </div>
      </div>
    )
  }
}

export default CreateOrEditOrder;