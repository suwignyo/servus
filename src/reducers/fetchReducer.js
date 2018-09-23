import {
  FETCH_RESULTS
} from "../actions/types";

const initialState = {
  doctors: [{
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
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzecKpjF2lEJuZltsDSDCkXIRyQTHqiu7squgMXr2XboUpyopy",
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
      img: "https://drmargaretliu.com/wp-content/uploads/2015/03/DSCF4248-e1425870594681.jpg",
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
      img: "https://www.unitedvetclinic.com/wp-content/uploads/2018/05/UVC-Dr-Talitha-Tumboimbela-.jpg",
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
      img: "https://d1cesmq0xhh7we.cloudfront.net/a6f48e86-7376-47f6-85f1-f9416987c601zoom.jpg",
      lng: -79.385999,
      lat: 43.660606
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
      img: "https://directory.wkhs.com/Photos/11113096.jpg",
      lng: -79.383942,
      lat: 43.661488
    }
  ],
  lawyers: [{
      id: 6,
      name: "Kai Deng",
      service: "Barrister & Solicitor",
      office: "Kai Deng Law Office",
      distance: "500m away",
      languages: ["English", "Mandarin"],
      address: "14 College St, Toronto, ON M5G 1K2",
      hours: "Closed - Opens 8 a.m. Mon.",
      phone: "416-465-3252",
      website: "http://www.dhdlawyer.com/kai-deng-law-office/",
      img: "http://3.bp.blogspot.com/-9ax2ralS1IY/U-2FheTiu7I/AAAAAAAAADs/E1H54a9rq1Q/s1600/89120%E4%BF%AE.jpg",
      lng: -79.384059,
      lat: 43.661351
    },
    {
      id: 7,
      name: "Zhen Dong Sun",
      service: "Attorney",
      office: "Z. Sun Law Professional",
      distance: "550m away",
      languages: ["English", "Mandarin"],
      address: "77 Gerrard St, Toronto, ON M5G 1K2",
      hours: "Closed - Opens 8 a.m. Mon.",
      phone: "416-465-3252",
      website: "http://www.dhdlawyer.com/kai-deng-law-office/",
      img: "https://pbs.twimg.com/profile_images/541832964292624384/XYfxLT2T.jpeg",
      lng: -79.385375,
      lat: 43.658085
    },
    {
      id: 8,
      name: "Jack Yu",
      service: "Corporate Law",
      office: "Jack Yu Law Office",
      distance: "900m away",
      languages: ["English", "Mandarin", "Cantonese"],
      address: "600 Bay St, Toronto, ON M5G 1K2",
      hours: "Closed - Opens 8 a.m. Mon.",
      phone: "416-465-3252",
      website: "http://www.dhdlawyer.com/kai-deng-law-office/",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNA8jLuOk720EJEQQ3L8w9blTfKM02YlST6nkhO8Tyce6QCe6Z5Q",
      lng: -79.384086,
      lat: 43.655940
    },
    {
      id: 9,
      name: "Melinda Zhang",
      service: "Barrister & Solicitor",
      office: "Radnoff Law Office",
      distance: "500m away",
      languages: ["English", "Mandarin", "French"],
      address: "14 College St, Toronto, ON M5G 1K2",
      hours: "Closed - Opens 8 a.m. Mon.",
      phone: "416-465-3252",
      website: "https://www.fasken.com/en/jack-yu",
      img: "https://www.chineselawyers.com/images/melinda-zhang-2006",
      lng: -79.384100,
      lat: 43.661300
    },
    {
      id: 10,
      name: "Ella Chen",
      service: "Criminal Defense Lawyer",
      office: "Ella Chen LLP",
      distance: "500m away",
      languages: ["English", "Mandarin", "Korean"],
      address: "14 College St, Toronto, ON M5G 1K2",
      hours: "Closed - Opens 8 a.m. Mon.",
      phone: "416-465-3252",
      website: "http://www.dhdlawyer.com/kai-deng-law-office/",
      img: "https://upload.wikimedia.org/wikipedia/commons/1/1b/%E8%94%A1%E8%8B%B1%E6%96%87%E5%AE%98%E6%96%B9%E5%85%83%E9%A6%96%E8%82%96%E5%83%8F%E7%85%A7.png",
      lng: -79.384000,
      lat: 43.6613525
    }
  ]
};

export default function (state = initialState, action) {
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
