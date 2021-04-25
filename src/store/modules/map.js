const USER_LIST_ADD = 'USER_LIST_ADD';

const initialState = {
  mapData: {},
  userList: [],
}

export const userListAdd = (item) => ({type: USER_LIST_ADD, item: item});

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case USER_LIST_ADD:
      return {
        ...state,
        userList: [...state.userList, action.item]
      }

    default:
      return state;
  }
}

export default reducer;