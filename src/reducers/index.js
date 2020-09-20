import { combineReducers } from "redux";

const numberReducer = (number = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return (number = number + Number(action.number));
    default:
      return number;
  }
};

const postsReducer = (posts = [], action) => {
  console.log("reducer");
  switch (action.type) {
    case "FETCH_POST":
      return action.payload;
    default:
      return posts;
  }
};

const reducer = (
  state = { student: { school: { name: "dhkh", location: "huế" }, age: 23 }, dog: {foot: 4, name: 'Chó ngu'} },
  action
) => {
  console.log("reducer");
  if (action.type === "CHANGE_STUDENT") {
    state.student.school.name = 'lao bao';

    state.dog.foot = 1;
    return { ...state, dog: {...state.dog} };
  }

  return state;
};
export default reducer;
