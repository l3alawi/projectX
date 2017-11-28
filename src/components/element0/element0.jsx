import React from 'react';
import Trajet from '../trajet/trajet.jsx';
import './element0.css';

export default class Element0 extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {}

  render() {
    console.log(this.elemHeight);
    return (<div>
      <div className="card" ref={(elem) => this.elemHeight = elem.clientHeight}>

        <div className="card-content text">
        <i className="fa fa-circle-thin space debut" aria-hidden="true"></i><font size="5">Rabat</font>
        <i className="fa fa-long-arrow-right fa-lg space" aria-hidden="true"></i>
        <i className="fa fa-circle-thin space arrivee" aria-hidden="true"></i><font size="4">Marrakech</font>
        <span className="vl"></span>
        </div>


      </div>

    </div>)
  }
}
