import Component from '../components/component.react.js';
import DocumentTitle from 'react-document-title';
import Logout from '../auth/logout.react.js';
import React from 'react';
import requireAuth from '../auth/requireauth.react.js';
import {format} from '../intl/store';
import {Calendar} from 'react-widgets';
import Griddle from 'griddle-react';

@requireAuth
export default class Index extends Component {

  static propTypes = {
    actions: React.PropTypes.object.isRequired,
    msg: React.PropTypes.object.isRequired
  };

  render() {
    const {actions, msg, students} = this.props;
    var fakeData = [
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
      }, {
        "January": 35,
        "February": 20,
        "March": 27,
        "April": 32,
        "May": 23,
        "June": 42
      }
    ];

    return (
      <DocumentTitle title="студенты">
        <div className="me-page">
          <Logout {...{actions, msg}} />

          <p> Ваша группа:</p>
          <br/>
          <Griddle results={fakeData} showFilter={true} useGriddleStyles={false}/>
          <button>добавить</button>
          <button>удалить</button>
        </div>

      </DocumentTitle>
    );
  }

}
