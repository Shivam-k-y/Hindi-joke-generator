import React, { useState, useEffect } from "react";
import JokeLoaderButton from "./components/JokeLoaderButton";
import JokeCard from "./components/JokeCard";
import "./styles/styles.css";

// API URL for random joke
const url = "https://official-joke-api.appspot.com/random_joke";

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
    setJokes((prevJokes) => prevJokes.filter((joke) => joke.id !== id));
  };

  return (
    <div className="container">
      <h1>Random Joke API Test</h1>
      <JokeLoaderButton loadNewJoke={loadNewJoke} />
      <div>
        <h3 className="header">
          {isLoading
            ? "Loading one more joke..."
            : `Random Jokes overview (${jokes.length === 1 ? "1 joke" : `${jokes.length} jokes`} loaded)`}
        </h3>
        {/* Display jokes only after they are loaded */}
        {jokes.length > 0 ? (
          jokes.map((joke) => (
            <JokeCard
              joke={joke}
              removeJoke={() => removeJoke(joke.id)}
            />
          ))
        ) : (
          <p>No jokes available</p>
        )}
      </div>
    </div>
  );
}

export default App;
