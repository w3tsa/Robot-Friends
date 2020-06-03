import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from "./constants.js";

const intialStateSearch = {
  searchField: "",
};

export const searchRobots = (state = intialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

const initialStateRobots = {
  ispending: false,
  robots: [],
  error: "",
};

export const requestRobots = (state = initialStateRobots, action = {}) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return { ...state, ispending: true };
    case REQUEST_ROBOTS_SUCCESS:
      return { ...state, robots: action.payload, ispending: false };
    case REQUEST_ROBOTS_FAILED:
      return { ...state, error: action.payload, ispending: false };
    default:
      return state;
  }
};
