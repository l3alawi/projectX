
import React from 'react';
import './userUI.css';




export default class UserUI extends React.Component{

  constructor(props){
    super();
  }


  activateSearch(){
    this.props.search();
  }

  activateCreateTrajet(){
    this.props.create();
  }


  render(){

    return(
      <div>
        <div className="parent margin">
          <h1 className="childCenter marginButtom"><font size="5">Alaeddine Beljebbar</font></h1>
          <figure className="childCenter image is-128x128">
            <img className="circular" src="https://bulma.io/images/placeholders/128x128.png"/>
          </figure>
        </div>
        <div className="buttonUI"><a className="button is-link is-outlined" onClick={(e)=>this.activateCreateTrajet()}><i className="fa fa-plus space" aria-hidden="true"></i>Créer un trajet</a></div>
        <div className="buttonUI"><a className="button is-link is-outlined" onClick={(e)=>this.activateSearch()}><i className="fa fa-search space" aria-hidden="true"></i>Chercher un trajet</a></div>
        <div className="buttonUI"><a className="button is-link is-outlined"><i className="fa fa-road space" aria-hidden="true"></i>Mes trajets</a></div>
        <div className="buttonUI"><a className="button is-link is-outlined"><i className="fa fa-bell-o space" aria-hidden="true"></i>Mes notification</a></div>
      </div>
    )
  }
}
