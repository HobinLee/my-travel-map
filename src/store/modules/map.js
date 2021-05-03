// const USER_LIST_INIT = 'USER_LIST_INIT';
// const USER_LIST_ADD = 'USER_LIST_ADD';
// const USER_LIST_REMOVE = 'USER_LIST_REMOVE';

const USER_LIST_UPDATE = 'USER_LIST_UPDATE';
const USER_LIST_OBJ_UPDATE = 'USER_LIST_OBJ_UPDATE';
const USER_INPUT_UPDATE = 'USER_INPUT_UPDATE';
const USER_COUNT_UPDATE = 'USER_COUNT_UPDATE';
const USER_FOCUS_ON = 'USER_FOCUS_ON';
const USER_FOCUS_OFF = 'USER_FOCUS_OFF';

const initialState = {
  // userList: [],
  userListObj: {},
  // userInput: "",
  // userCount: 1,
  isFocus: false,
}

export const userListUpdate = (item) => ({type: USER_LIST_UPDATE, item: item});
export const userListObjUpdate = (item) => ({type: USER_LIST_OBJ_UPDATE, item: item});
export const userInputUpdate = (input) => ({type: USER_INPUT_UPDATE, input: input});
export const userCountUpdate = (count) => ({type: USER_COUNT_UPDATE, count: count});
export const userFocusOn = () => ({type: USER_FOCUS_ON});
export const userFocusOff = () => ({type: USER_FOCUS_OFF});

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case USER_LIST_UPDATE:
      return {
        ...state,
        userList: [...action.item]
      }

    case USER_LIST_OBJ_UPDATE:
      return {
        ...state,
        userListObj: {...action.item}
      }

    case USER_INPUT_UPDATE:
      return {
        ...state,
        userInput: action.input
      }

    case USER_COUNT_UPDATE:
      return {
        ...state,
        userCount: action.count
      }

    case USER_FOCUS_ON:
      return {
        ...state,
        isFocus: true,
      }

    case USER_FOCUS_OFF:
      return {
        ...state,
        isFocus: false,
      }

    default:
      return state;
  }
}

export default reducer;