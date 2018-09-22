import { FETCH_RESULTS } from "../actions/types";

const initialState = {
    results: [
        {
            id: 1,
            name: "Dr. Angela Wong",
            service: "Family Medicine",
            office: "Independent Practice",
            languages: ["English", "Cantonese"],
            address: "777 Bay St. Toronto, ON M5G 2C8",
            hours: "Open - Closes 6pm",
            phone: "(416)-977-8878",
            website: "n/a",
            img:
                "https://healthy.kaiserpermanente.org/health/PA_MyDoctor/PhotoProvider?id=9481791",
            lng: -79.39494,
            lat: 43.644576
        },
        {
            id: 2,
            name: "Dr. Anthony Ho",
            service: "Surgeon",
            office: "Independent Practice",
            languages: ["English", "Cantonese"],
            address: "717 Bay St. Toronto, ON M5G 2C8",
            hours: "Open - Closes 6pm",
            phone: "(416)-977-8888",
            website: "n/a",
            img:
                "https://healthy.kaiserpermanente.org/health/PA_MyDoctor/PhotoProvider?id=9481791",

            lng: -79.39494,
            lat: 43.644576
        }
    ]
};

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_RESULTS:
            return {
                ...state,
                results: action.payload
            };
        default:
            return state;
    }
}
