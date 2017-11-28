import React from 'react';
import Trajet from '../trajet/trajet.jsx';
import './element0.css';

export default class Element0 extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {}

  render() {
    console.log(window.innerWidth);
    return (<div>
      <a>
      <div className="card">

      <div className="columns is-mobile">
        <div className="column is-5">
          <div className="columns is-gapless">
          <div className="column is-9">
          <div className="text center">
          <i className="fa fa-circle-thin space debut" aria-hidden="true"></i>Rabat
          <i className="fa fa-long-arrow-right fa-lg space" aria-hidden="true"></i>
          <i className="fa fa-circle-thin space arrivee" aria-hidden="true"></i>Marrakech
          
          </div>
          </div>
          <div className="column is-3">
          <figure className="image is-32x32 centerImage">
            <img className="circular" src="https://bulma.io/images/placeholders/32x32.png" />
          </figure>
          <p className="text photoName centerName nameText">Alaeddine Beljebbar</p>
          </div>
          
          </div>
        </div>
        

        <div className="column is-4">
        <div className="vl center">
          <div className="text center">
          <i className="fa fa-calendar-o space" aria-hidden="true"></i> Mardi 28 november 2017
          <p><i className="fa fa-clock-o space" aria-hidden="true"></i> 17:00</p>
          </div>
        </div>
        </div>

        <div className="column is-3">
        <div className="vl center">
          <div className="text center">
           <font size="5">70 DH</font>
          </div>
        </div>
        </div>

      </div>

      <hr></hr>

       <div class="media">
  <figure class="media-left">
    <p class="image is-64x64">
      <img src="https://bulma.io/images/placeholders/128x128.png" />
    </p>
    <p>Alaeddine Beljebbar</p>
  </figure>
  <div class="media-content">
    <div class="content">
      <p>
        <strong>Barbara Middleton</strong>
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec ultricies elit blandit non. Suspendisse pellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.
        <br />
        <small><a>Like</a> · <a>Reply</a> · 3 hrs</small>
      </p>
    </div>
    </div>
    </div>


      </div>
      </a>
    </div>)
  }
}
