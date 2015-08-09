import Component from '../components/component.react';
import React from 'react';
import {FormattedHTMLMessage} from 'react-intl';
import {Link} from 'react-router';


export default class Header extends Component {

  static propTypes = {
    msg: React.PropTypes.object.isRequired,
    viewer: React.PropTypes.object
  }

  render() {
    const {msg: {app: {header}}, viewer} = this.props;

    return (
      <header >
        <div className="row">
          <div className="one-third column">
            <h1>
              <FormattedHTMLMessage message={header.h1Html}/>
            </h1>
          </div>
          <div className="two-thirds column">
            <ul>
              <li><Link to="home">{header.home}</Link></li>
              {/*<li><Link to="todos">{header.todos}</Link></li>*/}
              {/*<li><Link to="examples">{header.examples}</Link></li>*/}
              <li><Link to="students">{header.students}</Link></li>
              <li><Link to="calendar">{header.calendar}</Link></li>
              <li><Link to="me">{header.me}</Link></li>

              <li><Link to="lessons">{header.day}</Link></li>
                         {!viewer &&
              <li><Link to="login">{header.login}</Link></li>
              }
            </ul>
          </div>

        </div>
      </header>
    );
  }

}
