const SWITCH_MODE = 'SWITCH_MODE';

const initialState = {
  darkMode: false,
}

export const switchScreenMode = () => ({type: SWITCH_MODE});

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case SWITCH_MODE:
      return {
        darkMode: !state.darkMode
      }
    default:
      return state;
  }
}

export default reducer;