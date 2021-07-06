import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import LinkBtn from "./LinkBtn";


const App = () => {
    return (
        <div>
            <Header />
            <LinkBtn 
                name={" Resume"} 
                class={"fa fa-user icon"}
                url={"https://www.instagram.com/sendkite1/"}
            />
            <LinkBtn 
                name={" Instagram"} 
                class={"fa fa-instagram icon"}
                url={"https://www.instagram.com/sendkite1/"} 
            />
            <LinkBtn 
                name={" Github"} 
                class={"fa fa-envelope icon"}
                url={"https://github.com/songyeon92/"}
            />
            <LinkBtn 
                name={" E-mail"} 
                class={"fa fa-envelope icon"}
                url={"https://calm-beyond-69336.herokuapp.com/"}
            />
            <Footer />
        </div>
    );
}

export default App;
