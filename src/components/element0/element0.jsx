import React from 'react';
import Trajet from '../trajet/trajet.jsx';
import './element0.css';

export default class Element0 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      detail:false
    }
  }

  componentDidMount() {
    console.log(this.props.trajets);
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

  showSomeText(el,st){
    if(el == ""){
      return st
    }else{
      return el
    }
  }

  showPlaceRestantes(){
    if(this.props.trajets.trajet.places_restantes == 0){
      return "Plein"
    }else{
      return this.props.trajets.trajet.places_restantes + "/" + this.props.trajets.trajet.places
    }
  }

  detailComponentAnimation(){

  }

  showDetailComponent(){
    if(this.state.detail){
      return   <div className="animated bounceInDown">
                      <hr></hr>
                      <div className="columns is-mobile">
                      <div className="column is-4">
                      <p className="placeText">
                       <i className="fa fa-circle-thin space debut" aria-hidden="true"></i>point de depart : {this.showSomeText(this.props.trajets.trajet.from.place, "contacter le conducteur")}
                       </p>

                       <p className="placeText">
                       <i className="fa fa-circle-thin space arrivee" aria-hidden="true"></i>point d'arrivée : {this.showSomeText(this.props.trajets.trajet.to.place, "contacter le conducteur")}
                       </p>
                       <p className="placeText">
                       <i className="fa fa-arrows-h space" aria-hidden="true"></i>durée du trajet : 3h : 30
                       </p>
                      </div>
                      <div className="column is-3">
                      <div className="content">
                        <p className="placeText">
                          <strong>Description</strong>
                          <br />
                         {this.showSomeText(this.props.trajets.trajet.description, "on doit ajouter une description")}
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
                        <p className="placeText4">
                        {this.showPlaceRestantes()}</p>
                        </div>
                        </div>

                        <div class="box">
                    <article class="media">
                      <div class="media-left">
                        <figure class="image is-64x64">
                          <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image"  />
                        </figure>
                      </div>
                      <div class="media-content">
                        <div className="content">
                          <p>
                            <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                            <br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                          </p>
                        </div>
                        <nav className="level is-mobile">
                          <div className="level-left">
                            <a className="level-item">
                              <span className="icon is-small"><i className="fa fa-heart"></i></span>
                            </a>
                          </div>
                        </nav>
                      </div>
                    </article>
                  </div>
                      </div>
    }else{
      return ""
    }
  }

  render() {
    let trajetDetail = this.showDetailComponent();

    return (<div className="margin animated bounceInDown">

      <div className="card">
      <a onClick={(e)=>{this.showDetail()}}>
      <div className="columns is-mobile elementContainer">
        <div className="column is-4">
          <div className="text center textCenter">
          <i className="fa fa-circle-thin space debut" aria-hidden="true"></i>{this.props.trajets.trajet.from.city}
          <i className="fa fa-long-arrow-right fa-lg space" aria-hidden="true"></i>
          <i className="fa fa-circle-thin space arrivee" aria-hidden="true"></i>{this.props.trajets.trajet.to.city}
          </div>
        </div>


        <div className="column is-3">
        <div className="vl center">
          <div className="dateText center">
          <i className="fa fa-calendar-o space" aria-hidden="true"></i> {this.props.trajets.trajet.date.jour} {this.props.trajets.trajet.date.mois}
          <p><i className="fa fa-clock-o space" aria-hidden="true"></i> {this.props.trajets.trajet.date.heure} </p>
          </div>
        </div>
        </div>

        <div className="column is-2">
        <div className="vl center">
          <div className="text center textCenter">
           <font size="5">{this.props.trajets.trajet.prix} DH </font>
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
        <div className="dateText center userText">
          <p>{this.props.trajets.user.name} </p>
          <p><i className="fa fa-male space" aria-hidden="true"></i>{this.props.trajets.user.gender}, {this.props.trajets.user.age}
          </p>
          <p><i className="fa fa-facebook-square space" aria-hidden="true"></i>{this.props.trajets.user.facebook_friends} amis
          </p>
          <p><i className="fa fa-star-o space" aria-hidden="true"></i>{this.props.trajets.user.avis}/5
          </p>
        </div>
        </div>

          </div>





      </a>
      {trajetDetail}

      </div>

    </div>)
  }
}
