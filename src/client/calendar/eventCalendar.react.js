import Component from '../components/component.react';
import DocumentTitle from 'react-document-title';
import Logout from '../auth/logout.react';
import React from 'react';
import requireAuth from '../auth/requireauth.react';
import {format} from '../intl/store';
import {Calendar} from 'react-widgets';
import Griddle from 'griddle-react';
import DayComponent from './day.react.js';

@requireAuth
export default class EventCalendar extends Component {

  static propTypes = {
    actions: React.PropTypes.object.isRequired,
    msg: React.PropTypes.object.isRequired
  };
  constructor() {
    super();
    this.currentDay = new Date();
  }

  render() {
    const {actions, msg} = this.props;

    var change = (value) => {
      this.setState({['value']: value});
      actions.auth.logout();
    }

    return (

          <Calendar dayComponent={DayComponent}
                    actions={actions}
                    value={this.currentDay}
                    onChange={change}/>
    );
  }

}
