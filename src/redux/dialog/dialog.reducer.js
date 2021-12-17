

const INITIAL_STATE = {

  hidden:false

};

const dialogReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case "TOGGLE":
      console.log('dialogReducer action.type2:' + action.type )
      return {
        ...state,
        hidden: !state.hidden

      };
   
    default:
      return state;
  }
}

export default dialogReducer;

