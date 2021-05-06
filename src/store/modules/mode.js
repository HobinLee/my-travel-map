const SWITCH_MODE = 'SWITCH_MODE';
const SET_MODE = 'SET_MODE';

const initialState = {
  darkMode: false,
}

export const setScreenMode = ( mode ) => ({type: SET_MODE, mode: mode});
export const switchScreenMode = () => ({type: SWITCH_MODE});

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_MODE:
      return {
        darkMode: action.mode
      }
    case SWITCH_MODE:
      return {
        darkMode: !state.darkMode
      }
    default:
      return state;
  }
}

export default reducer;