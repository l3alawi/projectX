import "react-dates/initialize";
import React from 'react';
import moment from 'moment';
import {DateRangePicker} from 'react-dates';
import "react-dates/lib/css/_datepicker.css";

var SelectedStartDate = moment();
var SelectedEndDate = moment().add(5, 'day');

export default class DatePickerSingle extends React.Component {

  constructor(props){
    super();
    this.state = {
      focusedInput: null,
      startDate: SelectedStartDate,
      endDate:SelectedEndDate
    };
    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
    moment.locale('fr');
  }

  onDatesChange({ startDate, endDate }) {

    this.setState({ startDate, endDate });
    console.log(startDate);
  }

  onFocusChange(focusedInput) {
    this.setState({ focusedInput });
  }

  render(){
    const { focusedInput, startDate, endDate } = this.state;
    return(
      <div className="parent">
        <DateRangePicker
            {...this.props}
            onDatesChange={this.onDatesChange}
            onFocusChange={this.onFocusChange}
            focusedInput={focusedInput}
            startDate={startDate}
            endDate={endDate}
            startDateId="datepicker_start_home"
            endDateId="datepicker_end_home"
            startDatePlaceholderText="Check In"
            endDatePlaceholderText="Check Out"
            className="childCenter"
            />
      </div>
    )
  }
}
