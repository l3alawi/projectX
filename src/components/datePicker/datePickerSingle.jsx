import "react-dates/initialize";
import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import "react-dates/lib/css/_datepicker.css";

var SelectedStartDate = moment();

export default class DatePickerSingle extends React.Component {

  constructor(props){
    super();
    this.state = {
      focused: null,
      date: SelectedStartDate
    };
    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
    moment.locale('fr');
  }

  onDatesChange({ date}) {

    this.setState({date });
  }

  onFocusChange(focusedInput) {
    this.setState({ focusedInput });
  }

  render(){
    const { focusedInput, startDate, endDate } = this.state;
    return(
      <div className="parent">
        <SingleDatePicker
          date={this.state.date} // momentPropTypes.momentObj or null
          onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
          focused={this.state.focused} // PropTypes.bool
          onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
          showDefaultInputIcon={true}
        />
      </div>
    )
  }
}
