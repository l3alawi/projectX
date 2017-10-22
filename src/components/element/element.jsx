import React from 'react';
import './element.css';
import Trajet from '../trajet/trajet.jsx';
import trajetData from '../../data/trajets.json';

export default class Element extends React.Component {
  render() {
    return (
      <div>
        <div className="card">
          <div className="columns is-gapless">
            <div className="column is-6">
              <div className="columns is-mobile is-gapless">
                <div className="parent column is-7">
                  <h1 className="childCenter">{trajetData.user.name}</h1>
                  <figure className="childCenter image is-64x64">
                    <img className="circular" src={trajetData.user.picture}/>
                  </figure>
                </div>
                <div className="column is-5">
                  <h1 className="childRight">
                    <i style={{color: 'hsl(171, 100%, 41%)'}} className="space fa fa-male" aria-hidden="true"></i>{trajetData.user.age}, ans</h1>
                  <h1 className="childRight">
                    <i style={{color: 'hsl(217, 71%, 53%)'}} className="space fa fa-facebook-square" aria-hidden="true"></i>{trajetData.user.facebook_friends}
                    amis</h1>
                  <h1 className="childRight">
                    <i style={{color: 'hsl(48, 100%, 67%)'}} className="space fa fa-star" aria-hidden="true"></i>
                    {trajetData.user.avis}/5 - {trajetData.user.reviews.length}
                    avis</h1>
                </div>
              </div>
              <hr className="line"></hr>
              <div className="centerDiv">
                <p className="space childLeft">
                  <font size="8">{trajetData.trajet.prix}</font>,00DH
                  <strong>par place</strong>
                </p>
                <p className="space childLeft">
                  <font size="6">{trajetData.trajet.places_restantes}</font>
                  place restante parmis {trajetData.trajet.places}</p>
              </div>
            </div>

            <div className=" parent column is-6">
              <div>
                <p className="date">{trajetData.trajet.date.jour}
                  <strong className="date0">{trajetData.trajet.date.mois}</strong>
                  à
                  <font size="7">{trajetData.trajet.date.heure}</font>
                </p>
              </div>
              <Trajet debut={trajetData.trajet.from.city} stop={trajetData.trajet.stopes} arrivee={trajetData.trajet.to.city}/>
              <p>
                <i class="fa fa-circle-thin debut" aria-hidden="true"></i>
                RDV : {trajetData.trajet.from.place}</p>
              <p>
                <i class="fa fa-circle-thin space arrivee" aria-hidden="true"></i>
                RDV : {trajetData.trajet.to.place}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
