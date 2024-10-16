import React from "react";
import "../styles/styles.css";

const JokeCard = ({ jokes, RemoveJoke}) => {
    return (
        <div className="jokeBox">
            <div>
                <p className="paragraph">Type: {jokes.type}</p>
                <hr></hr>
            </div>
            <p className="paragraph">Setup: {jokes.setup}</p>
            <p className="paragraph">Punchline: {jokes.punchline}</p>
            <hr></hr>
            <div>
                <button className="button" onClick={RemoveJoke}>Remove</button>
            </div>
        </div>
    );
};

export default JokeCard;
