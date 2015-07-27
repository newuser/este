import Component from '../components/component.react';
import DocumentTitle from 'react-document-title';
import Logout from '../auth/logout.react';
import React from 'react';
import requireAuth from '../auth/requireauth.react';
import {format} from '../intl/store';
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
    var fakeData = [
      {
        "Время": "8:00",
        "Занятие": "вышка",
        "препод": "teacher1"
      },
      {
        "Время": "9:45",
        "Занятие": "физика",
        "препод": "teacher2"
      }
    ];
    return (
      <DocumentTitle title={msg.me.title}>
        <div className="me-page">
          <Logout {...{actions, msg}} />

          <p> Day timeline</p>

          <Griddle results={fakeData} showFilter={true} useGriddleStyles={false}/>
          <br/>
        </div>

      </DocumentTitle>
    );
  }

}
