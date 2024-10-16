import React from "react";
import "../styles/styles.css";
function JokeLoaderButton({ loadNewJoke }) {
  return <button className="button" onClick={loadNewJoke} >Load new Joke</button>;
}
export default JokeLoaderButton;
