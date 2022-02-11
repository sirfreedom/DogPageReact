import React, { useReducer } from "react";

const initialState = {
  likes: 107,
  dislikes: 24
};

function socialReducer(state, action) {
  switch (action.type) {
    case "LIKE":
      return {
        ...state,
        likes: state.likes + 1
      };
    case "DISLIKE":
      return {
        ...state,
        dislikes: state.dislikes + 1
      };
    default:
      return state;
  }
}

function TestSocialReducer() {
  const [state, dispatch] = useReducer(socialReducer, initialState);
  const { likes, dislikes } = state;

  return (
    <div>
      <p>Likes count: {likes}</p>
      <p>Dislikes count: {dislikes}</p>
      <button onClick={() => dispatch({ type: "LIKE" })}>Like</button>
      <button onClick={() => dispatch({ type: "DISLIKE" })}>Dislike</button>
    </div>
  );
}

export default TestSocialReducer;
