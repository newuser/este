import Day from './day';
import {Range, Record} from 'immutable';
import {actions} from './actions';

// Records are good. https://facebook.github.io/immutable-js/docs/#/Record
const initialState = new (Record({
  date: new Date
}));

const revive = state => initialState.merge({
  date: state.get('date')
});

export default function(state = initialState, action, payload) {
  if (!action) state = revive(state);

  switch (action) {
    case actions.setDate:
      return state.update('date', payload);
  }

  return state;
}
