
import React from 'react';
import DatePickerPeriode from '../datePicker/datePickerPeriode.jsx';
import DatePickerSingle from '../datePicker/datePickerSingle.jsx';




export default class Search extends React.Component{

  constructor(props){
    super();
      this.depart = "";
      this.arrivee = "";
  }


    hide(){
      this.props.hide();
    }

    handleChange(e){

      switch(e.target.name){
        case "depart" : this.depart = e.target.value; break;
        case "arrivee" : this.arrivee = e.target.value; break;
      }
      console.log(this.depart);
      this.props.search(this.depart,this.arrivee);
    }

  render(){

    return(
      <div className="margin animated bounceInDown" style={{zIndex:5}} >

      <div className="card">
      <a class="delete" onClick={(e)=>this.hide()}></a>
      <div className="columns is-mobile elementContainer">
        <div className="column is-4">
          <div className="text center textCenter">
          <div className="control has-icons-left has-icons-right"><input className="input" type="text" name="depart" placeholder="ville de depart" onChange={(e)=>this.handleChange(e)} />
          <span className="icon is-small is-left">
          <i className="fa fa-circle-thin space debut" aria-hidden="true"></i>
        </span>
          </div>
          <p><i className="fa fa-arrow-down fa-lg space" aria-hidden="true"></i></p>
          <div className="control has-icons-left has-icons-right"><input className="input" type="text" name="arrivee" placeholder="ville d'arrivée" onChange={(e)=>this.handleChange(e)}  />
          <span className="icon is-small is-left">
          <i className="fa fa-circle-thin space arrivee" aria-hidden="true"></i>
        </span>
          </div>
          </div>
        </div>


        <div className="column is-6">
        <div className="vl">
          <div className="field">
          <DatePickerPeriode />
          </div>
          <div className="control has-icons-left has-icons-right field time"><input className="input" type="time" name="name" placeholder="heure de depart"  />
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

          </div>

    </div>
    </div>
    )
  }
}
