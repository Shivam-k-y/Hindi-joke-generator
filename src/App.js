import React, { useState, useEffect } from "react";
import JokeLoaderButton from "./components/JokeLoaderButton";
import JokeCard from "./components/JokeCard";
import "./styles/styles.css";

// API URL for random joke
const url = "https://hindi-jokes-api.onrender.com/jokes?api_key=a7f3ed1c3266fd0dc5467c48c330";

function App() {
  const [jokes, setJokes] = useState([]); // Store all jokes in an array
  const [isLoading, setIsLoading] = useState(false); // Track loading state

  // Fetch the initial joke when the component mounts
  useEffect(() => {
    async function fetchInitialJoke() {
      setIsLoading(true); // Set loading to true while fetching
      try {
        const response = await fetch(url);
        const data = await response.json();
        setJokes([data]); // Add initial joke to the jokes array
      } catch (error) {
        console.error("Error fetching joke:", error);
      } finally {
        setIsLoading(false); // Set loading to false after fetching
      }
    }
    fetchInitialJoke();
  }, []);

  // Function to load a new joke
  const loadNewJoke = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setJokes((prevJokes) => [data, ...prevJokes]); // Append new joke to existing ones
    } catch (error) {
      console.error("Error fetching joke:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Function to remove a joke by ID
  const removeJoke = (id) => {
    setJokes((prevJokes) => prevJokes.filter((joke) => joke._id !== id));
  };

  const handleClick = () => {
    window.location.href = 'https://english-joke-generator.vercel.app';
  };

  return (
    <div className="container">
      <h1>
        चुटकुले हैं </h1>
      <button className="button" onClick={handleClick}>ENGLISH JOKE</button>
      <JokeLoaderButton loadNewJoke={loadNewJoke} />
      <div>
        <h3 className="header">
          {isLoading
            ? "एक और चुटकुला लोड हो रहा है..."
            : `हँसना मना है!  (${jokes.length === 1 ? "1 चुटकुला" : `${jokes.length} चुटकुले`} loaded)`}
        </h3>
        {jokes.length > 0 ? (
          jokes.map((joke) => (
            <JokeCard
              joke={joke}
              removeJoke={() => removeJoke(joke._id)}
            />
          ))
        ) : (
          <p>कोई चुटकुले उपलब्ध नहीं है</p>
        )}
      </div>
    </div>
  );
}

export default App;
