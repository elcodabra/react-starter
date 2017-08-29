import React from 'react';
import axios from 'axios';

class Users extends React.Component {
  constructor(props) {
    super(props);
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
    axios.get(`http://jsonplaceholder.typicode.com/users/${props.match.params.id}`)
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