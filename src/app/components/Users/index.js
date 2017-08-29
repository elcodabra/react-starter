import React from 'react';
import BackendService from '../../services/backend';

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.backendService = new BackendService();
    this.state = {user: {}};
    this.getUser.bind(this);
  }

  componentDidMount() {
    this.getUser(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.getUser(nextProps);
  }

  getUser(props) {
    this.backendService.getUser(props.match.params.id)
      .then((response) => {
        if (response.data) {
          this.setState({ user: response.data });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h1>
          User #{this.props.match.params.id}
        </h1>
        <div>
          {JSON.stringify(this.state.user)}
        </div>
      </div>
    )
  }
}

export default Users;