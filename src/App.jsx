import React from 'react'
import { ThemeProvider, createTheme } from "@mui/material/styles";
import EventsBoard from './components/EventsBoard.jsx';
import CardDisplay from './components/CardDisplay.jsx'
import ScrollToTopBtn from './components/ScrollToTop/ScrollToTopBtn.jsx';


const theme = createTheme({
	palette: {
		primary: {
			main: "#154194",
		},

		secondary: {
			main: "#ffffff",
		},
	}
})

const users = [{
  "firstName": "Mile",
  "lastName": "Hollan",
  "position": "Innovation",
  "photo": "https://avatars.dicebear.com/api/human/992.svg",
  "email": "milehollan@matrix-ggmbh.de",
  "phone": 4916238588897,
  "interests": [
    "Menschzentriertes Design",
    "Code Patterns"
  ],
  "description": "Kontaktiert mich gern, falls ihr Probleme habt, euch kommende Features der Plattform interessieren oder ihr euch einfach über Technologien austauschen wollt.",
  "activityAreas": [
    "Düsseldorf"
  ],
  "competencies": [
    "Webentwicklung"
  ],
  "offer": [
    "Digitale Koptenzen"
  ],
  "seek": [
    "Kontakt zu Unternehmen"
  ],
  "website": "nash@matrix-ggmbh.de",
  "organization": "Matrix gGmbH",
  "_id": "634aab65849a8b8d4ed13993",
  "dateCreated": "2022-10-15T12:45:25.262Z",
  "__v": 0
}, {
  "firstName": "Mile",
  "lastName": "Hollan",
  "position": "Innovation",
  "photo": "https://avatars.dicebear.com/api/human/992.svg",
  "email": "milehollan@matrix-ggmbh.de",
  "phone": 4916238588897,
  "interests": [
    "Menschzentriertes Design",
    "Code Patterns"
  ],
  "description": "Kontaktiert mich gern, falls ihr Probleme habt, euch kommende Features der Plattform interessieren oder ihr euch einfach über Technologien austauschen wollt.",
  "activityAreas": [
    "Düsseldorf"
  ],
  "competencies": [
    "Webentwicklung"
  ],
  "offer": [
    "Digitale Koptenzen"
  ],
  "seek": [
    "Kontakt zu Unternehmen"
  ],
  "website": "nash@matrix-ggmbh.de",
  "organization": "Matrix gGmbH",
  "_id": "634aab65849a8b8d4ed13990",
  "dateCreated": "2022-10-15T12:45:25.262Z",
  "__v": 0
}, {
  "firstName": "Mile",
  "lastName": "Hollan",
  "position": "Innovation",
  "photo": "https://avatars.dicebear.com/api/human/992.svg",
  "email": "milehollan@matrix-ggmbh.de",
  "phone": 4916238588897,
  "interests": [
    "Menschzentriertes Design",
    "Code Patterns"
  ],
  "description": "Kontaktiert mich gern, falls ihr Probleme habt, euch kommende Features der Plattform interessieren oder ihr euch einfach über Technologien austauschen wollt.",
  "activityAreas": [
    "Düsseldorf"
  ],
  "competencies": [
    "Webentwicklung"
  ],
  "offer": [
    "Digitale Koptenzen"
  ],
  "seek": [
    "Kontakt zu Unternehmen"
  ],
  "website": "nash@matrix-ggmbh.de",
  "organization": "Matrix gGmbH",
  "_id": "634aab65849a8b8d4ed13093",
  "dateCreated": "2022-10-15T12:45:25.262Z",
  "__v": 0
}, {
  "firstName": "Mile",
  "lastName": "Hollan",
  "position": "Innovation",
  "photo": "https://avatars.dicebear.com/api/human/992.svg",
  "email": "milehollan@matrix-ggmbh.de",
  "phone": 4916238588897,
  "interests": [
    "Menschzentriertes Design",
    "Code Patterns"
  ],
  "description": "Kontaktiert mich gern, falls ihr Probleme habt, euch kommende Features der Plattform interessieren oder ihr euch einfach über Technologien austauschen wollt.",
  "activityAreas": [
    "Düsseldorf"
  ],
  "competencies": [
    "Webentwicklung"
  ],
  "offer": [
    "Digitale Koptenzen"
  ],
  "seek": [
    "Kontakt zu Unternehmen"
  ],
  "website": "nash@matrix-ggmbh.de",
  "organization": "Matrix gGmbH",
  "_id": "634aab65849a8b8d4ed03993",
  "dateCreated": "2022-10-15T12:45:25.262Z",
  "__v": 0
}, {
  "firstName": "Mile",
  "lastName": "Hollan",
  "position": "Innovation",
  "photo": "https://avatars.dicebear.com/api/human/992.svg",
  "email": "milehollan@matrix-ggmbh.de",
  "phone": 4916238588897,
  "interests": [
    "Menschzentriertes Design",
    "Code Patterns"
  ],
  "description": "Kontaktiert mich gern, falls ihr Probleme habt, euch kommende Features der Plattform interessieren oder ihr euch einfach über Technologien austauschen wollt.",
  "activityAreas": [
    "Düsseldorf"
  ],
  "competencies": [
    "Webentwicklung"
  ],
  "offer": [
    "Digitale Koptenzen"
  ],
  "seek": [
    "Kontakt zu Unternehmen"
  ],
  "website": "nash@matrix-ggmbh.de",
  "organization": "Matrix gGmbH",
  "_id": "634aab6584908b8d4ed13993",
  "dateCreated": "2022-10-15T12:45:25.262Z",
  "__v": 0
}, {
  "firstName": "Mile",
  "lastName": "Hollan",
  "position": "Innovation",
  "photo": "https://avatars.dicebear.com/api/human/992.svg",
  "email": "milehollan@matrix-ggmbh.de",
  "phone": 4916238588897,
  "interests": [
    "Menschzentriertes Design",
    "Code Patterns"
  ],
  "description": "Kontaktiert mich gern, falls ihr Probleme habt, euch kommende Features der Plattform interessieren oder ihr euch einfach über Technologien austauschen wollt.",
  "activityAreas": [
    "Düsseldorf"
  ],
  "competencies": [
    "Webentwicklung"
  ],
  "offer": [
    "Digitale Koptenzen"
  ],
  "seek": [
    "Kontakt zu Unternehmen"
  ],
  "website": "nash@matrix-ggmbh.de",
  "organization": "Matrix gGmbH",
  "_id": "634a0ab65849a8b8d4ed13993",
  "dateCreated": "2022-10-15T12:45:25.262Z",
  "__v": 0
}, {
  "firstName": "Mile",
  "lastName": "Hollan",
  "position": "Innovation",
  "photo": "https://avatars.dicebear.com/api/human/992.svg",
  "email": "milehollan@matrix-ggmbh.de",
  "phone": 4916238588897,
  "interests": [
    "Menschzentriertes Design",
    "Code Patterns"
  ],
  "description": "Kontaktiert mich gern, falls ihr Probleme habt, euch kommende Features der Plattform interessieren oder ihr euch einfach über Technologien austauschen wollt.",
  "activityAreas": [
    "Düsseldorf"
  ],
  "competencies": [
    "Webentwicklung"
  ],
  "offer": [
    "Digitale Koptenzen"
  ],
  "seek": [
    "Kontakt zu Unternehmen"
  ],
  "website": "nash@matrix-ggmbh.de",
  "organization": "Matrix gGmbH",
  "_id": "634aab05849a8b8d4ed13993",
  "dateCreated": "2022-10-15T12:45:25.262Z",
  "__v": 0
}, {
  "firstName": "Mile",
  "lastName": "Hollan",
  "position": "Innovation",
  "photo": "https://avatars.dicebear.com/api/human/992.svg",
  "email": "milehollan@matrix-ggmbh.de",
  "phone": 4916238588897,
  "interests": [
    "Menschzentriertes Design",
    "Code Patterns"
  ],
  "description": "Kontaktiert mich gern, falls ihr Probleme habt, euch kommende Features der Plattform interessieren oder ihr euch einfach über Technologien austauschen wollt.",
  "activityAreas": [
    "Düsseldorf"
  ],
  "competencies": [
    "Webentwicklung"
  ],
  "offer": [
    "Digitale Koptenzen"
  ],
  "seek": [
    "Kontakt zu Unternehmen"
  ],
  "website": "nash@matrix-ggmbh.de",
  "organization": "Matrix gGmbH",
  "_id": "634aab60849a8b8d4ed13993",
  "dateCreated": "2022-10-15T12:45:25.262Z",
  "__v": 0
}, {
  "firstName": "Mile",
  "lastName": "Hollan",
  "position": "Innovation",
  "photo": "https://avatars.dicebear.com/api/human/992.svg",
  "email": "milehollan@matrix-ggmbh.de",
  "phone": 4916238588897,
  "interests": [
    "Menschzentriertes Design",
    "Code Patterns"
  ],
  "description": "Kontaktiert mich gern, falls ihr Probleme habt, euch kommende Features der Plattform interessieren oder ihr euch einfach über Technologien austauschen wollt.",
  "activityAreas": [
    "Düsseldorf"
  ],
  "competencies": [
    "Webentwicklung"
  ],
  "offer": [
    "Digitale Koptenzen"
  ],
  "seek": [
    "Kontakt zu Unternehmen"
  ],
  "website": "nash@matrix-ggmbh.de",
  "organization": "Matrix gGmbH",
  "_id": "634aab6584988b8d4ed13993",
  "dateCreated": "2022-10-15T12:45:25.262Z",
  "__v": 0
}, {
  "firstName": "Mile",
  "lastName": "Hollan",
  "position": "Innovation",
  "photo": "https://avatars.dicebear.com/api/human/992.svg",
  "email": "milehollan@matrix-ggmbh.de",
  "phone": 4916238588897,
  "interests": [
    "Menschzentriertes Design",
    "Code Patterns"
  ],
  "description": "Kontaktiert mich gern, falls ihr Probleme habt, euch kommende Features der Plattform interessieren oder ihr euch einfach über Technologien austauschen wollt.",
  "activityAreas": [
    "Düsseldorf"
  ],
  "competencies": [
    "Webentwicklung"
  ],
  "offer": [
    "Digitale Koptenzen"
  ],
  "seek": [
    "Kontakt zu Unternehmen"
  ],
  "website": "nash@matrix-ggmbh.de",
  "organization": "Matrix gGmbH",
  "_id": "634aab65849a8b4d4ed13993",
  "dateCreated": "2022-10-15T12:45:25.262Z",
  "__v": 0
}]


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <ScrollToTopBtn />
        <CardDisplay users={users}/>
        <EventsBoard />
      </div>
    </ThemeProvider>
  )
}

