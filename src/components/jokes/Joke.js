import React from 'react';
import './Joke.css';

const Joke = (props) => {
  return (
    
    <div className="customList">
      <ul>
        <li>
          {props.title}
        </li>
      </ul>
    </div>
  );
};

export default Joke;
