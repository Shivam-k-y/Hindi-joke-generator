import React from "react";
import "../styles/styles.css";
function JokeLoaderButton({ loadNewJoke }) {
  return <button className="button" onClick={loadNewJoke} >दूसरे चुटकुले के लिए बटन क्लिक करें.</button>;
}
export default JokeLoaderButton;
