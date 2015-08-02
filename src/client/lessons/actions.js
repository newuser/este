export const actions = create();
export const feature = 'todos';

// When everything is constant, who needs to SCREAM_CONSTANTS?

export function create(dispatch, validate) {

  return {
    clickYesterday () {
      dispatch(actions.choosePreviousDay);
    },
    clickTomorrow() {
      dispatch(actions.choosePreviousDay);
    },
    clickWeek() {
      dispatch(actions.chooseWeek);
    }
  };

}

// import Promise from 'bluebird';

// export function onEditableSave(id, name, value) {
//   // Simulate async saving.
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({id, name, value});
//     }, 500);
//   });
//   return dispatch(onEditableSave, promise);
// }

// export function onEditableState(id, name, state) {
//   if (state)
//     state = state.set('value', state.value.slice(0, MAX_TODO_TITLE_LENGTH));
//   dispatch(onEditableState, {id, name, state});
// }
