import React from 'react';
import { MuseumDetail } from '../../styles/componets';

export default function MuseumDetailComp(props) {
  return (
  <>
    <MuseumDetail>
        <h2>{props.name}</h2>
        <img src={props.photoURL} alt="Museum"/>
        <p>{props.description}</p>
        <p>{props.address}</p>
        <p>{props.ticket}</p>
        { (props.hours) ?
        <table>
          <tbody>
            <tr> 
              <td>Monday</td>
              <td>{props.hours.monday}</td>
            </tr>
            <tr>
              <td>Tuesday</td>
              <td>{props.hours.tuesday}</td>
            </tr>
            <tr>
              <td>Wednesday</td>
              <td>{props.hours.wednesday}</td>
            </tr>
            <tr>
            <td>Thursday</td>
            <td>{props.hours.thursday}</td>
            </tr>
            <tr>
              <td>Friday</td>
              <td>{props.hours.friday}</td>
            </tr>
            <tr>
              <td>Saturday</td>
              <td>{props.hours.saturday}</td>
            </tr>
            <tr>
              <td>Sunday</td>
              <td>{props.hours.sunday}</td>
            </tr>          
          </tbody>
        </table> : null
        }
    </MuseumDetail>
  </>
  )
}