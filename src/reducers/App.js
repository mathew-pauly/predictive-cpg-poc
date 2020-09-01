import { actions } from "../actions/App";
import questions from '../resources/questions.json';

export const initialState = {
  fetching: false,
  fetched: false,
  questions: [...questions],
  error: null,
};
export const appReducer = (state, action) => {
  switch (action.type) {
    case actions.FETCH_QUESTIONS_INIT:
      return {
        ...state,
        questions: [],
        error: null,
        fetching: true,
        fetched: false,
      };
    case actions.FETCH_QUESTIONS_COMPLETE:
      return {
        ...state,
        questions: action.payload,
        fetching: false,
        fetched: true,
        error: null,
      };
    case actions.FETCH_QUESTIONS_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
