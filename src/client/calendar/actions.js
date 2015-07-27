import Promise from 'bluebird';
import {ValidationError} from '../lib/validation';

export const actions = create();
export const feature = 'calendar';

const formFieldMaxLength = 100;

export function create(dispatch, validate, msg) {

  return {

    showDate(date) {
      dispatch(actions.showDate);

      return validateForm(fields)
        .then(() => validateCredentials(fields))
        .then(() => dispatch(actions.loginSuccess, fields))
        .catch(error => {
          dispatch(actions.loginFail, error);
          throw error;
        });
    },
    loginSuccess() {},
    loginFail() {},

    logout() {
      // Always reload app on logout for security reasons.
      location.href = '/';
    },

    setFormField({target: {name, value}}) {
      value = value.slice(0, formFieldMaxLength);
      dispatch(actions.setFormField, {name, value});
    }

  };

}
