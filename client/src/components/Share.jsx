import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './share.css';

class Share extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: {},
    };
  }

  componentDidMount() {
    this.setState({ details: this.props.details });
  }

  render() {
    return (
      <div styleName="share-container">
        <div styleName="share">
          <div styleName="xbutton-container">
            <img styleName="xbutton" onClick={() => { this.props.onClick(1); }} src="https://s3-us-west-1.amazonaws.com/sdc-pawstel-images/static/blackx.png" />
          </div>

          <div styleName="title-container">
            <div styleName="title">
                Share
            </div>
          </div>

          <div styleName="titlePhrase">
               Check out this awesome listing on Airpnp:
            {' '}
            {this.state.details.listing_description}
          </div>

          <div styleName="list-container">
            <div styleName="list">

              <div styleName="list-item">
                <img styleName="list-item-photo" src="https://s3-us-west-1.amazonaws.com/sdc-pawstel-images/static/facebook.png" />
                <div styleName="list-item-text">
                  {' '}
Facebook
                  {' '}
                </div>
              </div>

              <div styleName="list-item">
                <img styleName="list-item-photo" src="https://s3-us-west-1.amazonaws.com/sdc-pawstel-images/static/twitter.png" />
                <div styleName="list-item-text">
                  {' '}
Twitter
                  {' '}
                </div>
              </div>

              <div styleName="list-item">
                <img styleName="list-item-email-photo" src="https://s3-us-west-1.amazonaws.com/sdc-pawstel-images/static/email.png" />
                <div styleName="list-item-text">
                  {' '}
Email
                  {' '}
                </div>
              </div>

              <div styleName="list-item">
                <img styleName="list-item-photo" src="https://s3-us-west-1.amazonaws.com/sdc-pawstel-images/static/messenger.png" />
                <div styleName="list-item-text">
                  {' '}
Messenger
                  {' '}
                </div>
              </div>

              <div styleName="list-item">
                <img styleName="list-item-photo" src="https://s3-us-west-1.amazonaws.com/sdc-pawstel-images/static/copy.png" />
                <div styleName="list-item-text">
                  {' '}
Copy Link
                  {' '}
                </div>
              </div>

              <div styleName="list-item-last">
                <img styleName="list-item-photo" src="https://s3-us-west-1.amazonaws.com/sdc-pawstel-images/static/embed.png" />
                <div styleName="list-item-text">
                  {' '}
Embed
                  {' '}
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CSSModules(Share, styles);
