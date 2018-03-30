'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { formatDate, parseDate } from 'react-day-picker/moment';
import moment from 'moment';

/**
 * Date Input component
 */
const SLDate = props => {
	//set system timezone here
	const onChange = d => onChange(moment(d).utcOffset(props.imezone))

	const openLeft = ({classNames, selectedDay, children}) => (
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
	/**
	 * Current date to display
	 * should be a string, Date(), or moment()
	 */
	value: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object
	]),
	/**
	 * callback when date is selected
	 */
	onChange: PropTypes.func.isRequired,
	/**
	 * offset to display calendar in pixels
	 */
	openLeft: PropTypes.number,
	/**
	 * Additional props to add to the input
	 */
	inputProps: PropTypes.object,
	/**
	 * Timezone to use for for display
	 */
	timezone: PropTypes.string
}

SLDate.defaultProps = {
	openLeft: 0,
	timezone: 'Browsers timezone'
}

export default SLDate;