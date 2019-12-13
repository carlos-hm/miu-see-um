import React from 'react';
import { Link } from 'react-router-dom';
import { Hall } from '../../styles/componets';

export default function HallComp (props) {
  return (
      <Hall>
        <h2>{ props.name }</h2>
        <div>
          { props.artworks.map (artwork => (
            <Link to={`/artwork/${artwork._id}`}>
              <img src={artwork.photoURL}/>
            </Link>
          ))}
        </div>
      </Hall>
  )
}