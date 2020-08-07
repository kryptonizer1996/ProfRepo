const initialState = {
  currentVal: ""
};

const reducer = (state = initialState, action) => {
  if (action.type === "CALENDAR") {
    return { currentVal: action.payload };
  } else {
    return state;
  }
};

export default reducer;
