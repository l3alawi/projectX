import React from 'react';
import DatePickerSingle from '../datePicker/datePickerSingle.jsx';



export default class Create extends React.Component{

	constructor(props){
		super(props);
	}

	hide(){
		this.props.hide();
	}

	render(){

		return(

			<div className="margin animated bounceInDown">

      <div className="card">
      <a class="delete" onClick={(e)=>this.hide()}></a>
      <div className="columns is-mobile elementContainer">
        <div className="column is-4">
          <div className="text center textCenter">
          <div className="control has-icons-left has-icons-right"><input className="input" type="text" name="name" placeholder="ville de depart" />
          <span className="icon is-small is-left">
		      <i className="fa fa-circle-thin space debut" aria-hidden="true"></i>
		    </span>
          </div>
          <p><i className="fa fa-arrow-down fa-lg space" aria-hidden="true"></i></p>
          <div className="control has-icons-left has-icons-right"><input className="input" type="text" name="name" placeholder="ville d'arrivée'"  />
          <span className="icon is-small is-left">
		      <i className="fa fa-circle-thin space arrivee" aria-hidden="true"></i>
		    </span>
          </div>
          </div>
        </div>


        <div className="column is-3">
        <div className="vl">
          <div className="field">
          <DatePickerSingle />
          </div>
          <div className="control has-icons-left has-icons-right field"><input className="input" type="time" name="name" placeholder="heure de depart"  />
          <span className="icon is-small is-left">
		      <i className="fa fa-clock-o space" aria-hidden="true"></i>
		    </span>
          </div>

        </div>
        </div>

        <div className="column is-2">
        <div className="vl center">
          <div className="text center textCenter">
           <font size="5"><input className="input" type="text" name="name" placeholder="prix" /></font>
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
          <p>l3alawi </p>
          <p><i className="fa fa-male space" aria-hidden="true"></i>homme, 24
          </p>
          <p><i className="fa fa-facebook-square space" aria-hidden="true"></i>365 amis
          </p>
          <p><i className="fa fa-star-o space" aria-hidden="true"></i>4/5
          </p>
        </div>
        </div>

          </div>

           <hr></hr>
                      <div className="columns is-mobile">
                      <div className="column is-4">
                      <p className="placeText field">
                      <div className="control has-icons-left has-icons-right"><input className="input" type="text" name="name" placeholder="point de depart" />
          <span className="icon is-small is-left">
		      <i className="fa fa-circle-thin space debut" aria-hidden="true"></i>
		    </span>
          </div>
                       
                       </p>

                       <p className="placeText field">
                       <div className="control has-icons-left has-icons-right"><input className="input" type="text" name="name" placeholder="point d'arrivée" />
          <span className="icon is-small is-left">
		      <i className="fa fa-circle-thin space arrivee" aria-hidden="true"></i>
		    </span>
          </div>
                       
                       </p>
                       <p className="placeText">
                       <i className="fa fa-arrows-h space" aria-hidden="true"></i>durée du trajet : 3h : 30
                       </p>
                      </div>
                      <div className="column is-3">
                      <div className="content">
                        <p className="placeText">
                          <strong>Description :</strong>
                          <br />
                         <textarea className="textarea" placeholder="e.g. Hello world"></textarea>
                          <br />
                        </p>
                      </div>
                      </div>
                      <div className="column is-5">
                      <div className="field">
							  <div className="control">
							  <label className="text">Nombre de places :</label>
							    <div className="select is-info">
							      <select>
							        <option>4</option>
							        <option>3</option>
							        <option>2</option>
							        <option>1</option>
							      </select>
							    </div>
							  </div>
							</div>
							<div className="field">
							<a class="button is-info is-outlined">Outlined</a>
							</div>
                        </div>
                        </div>

      </div>

    </div>

			)
	}


} 