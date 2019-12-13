import React from 'react';
import { ArtworkDetail } from '../../styles/componets';

export default function ArtworkDetailComp(props) {
  return (
      <ArtworkDetail>
        <img src={props.photoURL}/>
        <div>
          <h2>{props.title}</h2>
          <small>{props.author}</small>
          <p>{props.description}</p>
        </div>
      </ArtworkDetail>
  )
}