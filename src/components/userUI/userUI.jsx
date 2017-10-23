
import React from 'react';
import './userUI.css';
import Search from '../search/search.jsx';




export default class UserUI extends React.Component{

  constructor(props){
    super();
    this.state = {
      search:false
    }
  }


  activateSearch(){
    this.setState({
      search: true
    })
  }

  render(){
    var searchUI;

    if(this.state.search){
      searchUI = <div className="card"><Search /></div>
    }else{
      searchUI = <div className="buttonUI"><a className="button is-link is-outlined" onClick={(e)=>this.activateSearch()}><i className="fa fa-search space" aria-hidden="true"></i>Chercher un trajet</a></div>
    }

    return(
      <div>
        <div className="parent margin">
          <h1 className="childCenter marginButtom"><font size="5">Alaeddine Beljebbar</font></h1>
          <figure className="childCenter image is-128x128">
            <img className="circular" src="https://bulma.io/images/placeholders/128x128.png"/>
          </figure>
        </div>
        <div className="buttonUI"><a className="button is-link is-outlined"><i className="fa fa-plus space" aria-hidden="true"></i>Créer un trajet</a></div>
        {searchUI}
        <div className="buttonUI"><a className="button is-link is-outlined"><i className="fa fa-road space" aria-hidden="true"></i>Mes trajets</a></div>
        <div className="buttonUI"><a className="button is-link is-outlined"><i className="fa fa-bell-o space" aria-hidden="true"></i>Mes notification</a></div>
      </div>
    )
  }
}
