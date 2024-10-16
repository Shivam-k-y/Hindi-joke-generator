// import React from "react";
// import "../styles/styles.css";

// const JokeCard = ({ jokes, RemoveJoke }) => {


//     if (!jokes || !jokes.type) {
//         return <div>Loading joke...</div>; // Show loading or empty message until joke is loaded
//     }
//     return (
// <div className="jokeBox">
//     <div>
//         <p className="paragraph">Type: {jokes.type}</p>
//         <hr></hr>
//     </div>
//     <p className="paragraph">Setup: {jokes.setup}</p>
//     <p className="paragraph">Punchline: {jokes.punchline}</p>
//     <hr></hr>
//     <div>
//         <button className="button" onClick={RemoveJoke}>Remove</button>
//     </div>
// </div>
//     );
// };

// export default JokeCard;




import React from "react";
import "../styles/styles.css";

const JokeCard = ({ joke, removeJoke }) => {
    // Guard clause to check if joke is available before rendering
    if (!joke || !joke.setup || !joke.punchline) {
        return <p>Loading joke...</p>; // Only show "Loading joke..." if the joke is not yet available
    }

    return (
        <div className="jokeBox">
            <div>
                <p className="paragraph">Type: {joke.type}</p>
                <hr></hr>
            </div>
            <p className="paragraph">Setup: {joke.setup}</p>
            <p className="paragraph">Punchline: {joke.punchline}</p>
            <hr></hr>
            <div>
                <button className="button" onClick={removeJoke}>Remove Joke</button>
            </div>
        </div>
    );
};

export default JokeCard;