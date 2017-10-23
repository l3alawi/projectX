
import React from 'react';
import DatePickerPeriode from '../datePicker/datePickerPeriode.jsx';
import DatePickerSingle from '../datePicker/datePickerSingle.jsx';




export default class Search extends React.Component{

  constructor(props){
    super();
    this.state = {
      dateChoix: true
    }
  }


  filtreParJour(){
      this.setState({
        dateChoix: true
      })
    }

  filtreParPeriode(){
      this.setState({
        dateChoix: false
      })
    }

  render(){
    var datePicker
    if(this.state.dateChoix){
      datePicker = <DatePickerSingle />
    }else{
      datePicker = <DatePickerPeriode />
    }

    return(
      <div>
        <a class="delete"></a>
      <div className="columns is-mobile">
        <div className="column is-5 is-offset-1">
          <input className="input is-info" type="text" placeholder="depart" />
        </div>
          <i className="fa fa-long-arrow-right arrow" aria-hidden="destination"></i>
        <div className="column is-5">
          <input className="input is-info" type="text" placeholder="To" />
        </div>
      </div>
      <div className="columns is-mobile is-gapless">
        <div className="column">
          <div className="select">
            <select>
              <option onClick={(e)=>this.filtreParJour()}>Filtrer par jour</option>
              <option onClick={(e)=>this.filtreParPeriode()}>Filtrer par periode</option>
            </select>
          </div>
        </div>
        <div className="column is-8">
          {datePicker}
        </div>
      </div>
      </div>
    )
  }
}
