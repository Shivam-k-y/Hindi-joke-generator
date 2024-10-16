import React, { useState } from "react";
import JokeLoaderButton from "./components/JokeLoaderButton";
import JokeCard from "./components/JokeCard";
import "./styles/styles.css";
// const url = "https://official-joke-api.appspot.com/jokes/programming/random";
const url = "https://official-joke-api.appspot.com/random_joke";
function App() {
  const [joke, setJoke] = useState([
    {
      id: 385,
      type: "general",
      setup: "Why did the tomato turn red?",
      punchline: "Because it saw the salad dressing!"
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const loadNewJoke = async () => {
    setIsLoading(true);
    const request = await fetch(url).then((response) => response.json());
    setJoke((prev) => [request, ...prev]);
    setIsLoading(false);
  };
  const RemoveJoke = (id) => {
    setJoke((prev) => prev.filter((element) => element.id !== id));
  };

  return (
    <div className="container" >
      <h1 >Random Joke API Test</h1>
      <JokeLoaderButton loadNewJoke={loadNewJoke} />
      <div >
        <h3 className="header">
          {isLoading ? "Loading one more joke..." : "Random Jokes oveview " + (
            joke.length === 1 ? "(1 joke loaded)" : joke.length + "jokes loaded"
          )}

        </h3>
        {joke.map((joke) => <JokeCard jokes={joke} RemoveJoke={() => RemoveJoke(joke.id)} />)}
      </div>
    </div>
  );
}
export default App;