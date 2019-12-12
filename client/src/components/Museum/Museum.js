import React from 'react';
import { MuseumCard } from '../../styles/componets';

export default function MuseumComp (props){
  return (
    <>
      <MuseumCard>
        <img src={props.photoURL}/>
        <div>
          <h2>{props.name}</h2>
          <small>{props.address}</small>
        </div>
      </MuseumCard>
    </>
  )
}