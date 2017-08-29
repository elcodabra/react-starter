import React from 'react';

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
    this.setState({ user: props });
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