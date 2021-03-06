import Component from '../components/component.react';
import DocumentTitle from 'react-document-title';
import Logout from '../auth/logout.react';
import React from 'react';
import requireAuth from '../auth/requireauth.react';
import {format} from '../intl/store';
import {Calendar} from 'react-widgets';
import Griddle from 'griddle-react';
import EventCalendar from './eventCalendar.react.js';

@requireAuth
export default class Index extends Component {

  static propTypes = {
    actions: React.PropTypes.object.isRequired,
    msg: React.PropTypes.object.isRequired
  };

  render() {
    const {actions, msg} = this.props;

    return (
      <DocumentTitle title={msg.me.title}>
        <div className="me-page">
          <Logout {...{actions, msg}} />

          <p> Your schedule</p>

          <EventCalendar {...{actions,msg}} />
          <br/>
        </div>

      </DocumentTitle>
    );
  }

}
