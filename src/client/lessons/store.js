import Lesson from './lesson';
import getRandomString from '../lib/getrandomstring';
import {actions} from './actions';

// Records are good, bu t i dont understand why I should have them there
// api is fixed
const initialState = {
  list: []
};

const revive = state => initialState.merge({
  list: e.get('list').map(todo => new Todo(todo))
});

export default function(state = initialState, action, payload) {
  if (!action) state = revive(state);

  switch (action) {

    case actions.choosePreviousDay:
      return state.update('list', list => list.push(...getRandomTodos(100)));

    case actions.chooseNextDay:
      return state
        .update('list', list => {
          const newTodo = payload.merge({id: getRandomString()});
          return list.push(newTodo);
        })
        .set('newTodo', new Todo);

    case actions.chooseWeek:
      return state
        .update('list', list => list.clear())
        .set('newTodo', new Todo);
  }

  return state;
}
