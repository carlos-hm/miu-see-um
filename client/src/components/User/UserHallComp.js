import React from 'react';
import { Link } from 'react-router-dom';
import { Hall } from '../../styles/componets';

export default function UserHallComp (props) {
  return (
      <Hall>
        <article>
          <h2>{ props.name }</h2>
          <Link  className="iconEditHall" to={`/hall/${props.hallID}/edit`}>
            edit
          </Link>
          <Link className="iconAddArt" to={`/hall/${props.hallID}`}>
            add
          </Link>
        </article>
        <div>
        { (props.artworks) ?
        <>
          { props.artworks.map (artwork => (
            <Link to={`/artwork/${artwork._id}/edit`}>
              <img src={artwork.photoURL} alt="artwork"/>
            </Link>
          ))}
          </> :null
        }
        </div>
      </Hall>
  )
}