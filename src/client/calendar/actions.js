import Promise from 'bluebird';
import {ValidationError} from '../lib/validation';

export const actions = create();
export const feature = 'calendar';

const formFieldMaxLength = 100;

export function create(dispatch, validate, msg) {

  return {

    setDate(date) {
      dispatch(actions.setDate, {date});

      location.href = '/lessons';

    }

  };

}
