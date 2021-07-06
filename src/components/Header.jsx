import React from "react";
import mypic from "/Users/SongYeon/Desktop/songyeon-first/songyeon/src/mypic.png";

function Header() {
    return (
        <header>
            <h1>Songyeon</h1>
            <img className="circle-img" src={ mypic } alt="myImg"/>  
            <p>外国語x営業経験×Web Develop(勉強中)</p>
        </header>
    );
}

export default Header;