import React from 'react';
import './element.css';
import Trajet from '../trajet/trajet.jsx'




export default class Element extends React.Component{
  render(){
    return(
      <div>
        <div className="card">
          <div className="card-content columns">
            <div className="column is-4">
              <div className=" center media">
                <div className="media-left">
                  <p className="title is-6">Alaeddine Beljebbar</p>
                  <figure className="image is-64x64">
                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                  </figure>
                </div>
                <div className="media-content right">
                  <p className="has-text-left-mobile"><i className="fa fa-male space" aria-hidden="true"></i>, 24 ans</p>
                  <div className="rightContent"><i className="fa fa-facebook-official fa-lg space" aria-hidden="true"></i> 333 amis</div>
                  <div className="rightContent"><i className="fa fa-star-o fa-lg space" aria-hidden="true"></i>5/5</div>
                </div>
              </div>
            </div>

            <div className="column is-5">
              <div className="content">
                    <Trajet depart="Rabat" arret={["skhirate","bengrire"]} arrivee="Marrakech" />
                    <p><i class="fa fa-circle-thin debut" aria-hidden="true"></i>RDV: Voir avec le conducteur</p>
                    <p><i class="fa fa-circle-thin space arrivee" aria-hidden="true"></i>Voir avec le conducteur</p>
                <time datetime="2016-1-1"><strong>11:09 PM - 1 Jan 2016</strong></time>
              </div>
            </div>

            <div className="column is-3">
              <h1><strong>70 </strong>DH, par place</h1>
              <h3><i className="fa fa-user space" aria-hidden="true"></i>3 places restantes</h3>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
