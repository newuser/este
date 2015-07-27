import Component from '../components/component.react';
import DocumentTitle from 'react-document-title';
import Logout from '../auth/logout.react';
import React from 'react';
import requireAuth from '../auth/requireauth.react';
import {format} from '../intl/store';
import {Calendar} from 'react-widgets';
import Griddle from 'griddle-react';

export default class DayComponent extends Component {

  static propTypes = {
    //actions: React.PropTypes.object.isRequired,
    //msg: React.PropTypes.object.isRequired
  }

  redirect() {

  }

  handleClick(date){

    //actions.auth.logout()
  }



  render() {
    var isWeekEnd = function(date){
      var day = date.getDay();
      return (day == 6) || (day == 0);
    }

    var date = this.props.date
      , style = { backgroundColor: isWeekEnd(date) && '#F57B7B' }

    return (<div style={style} onClick={this.handleClick.bind(this, date)}>
     {this.props.label}
    </div>);
  }
}
