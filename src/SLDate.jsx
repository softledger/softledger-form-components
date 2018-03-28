'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { formatDate, parseDate } from 'react-day-picker/moment';
import moment from 'moment';

const SLDate = props => {
	//set system timezone here
	const onChange = d => onChange(moment(d).utcOffset(props.imezone))

	openLeft = ({classNames, selectedDay, children}) => (
		<div 
      className={classNames.overlayWrapper} 
      style={{ marginLeft: props.openLeft }}>
      <div className={classNames.overlay}> 
        {children}
      </div>
    </div>
	);

	return (
		<DayPickerInput
			value={formatDate(props.value)}
			formatDate={formatDate}
			parseDate={parseDate}
			onDayChange={props.onChange}
			overlayComponent={props.openLeft && openLeft}
			dayPickerProps={{
				todayButton: "Today",
				showOutsideDays: true
			}}
			inputProps={{
				...props.inputProps,
				className: "form-control"
			}} />
	);
}

SLDate.propTypes = {
	//date or string or moment
	value: PropTypes.any,
	onChange: PropTypes.func.isRequired,
	openLeft: PropTypes.number,
	inputProps: PropTypes.object,
	timezone: PropTypes.string
}

export default SLDate;