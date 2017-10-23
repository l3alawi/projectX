import React from 'react';
import PropTypes from 'prop-types';
import './trajet.css';



export default class Trajet extends React.Component {
  constructor(props){
    super();
  }

  arrayToStops(array){
    let stopsElemnts = [];
    if(Array.isArray(array)){
      for(let i = 0; i< array.length; i++){
        stopsElemnts.push(<div key={i}><i className="fa fa-hand-paper-o space" aria-hidden="true"></i>{array[i]}</div>);
      }
      return stopsElemnts;
    }
  };

  render(){
    var stopsElements = this.arrayToStops(this.props.stop);


    return(
      <div className="box">
        <div className="inOnRow">
          <div className="childCenter">
            <strong><i className="fa fa-circle-thin space debut" aria-hidden="true"></i><font size="5">{this.props.debut}</font></strong>
            <i className="fa fa-long-arrow-right space" aria-hidden="true"></i>
            <strong><i className="fa fa-circle-thin space arrivee" aria-hidden="true"></i><font size="4">{this.props.arrivee}</font></strong>
            {stopsElements}
          </div>
        </div>
      </div>
    )
  }
}

Trajet.propTypes = {
  debut: PropTypes.string,
  arrivee: PropTypes.string,
  stop: PropTypes.array
}
