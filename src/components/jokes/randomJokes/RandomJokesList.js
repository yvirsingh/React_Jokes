import React, { useState, useEffect } from 'react';
import Joke from '../Joke'
import { GetRandomJokes } from "../../../services/JokeServices";



const RandomJokesList = (props) => {

  const [jokes, setJokes] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(false);

  const _getRandomJokes = () => {
    setLoading(true);

    GetRandomJokes().then(response => {
      if (response?.status === 200) {
        setJokes(response.data.results);
        setLoading(false);
      } else {
        setLoading(false);
        setHasError(true);

      }
    });

  }
  useEffect(() => {
    _getRandomJokes();

  }, []);


  return (
    <div>
      {loading ? <div>Loading...</div> : hasError ? <div>Network Error occured.</div> : (jokes.map((joke) => (
        <Joke
          key={joke.id}
          title={joke.joke}
        />
      )))
      }
    </div>
  );
};

export default RandomJokesList;
