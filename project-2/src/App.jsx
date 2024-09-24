//Import the important stuff
//Import necessary dependencies
import React, { useState } from 'react';
import {
  DropdownMenu,
  DropdownItem,
  Dropdown,
} from 'semantic-ui-react'
import getData from './utils/getData';
import scrollToTop from './utils/scrollToTop';
import scrollToTarget from './utils/scrollToTarget'

//Import the components
import About from './components/About';
import Minors from './components/Minors';
import Degrees from './components/Degrees';
import PeopleTabs from './components/PeopleTabs';
import Employment from './components/Employment';

//Import the css
import './App.css'




//Define the App component
const App=() => {
  //state
  //const [var, setVar] = useState(init);
  //Define state variables
  const [loaded, setLoaded] = React.useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  //Function to handle scroll events for the webpage position scroll line
  const handleScroll = () => {
    const position = (window.scrollY + 800);   //Calculate the new scroll position by adding an offset
    setScrollPosition(position);   //Update the scroll position state variable
  };

  //Go get data!
  //Fetch data from the API and set up scroll event listener
  React.useEffect(() => {
    //The page was just rendered, now get data!
    //I am going to use the getData method in utils
    getData("about/")
      .then((json) => {
        console.log(json);
        // setAboutObj(json);
        setLoaded(true);
      })
    
    //Add event listener to update scroll position on scroll
    window.addEventListener('scroll', handleScroll);

    //Clean up event listener when component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  //This return is for the page BEFORE we load the data!
  //Render content based on loading state
  if (!loaded) return (
    <>
      <div className="sticky">
        <h1 class="iSchool_header">Welcome to the iSchool!</h1>
      </div>

      <br></br>

      <div id="orange_loading_div">
        <img src="./orange_loading.gif" id="orange_loading" alt="Orange Loading GIF"></img>
      </div>
    </>
  );

  //This return is for the page AFTER we load the data!
  return (
    <>
      <div className="sticky">
        {/* Scroll position line that adjusts width based on scroll position */}
        <div
          //Check if scrollPosition is greater than 0 to add glow effect
          className={scrollPosition > 0 ? 'line glow' : 'line'}
          //Calculate width of the line based on scroll position relative to the page height
          style={{ width: `${(scrollPosition / document.body.scrollHeight) * 100}%` }}
        ></div>
        
        <h1 class="iSchool_header">Welcome to the iSchool!</h1>

        {/* NAV BAR TO JUMP TOWARDS EACH SECTION */}
        <nav>
          <ul>
            <li><a onClick={scrollToTop}>ABOUT</a></li>
            <li id="degrees-option">
              <Dropdown text="DEGREES">
                <DropdownMenu>
                  <DropdownItem onClick={() => scrollToTarget("undergraduate-degrees")}>Undergraduate Degrees</DropdownItem>
                  <DropdownItem onClick={() => scrollToTarget("graduate-degrees")}>Gradguate Degrees</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </li>
            <li><a onClick={() => scrollToTarget("minors")}>MINORS</a></li>
            <li><a onClick={() => scrollToTarget("people")}>PEOPLE</a></li>
            <li id="employment-option">
              <Dropdown text="EMPLOYMENT">
                <DropdownMenu>
                  <DropdownItem onClick={() => scrollToTarget("coop-table-div")}>Co-op Table</DropdownItem>
                  <DropdownItem onClick={() => scrollToTarget("employment-table-div")}>Professional Employment Table</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </li>
          </ul>
        </nav>
      </div>

      <div className="App">
        <img src="./RIT_2018_logo_Golisano_College_of_Computing_and_Information_Sciences.png" id="RIT_2018_logo_Golisano_College_of_Computing_and_Information_Sciences" alt="RIT Golisano College of Computing and Information Sciences"></img>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        {/* Put my components here */}
        <About></About>
        
        <br></br>
        <br></br>
        <hr></hr>
        <br></br>
        <br></br>
        
        <Degrees></Degrees>
        
        <br></br>
        <br></br>
        <hr></hr>
        <br></br>
        <br></br>

        <Minors></Minors>
        
        <br></br>
        <br></br>
        <hr></hr>
        <br></br>
        <br></br>

        <PeopleTabs></PeopleTabs>
        
        <br></br>
        <br></br>
        <hr></hr>
        <br></br>
        <br></br>

        <Employment></Employment>
      </div>
    </>
  );
}

export default App
