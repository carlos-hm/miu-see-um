import React from 'react';
import { Link } from 'react-router-dom';
import { Hall } from '../../styles/componets';

export default function UserHallComp (props) {
  return (
      <Hall>
        <h2>{ props.name }</h2>
        <Link to={`/hall/${props.hallID}/edit`}>
          <small>edit</small>
        </Link>
        <Link to={`/hall/${props.hallID}`}>
          <small>add artwork</small>
        </Link>
        <div>
          { props.artworks.map (artwork => (
            <Link to={`/artwork/${artwork._id}/edit`}>
              <img src={artwork.photoURL} alt="artwork"/>
            </Link>
          ))}
        </div>
      </Hall>
  )
}