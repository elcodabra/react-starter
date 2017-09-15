import React from 'react';
import BackendService from '../../services/backend';
import classnames from 'classnames';
import NewTweet from './NewTweet';

class ListTweets extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: {img:'https://d30y9cdsu7xlg0.cloudfront.net/png/148483-200.png'},
      tweets: [],
    }
    this.backendService = new BackendService()
    this.getTweets.bind(this)
    this.onAdd = this.onAdd.bind(this)
  }

  componentDidMount() {
    this.getTweets(this.props);
  }

  /*
  componentWillReceiveProps(nextProps) {
    this.getTweets(nextProps);
  }
  */

  getTweets(props) {
    this.backendService.getTweets()
      .then((response) => {
        if (response.allTweets) {
          this.setState({ tweets: response.allTweets });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onAdd(tweet) {
    this.backendService.addTweet(tweet)
      .then((data) => {
        if (data && data.createTweet) {
          let tweets = Object.assign([], this.state.tweets);
          tweets.unshift(data.createTweet);
          this.setState({ tweets: tweets });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <ul className="list-unstyled">
        <li className="media">
          <img className={classnames("img-thumbnail","rounded-circle","mr-3")} src={this.state.currentUser.img} />
          <div className="media-body">
            <NewTweet onSubmit={this.onAdd} placeholder="Add your text..." />
          </div>
        </li>
        {this.state && this.state.tweets &&
          this.state.tweets.map((item, index) =>
            <li className="media" key={index}>
              <img className={classnames("img-thumbnail","rounded-circle","mr-3")} src={item.account ? item.account.img : this.state.currentUser.img} />
                <div className="media-body">
                  <h5 className={classnames("mt-0","mb-1")}>{item.account ? item.account.fullName : 'You'}</h5>
                  <p className="text-muted">Posted at: {item.createdAt}</p>
                  {item.content}
                  <div className="mt-2">
                    <a href="#">
                      <span className={classnames("fa","fa-heart-o")}></span>
                    </a>
                    <span className="ml-1">{item.likes || 0}</span>
                  </div>
                </div>
            </li>
          )
        }
      </ul>
    )
  }
}

export default ListTweets;