import React from 'react';
import './element.css';
import Trajet from '../trajet/trajet.jsx';


export default class Element extends React.Component {
  constructor(props){
    super();
  }



  render() {
    return (
      <div className="element">
        <div className="card">
          <div className="columns is-gapless">
            <div className="column is-6-tablet">
              <div className="columns is-mobile is-gapless">
                <div className="parent column is-7">
                  <h1 className="childCenter">{this.props.trajets.user.name}</h1>
                  <figure className="childCenter image is-64x64">
                    <img className="circular" src={this.props.trajets.user.picture}/>
                  </figure>
                </div>
                <div className="column is-5">
                  <h1 className="childRight">
                    <i style={{color: 'hsl(171, 100%, 41%)'}} className="space fa fa-male" aria-hidden="true"></i>{this.props.trajets.user.age}, ans</h1>
                  <h1 className="childRight">
                    <i style={{color: 'hsl(217, 71%, 53%)'}} className="space fa fa-facebook-square" aria-hidden="true"></i>{this.props.trajets.user.facebook_friends}
                    amis</h1>
                  <h1 className="childRight">
                    <i style={{color: 'hsl(48, 100%, 67%)'}} className="space fa fa-star" aria-hidden="true"></i>
                    {this.props.trajets.user.avis}/5 - {this.props.trajets.user.reviews.length}
                    avis</h1>
                </div>
              </div>
              <hr className="line"></hr>
              <div className="centerDiv">
                <p className="space childLeft">
                  <font size="8">{this.props.trajets.trajet.prix}</font>,00DH
                  <strong>par place</strong>
                </p>
                <p className="space childLeft">
                  <font size="6">{this.props.trajets.trajet.places_restantes}</font>
                  place restante parmis {this.props.trajets.trajet.places}</p>
              </div>
            </div>

            <div className=" parent column is-6">
              <div>
                <p className="date">{this.props.trajets.trajet.date.jour}
                  <strong className="date0">{this.props.trajets.trajet.date.mois}</strong>
                  à
                  <font size="7">{this.props.trajets.trajet.date.heure}</font>
                </p>
              </div>
              <Trajet debut={this.props.trajets.trajet.from.city} stop={this.props.trajets.trajet.stopes} arrivee={this.props.trajets.trajet.to.city}/>
              <p>
                <i className="fa fa-circle-thin debut" aria-hidden="true"></i>
                RDV : {this.props.trajets.trajet.from.place}</p>
              <p>
                <i className="fa fa-circle-thin space arrivee" aria-hidden="true"></i>
                RDV : {this.props.trajets.trajet.to.place}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
