import { TEST } from "./types";

export const testingRedux = string => dispatch => {
    dispatch({
        type: TEST,
        payload: string
    });
};
