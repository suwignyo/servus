import { TEST, SET_LANGUAGE, SET_SERVICE } from "../actions/types";

const initialState = {
    test: "",
    languages: [
        { value: "English", label: "English" },
        { value: "Korean", label: "Korean" },
        { value: "Vietnamese", label: "Vietnamese" },
        { value: "Chinese", label: "Chinese" },
        { value: "Spanish", label: "Spanish" },
        { value: "Tamil", label: "Tamil" },
        { value: "Punjabi", label: "Punjabi" },
        { value: "Hindi", label: "Hindi" },
        { value: "Arabic", label: "Arabic" }
    ],
    languageSelected: "",
    serviceSelected: "",
    address: { longitude: 43.6598295, latitude: -79.3886319 }
};

export default function(state = initialState, action) {
    switch (action.type) {
        case TEST:
            return {
                ...state,
                test: action.payload
            };
        case SET_LANGUAGE:
            return {
                ...state,
                languageSelected: action.payload
            };
        case SET_SERVICE:
            return {
                ...state,
                serviceSelected: action.payload
            };
        default:
            return state;
    }
}
