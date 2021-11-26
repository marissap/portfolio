import React, { useEffect } from "react"
import { Star } from "phosphor-react";

function scrollingText() {
    let section = document.getElementById("scrolling-section");
    let content = section.querySelector("#scrolling-text");
    
    repeatContent(content, section.offsetWidth);
    
    let el = section.querySelector("#scrolling-div");
    el.innerHTML = el.innerHTML + el.innerHTML;
    
    function repeatContent(el, till) {
        let html = el.innerHTML;
        let counter = 0;
        
        while (el.offsetWidth < till && counter < 100) {
            el.innerHTML += html;
            counter += 1;
        }
    }
}

const Quote = () => {

    useEffect(() => {
        scrollingText()
    }, []);

    return (
        <div id="scrolling-section">
            <div>
                <div id="scrolling-div">
                    <div id="scrolling-text">"I want to build something that makes people fall in love." - Cameron Howe, Halt and Catch Fire<span>✷</span> </div>
                </div>
            </div>
        </div>
    )
}

export default Quote