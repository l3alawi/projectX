import React from 'react';
import './trajet.css';



export default class Trajet extends React.Component {
  constructor(props){
    super();
  }

  render(){
    console.log(this.props);
    return(
      <div className="box">
        <div className="inOnRow">
          <p>
            <strong><i class="fa fa-circle-thin debut" aria-hidden="true"></i>Rabat</strong>
            <i className="fa fa-long-arrow-right space" aria-hidden="true"></i>
            Bengrire
            <i className="fa fa-long-arrow-right space" aria-hidden="true"></i>
            <strong><i class="fa fa-circle-thin space arrivee" aria-hidden="true"></i>Marrakech</strong>
          </p>
        </div>
      </div>
    )
  }
}
