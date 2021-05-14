const USER_LIST_OBJ_UPDATE = 'USER_LIST_OBJ_UPDATE';
const USER_FOCUS_ON = 'USER_FOCUS_ON';
const USER_FOCUS_OFF = 'USER_FOCUS_OFF';
const USER_EDIT_ON = 'USER_EDIT_ON';
const USER_EDIT_OFF = 'USER_EDIT_OFF';
const USER_EDIT_SET_DATA = 'USER_EDIT_SET_DATA';

const initialState = {
  userListObj: {},
  isFocus: false,
  isEdit: false,
  editCountry: "",
  editCount: 0,
}

export const userListObjUpdate = (item) => ({type: USER_LIST_OBJ_UPDATE, item: item});
export const userFocusOn = () => ({type: USER_FOCUS_ON});
export const userFocusOff = () => ({type: USER_FOCUS_OFF});
export const userEditOn = () => ({type: USER_EDIT_ON});
export const userEditOff = () => ({type: USER_EDIT_OFF});
export const userEditData = (country, count) => ({type: USER_EDIT_SET_DATA, country: country, count: count});

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case USER_LIST_OBJ_UPDATE:
      return {
        ...state,
        userListObj: {...action.item}
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

    case USER_EDIT_ON:
      return {
        ...state,
        isEdit: true,
      }

    case USER_EDIT_OFF:
      return {
        ...state,
        isEdit: false,
      }

    case USER_EDIT_SET_DATA:
      return {
        ...state,
        editCountry: action.country,
        editCount: action.count
      }

    default:
      return state;
  }
}

export default reducer;