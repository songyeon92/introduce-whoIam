import React, { useState } from "react";

const LinkBtn = (props) => {

    const [isMousedOver, setMousedOver] = useState(false);
    const handleMousedOver = () => {
        setMousedOver(true);
    }
    const handleMousedOut = () => {
        setMousedOver(false);
    }

    return (    
    <div>      
        <a 
        style={{backgroundColor: isMousedOver? "black" : null}} 
        href={props.url} className="link-btn"
        onMouseOver={handleMousedOver}
        onMouseOut={handleMousedOut}
        >
            <i class={props.class}>{props.name}</i>
        </a>
    </div>
    );
}

export default LinkBtn;

