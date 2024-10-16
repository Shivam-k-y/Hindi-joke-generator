import React from "react";
import "../styles/styles.css";

const JokeCard = ({ joke, removeJoke }) => {
    // Guard clause to check if joke is available before rendering
    if (!joke || !joke.status || !joke.jokeContent) {
        return <p>चुटकुला लोड हो रहा है...</p>; // Only show "Loading joke..." if the joke is not yet available
    }

    return (
        <div className="jokeBox">
            <div>
                <p className="paragraph">STATUS: {joke.status}</p>
                <hr></hr>
            </div>
            <p className="paragraph">{joke.jokeContent}</p>
            <hr></hr>
            <div>
                <button className="button" onClick={removeJoke}>इसे हटा दो</button>
            </div>
        </div>
    );
};

export default JokeCard;