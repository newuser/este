import Component from '../components/component.react';
import DocumentTitle from 'react-document-title';
import Logout from '../auth/logout.react';
import React from 'react';
import requireAuth from '../auth/requireauth.react';
import {format} from '../intl/store';
import {Calendar} from 'react-widgets';
import Griddle from 'griddle-react';

@requireAuth
export default class Index extends Component {

  static propTypes = {
    actions: React.PropTypes.object.isRequired,
    msg: React.PropTypes.object.isRequired,
    users: React.PropTypes.object.isRequired
  };

  render() {
    const {actions, msg, users: {viewer: {email}}} = this.props;
    var fakeData =  [
      {
        "Name": "Borodach",
        "number": "h99",
        "вышка": 2,
        "термех": 2
      },
      {
        "Name": "Lomonosov",
        "вышка": 5,
        "термех": 4
      },{
        "January": 35,
        "February": 20,
        "March": 27,
        "April": 32,
        "May": 23,
        "June": 42
      }
    ];

    return (
      <DocumentTitle title={msg.me.title}>
        <div className="me-page">
          <p>{format(msg.me.welcome, {email})}</p>
          <p> Your schedule</p>

          <Calendar></Calendar>
          <br/>
          <Griddle results={fakeData}/>
          <Logout {...{actions, msg}} />
        </div>

      </DocumentTitle>
    );
  }

}
