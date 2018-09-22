import { TEST, SET_LANGUAGE, SET_SERVICE } from "./types";

export const testingRedux = string => dispatch => {
    dispatch({
        type: TEST,
        payload: string
    });
};

export const setLanguage = language => dispatch => {
    dispatch({
        type: SET_LANGUAGE,
        payload: language
    });
};

export const setService = service => dispatch => {
    dispatch({
        type: SET_SERVICE,
        payload: service
    });
};
