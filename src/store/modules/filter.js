const FILTER_DATA_UPDATE = 'FILTER_DATA_UPDATE';

const initialState = {
  filterData: []
}

export const filterDataUpdate = (item) => ({type: FILTER_DATA_UPDATE, item: item});

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FILTER_DATA_UPDATE:
      return {
        ...state,
        filterData: [...action.item]
      }
    default:
      return state;
  }
}

export default reducer;