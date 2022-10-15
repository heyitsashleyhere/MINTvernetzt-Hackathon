import React, { useState, useEffect } from 'react'
import { ThemeProvider, createTheme } from "@mui/material/styles";
import EventsBoard from './components/EventsBoard.jsx';
import ScrollToTopBtn from './components/ScrollToTop/ScrollToTopBtn.jsx';
import CategoryDashboard from './components/CategoryDashboard.jsx';
import {users} from './assets/users.js'
import { convertString, generateTrigram, trigramSimilarity} from './assets/authFunc.js'


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

export default function App() {
  const [offering, setOffering] = useState([])
  const [seeking, setSeeking] = useState([])
  const [interests, setInterests] = useState([])

  function setMatching(data) {
    data.forEach((user, _, arr) => {
      const provideSupport = [];
      const getSupport = [];
      const interestMatches = [];
    
      // Mapping
      let userInterests = convertString(
        user.interests.concat(user.competencies).join("")
      );
      let userSeek = convertString(user.seek.join(""));
      let userOffer = convertString(user.offer.concat(user.competencies).join(""));
    
      // Matching
      arr.find((item) => {
        // User offers matching what other users seeks
        let otherUserSeek = convertString(item.seek.join(""));
        if (Number(trigramSimilarity(userOffer, otherUserSeek)) > 0.5) {
          provideSupport.push(item._id);
        }
    
        // User seeking matching what other users offers
        let otherUserOffers = convertString(
          item.offer.concat(item.competencies).join("")
        );
        if (Number(trigramSimilarity(userSeek, otherUserOffers)) > 0.5) {
          getSupport.push(item._id);
        }
    
        // User interest matches other user interests
        let otherUserInterests = convertString(
          item.interests.concat(item.competencies).join("")
        );
        if (Number(trigramSimilarity(userInterests, otherUserInterests)) > 0.5) {
          interestMatches.push(item._id);
        }
      });
      setOffering([...new Set(provideSupport)])
      setSeeking([...new Set(getSupport)])
      setInterests([...new Set(interestMatches)])
    });
  }

  useEffect(() => {
    fetch(`http://localhost:5000/api/users`)
      .then((response) => response.json())
      .then((data) => setMatching(data));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className='App' style={{padding: '1.2rem 11%'}}>
        <ScrollToTopBtn />

        <EventsBoard />
        
        <CategoryDashboard category="Offering" 
                           preSelected={["Kontakt zu Schulen", "Kontakt zu Schüler:innen"]} 
                           users={offering}/>

      <CategoryDashboard category="Seeking" 
                         preSelected={["Kontakt zu Schulen", "Kontakt zu Schüler:innen"]} 
                         users={seeking}/>

      <CategoryDashboard category="Interests" 
                         preSelected={["Wissenschaft", "Technologie"]} 
                         users={interests}/>

      </div>
    </ThemeProvider>
  )
}

