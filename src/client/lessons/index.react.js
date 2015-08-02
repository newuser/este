import Component from '../components/component.react';
import DocumentTitle from 'react-document-title';
import Logout from '../auth/logout.react';
import React from 'react';
import requireAuth from '../auth/requireauth.react';
import {format} from '../intl/store';
import Griddle from 'griddle-react';
import moment from 'moment';

// should actio

//@requireAuth
export default class Index extends Component {

  static propTypes = {
    actions: React.PropTypes.object.isRequired,
    msg: React.PropTypes.object.isRequired,
    users: React.PropTypes.object.isRequired
  };

  constructor() {

    super();
    var today = moment();
    var todayStr = today.format('dddd, MMMM Do YYYY');
    var fakeData = {};
    fakeData[todayStr] =
    [
        {
          'номер': '1',
          'Занятие': 'вышка',
          'Тип': 'лекция',
          'препод': 'teacher1'
        },
        {
          'номер': '2',
          'Занятие': 'вышка',
          'Тип': 'практика',
          'препод': 'teacher1'
        },
        {
          'номер': '3',
          'Занятие': 'физика',
          'Тип': 'лекция',
          'препод': 'teacher2'
        }
    ];

    this.currentDay = new Date();
    this.state = {
      schedule: fakeData,
      currentDay: today,
      currentDayStr: todayStr
    };
  }

  yesterday = (date) => {
    var new_day = this.state.currentDay.subtract(1, 'days');
    this.setState({currentDay: new_day, currentDayStr: new_day.format('dddd, MMMM Do YYYY')});
  };

  tomorrow = (date) => {
    var new_day = this.state.currentDay.add(1, 'days');
    this.setState({currentDay: new_day, currentDayStr: new_day.format('dddd, MMMM Do YYYY')});
  };
  render() {
    const {actions, msg} = this.props;

    //<div className=" one column"><button className='button button-small' click={clickWeek}>{msg.lessons.nextWeek}</button></div>
    return (
      <DocumentTitle title={msg.lessons.title}>
        <div className="container">
          <div className="row">
            <div className=" one column"><button className='button button-small' onClick={this.yesterday}>{msg.lessons.yesterday}</button></div>
            <div className=" six columns"> {this.state.currentDayStr}</div>
            <div className=" one column"><button className='button button-small' onClick={this.tomorrow}>{msg.lessons.tomorrow}</button></div>
          </div>

          <Griddle results={this.state.schedule[this.state.currentDayStr]} useGriddleStyles={false}/>
          <br/>
        </div>

      </DocumentTitle>
    );
  }

}
