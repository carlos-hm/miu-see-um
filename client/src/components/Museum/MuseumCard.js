import React from 'react';
import { Link } from 'react-router-dom';
import { MuseumCard } from '../../styles/componets';

export default function MuseumCardComp (props){
  return (
    <>
      <MuseumCard>
        <Link to={`/${props.route}`}>
          <img src={props.photoURL}/>
          <div>
            <h2>{props.name}</h2>
            <small>{props.address}</small>
          </div>
        </Link>
      </MuseumCard>
    </>
  )
}
