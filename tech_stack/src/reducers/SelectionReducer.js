//this reducer needs a bit more information. so it gets the state (if nothing is passed,
//it is simply null, and an action. So the type that is passed is either "select_library",
//then the reducer returns the payload. If the action.type is something else then it simply
//returns the state
export default (state = null, action) => {
  switch (action.type) {
    case 'select_library':
      return action.payload;
    default:
      return state;
  }
};
