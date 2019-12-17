import React from 'react';
import { Link } from 'react-router-dom';
import { MuseumCard } from '../../styles/componets';

export default function MuseumCardComp (props){
  return (
    <>
      <MuseumCard>
        <Link to={`/${props.route}`}>
          <img src={props.photoURL} alt="Museum"/>
          <div>
            <h3>{props.name}</h3>
            <small>{props.address}</small>
          </div>
        </Link>
      </MuseumCard>
    </>
  )
}
