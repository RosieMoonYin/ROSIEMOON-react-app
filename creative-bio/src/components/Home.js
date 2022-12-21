//arrow function is a nice thing most modern react projects do  like this
//Home handles all UI

import About from "./About";
import Button from "./Button";
import Footer from "./Footer";
import ImageDisplay from "./Image";
import ReusableButton from "./ReusableButton";
const Home = () => {

 

    return (
        //top level element
        <div className="container">
        
           <Button></Button>
            <h1>Rosie Moon Yin.</h1>
            <p>REACT JSX / 
                JAVASCRIPT / 
                CSS / 
                HTML / 
                CREATIVE PORTFOLIO / </p>
            <About />
            <ReusableButton>Resume</ReusableButton>
            <ReusableButton>Projects</ReusableButton>
            <ReusableButton>GitHub</ReusableButton>
            <ReusableButton>Contact</ReusableButton>
            <ImageDisplay></ImageDisplay>
            <Footer />
        </div>
    )
};

//EXPORT -otherwise you cannot import at APP.js
export default Home;