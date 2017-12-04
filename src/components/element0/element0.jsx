import React from 'react';
import Trajet from '../trajet/trajet.jsx';
import './element0.css';

export default class Element0 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      detail:true
    }
  }

  componentDidMount() {
    console.log(this.props.trajet);
  }

  showDetail(){
    if(this.state.detail){
      this.setState({
      detail: false
    })
    }else{
      this.setState({
      detail: true
    })
    }
    
  }

  render() {
    let trajetDetail; 

    if(this.state.detail){
      trajetDetail = <div>
                      <hr></hr>
                      <div className="columns is-mobile">
                      <div className="column is-4">
                      <p className="placeText">
                       <i className="fa fa-circle-thin space debut" aria-hidden="true"></i>point de depart : contacter conducteur
                       </p>
                       
                       <p className="placeText">
                       <i className="fa fa-circle-thin space arrivee" aria-hidden="true"></i>point d'arrivée : contacter conducteur
                       </p>
                       <p className="placeText">
                       <i className="fa fa-arrows-h space" aria-hidden="true"></i>durée du trajet : 3h : 30
                       </p>
                      </div>
                      <div className="column is-3">
                      <div className="content">
                        <p>
                          <strong>Description</strong>
                          <br />
                         bla bla bla
                          <br />
                        </p>
                      </div>
                      </div>
                      <div className="column is-1">
                      <div>
                      <figure className="image is-32x32 centerImage">
                          <img className="circular" src="https://bulma.io/images/placeholders/32x32.png" />
                        </figure>
                      </div>
                        <p className="text photoName centerName nameText">
                        Alaeddine Beljebbar</p>
                        </div>
                        <div className="column is-1">
                      <figure className="image is-32x32 centerImage">
                          <img className="circular" src="https://bulma.io/images/placeholders/32x32.png" />
                        </figure>
                        <p className="text photoName centerName nameText">
                        Alaeddine Beljebbar</p>
                        </div>
                        <div className="column is-1">
                      <figure className="image is-32x32 centerImage">
                          <img className="circular" src="https://bulma.io/images/placeholders/32x32.png" />
                        </figure>
                        <p className="text photoName centerName nameText">
                        Alaeddine Beljebbar</p>
                        </div>
                        <div className="column is-1">
                      <figure className="image is-32x32 centerImage">
                          <img className="circular" src="https://bulma.io/images/placeholders/32x32.png" />
                        </figure>
                        <p className="text photoName centerName nameText">
                        Alaeddine Beljebbar</p>
                        </div>
                        <div className="column is-1">
                        <p>
                        Plein</p>
                        </div>
                        </div>
                      </div>
    }else{
      trajetDetail = ""
    }




    return (<div>
      
      <div className="card">
      <a onClick={(e)=>{this.showDetail()}}>
      <div className="columns is-mobile elementContainer">
        <div className="column is-4">
          <div className="text center textCenter">
          <i className="fa fa-circle-thin space debut" aria-hidden="true"></i>Rabat
          <i className="fa fa-long-arrow-right fa-lg space" aria-hidden="true"></i>
          <i className="fa fa-circle-thin space arrivee" aria-hidden="true"></i>Marrakech
          </div>
        </div>
        

        <div className="column is-3">
        <div className="vl center">
          <div className="text center">
          <i className="fa fa-calendar-o space" aria-hidden="true"></i> Mardi 28 november 2017
          <p><i className="fa fa-clock-o space" aria-hidden="true"></i> 17:00</p>
          </div>
        </div>
        </div>

        <div className="column is-2">
        <div className="vl center">
          <div className="text center textCenter">
           <font size="5">70 DH</font>
          </div>
        </div>
        </div>

        <div className="column is-1">
        <div className="vl center">
        <figure className="image is-32x32 centerImage0">
            <img className="circular" src="https://bulma.io/images/placeholders/32x32.png" />
          </figure>
        </div>


        </div>
        <div className="column is-2">
        <p className="text center userText">
          <div>Alaeddine Beljebbar</div>
          <div><i className="fa fa-male space" aria-hidden="true"></i>homme, 24
          </div>
          <div><i className="fa fa-facebook-square space" aria-hidden="true"></i>333 amis
          </div>
          <div><i className="fa fa-star-o space" aria-hidden="true"></i>4/5
          </div>
          </p>
        </div>
          
          </div>

      


      
      </a>
      {trajetDetail}
      </div>
      
    </div>)
  }
}
