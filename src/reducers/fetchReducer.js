import { FETCH_RESULTS } from "../actions/types";

const initialState = {
    results: [
        {
            id: 1,
            name: "Dr. Angela Wong",
            service: "Family Medicine",
            distance: "350m away",
            office: "Independent Practice",
            languages: ["English", "Cantonese", "Mandarin"],
            address: "777 Bay St. Toronto, ON M5G 2C8",
            hours: "Open - Closes 6pm",
            phone: "416-977-8878",
            website: "N/A",
            img: "https://healthy.kaiserpermanente.org/health/PA_MyDoctor/PhotoProvider?id=9481791",
            lng: -79.385384,
            lat: 43.660645
        },
        {
            id: 2,
            name: "Dr. Helena Liu",
            service: "Family Medicine",
            office: "Downtown Toronto Doctors",
            distance: "350m away",
            languages: ["English", "Mandarin"],
            address: "790 Bay St #630, Toronto, ON M5G 1N8",
            hours: "Open - Closes 6pm",
            phone: "647-427-6001",
            website: "http://www.downtowntorontodoctors.com",
            img: "https://healthy.kaiserpermanente.org/health/PA_MyDoctor/PhotoProvider?id=9481791",
            lng: -79.385948,
            lat: 43.660506
        },
        {
            id: 3,
            name: "Dr. Jane Wu",
            service: "Dermatology",
            office: "Bay Dermatology Clinic",
            distance: "350m away",
            languages: ["English", "Mandarin"],
            address: "790 Bay St, Toronto, ON M5G 1N8",
            hours: "Closed - Opens 9 a.m. Mon",
            phone: "416-515-8808",
            website: "https://baydermatologycentre.com",
            img: "https://healthy.kaiserpermanente.org/health/PA_MyDoctor/PhotoProvider?id=9481791",
            lng: -79.385948,
            lat: 43.660696
        },
        {
            id: 4,
            name: "Dr. Natalya Zhang",
            service: "General Surgery",
            office: "Toronto Endoscopy Clinic",
            distance: "350m away",
            languages: ["English", "Mandarin", "German"],
            address: "717 Bay St. Toronto, ON M5G 2C8",
            hours: "Open - Closes 6pm",
            phone: "416-551-6006",
            website: "https://www.torendoscopy.ca/",
            img: "https://healthy.kaiserpermanente.org/health/PA_MyDoctor/PhotoProvider?id=9481791",
            lng: -79.384596,
            lat: 43.658821
        },
        {
          id: 5,
          name: "Dr. Benny Chang",
          service: "Family Medicine",
          office: "Maple Leaf Medical Clinic",
          distance: "500m away",
          languages: ["English", "Cantonese", "Mandarin"],
          address: "14 College St, Toronto, ON M5G 1K2",
          hours: "Closed - Opens 12 p.m. Mon.",
          phone: "416-465-3252",
          website: "https://www.mlmedical.com/",
          img: "https://healthy.kaiserpermanente.org/health/PA_MyDoctor/PhotoProvider?id=9481791",
          lng: -79.383942,
          lat: 43.661488
      },
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
