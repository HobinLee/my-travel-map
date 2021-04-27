// const USER_LIST_INIT = 'USER_LIST_INIT';
// const USER_LIST_ADD = 'USER_LIST_ADD';
// const USER_LIST_REMOVE = 'USER_LIST_REMOVE';

const USER_LIST_UPDATE = 'USER_LIST_UPDATE';

const initialState = {
  mapData: {},
  userList: [],
}

// export const userListInit = (item) => ({type: USER_LIST_INIT, item: item})
// export const userListAdd = (item) => ({type: USER_LIST_ADD, item: item});
// export const userListRemove = (index) => ({type: USER_LIST_REMOVE, index: index});

export const userListUpdate = (item) => ({type: USER_LIST_UPDATE, item: item});

const reducer = (state = initialState, action) => {
  switch(action.type) {
    // case USER_LIST_INIT:
    //   return {
    //     ...state,
    //     userList: [...state.userList, ...action.item]
    //   }

    case USER_LIST_UPDATE:
      return {
        ...state,
        userList: [...action.item]
      }

    // case USER_LIST_ADD:
    //   return {
    //     ...state,
    //     userList: [...state.userList, action.item]
    //   }

    // case USER_LIST_REMOVE:
    //   return {
    //     ...state,
    //     userList: state.userList.filter((_,index) => index !== action.index)
    //   }
    default:
      return state;
  }
}

export default reducer;