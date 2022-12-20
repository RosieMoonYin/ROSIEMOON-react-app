//arrow function is a nice thing most modern react projects do  like this
//Home handles all UI

import About from "./About";
import Button from "./Button";
import Footer from "./Footer";
import ReusableButton from "./ReusableButton";
const Home = () => {

 

    return (
        //top level element
        <div className="container">
        
           <Button></Button>
            HELLO!
            <About />
            <ReusableButton>About Button Page</ReusableButton>
            <Footer />
        </div>
    )
};

//EXPORT -otherwise you cannot import at APP.js
export default Home;