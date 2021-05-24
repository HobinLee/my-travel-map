const SWITCH_MODE = 'SWITCH_MODE';
const SET_MODE = 'SET_MODE';

const initColorTheme = window.localStorage.getItem('color-theme');

const initialState = {
  colorTheme: initColorTheme ? initColorTheme : window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
}

export const setScreenMode = ( mode ) => ({type: SET_MODE, mode: mode});
export const switchScreenMode = () => ({type: SWITCH_MODE});

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_MODE:
      return {
        colorTheme: action.mode
      }
    case SWITCH_MODE:
      return {
        colorTheme: state.colorTheme === 'dark' ? 'light' : 'dark'
      }
    default:
      return state;
  }
}

export default reducer;