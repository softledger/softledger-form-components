'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { formatDate, parseDate } from 'react-day-picker/moment';
import moment from 'moment-timezone';
import ErrorFormFeedback from './ErrorFormFeedback';

/**
 * Date Picker Overlay
 */
const OverlayLeft = ({ classNames, selectedDay, children, ...props}, openLeft) => (
  <div
    className={classNames.overlayWrapper}
    style={{ marginLeft:  openLeft ? "-150px" : "0px"}}
    {...props}
  >
    <div className={classNames.overlay}>
      {children}
    </div>
  </div>
);

OverlayLeft.propTypes = {
  classNames: PropTypes.object.isRequired,
  selectedDay: PropTypes.instanceOf(Date),
  children: PropTypes.node.isRequired,
};

/**
 * Date Input component
 */
class SLDate extends React.Component {
	//convert value to passed timezone from browser
	onChange = d => {
		//stops the date from disapearing on backspace
		if(!d) d = this.props.value;
		return this.props.onChange(moment(d, this.props.timezone));
	}

	render() {
		return (
			<div>
				<DayPickerInput
					value={formatDate(this.props.value, this.props.format)}
					formatDate={formatDate}
					format={this.props.format}
					parseDate={parseDate}
					onDayChange={this.onChange}
					overlayComponent={props => OverlayLeft(props, this.props.openLeft)}
					keepFocus={!this.props.openLeft}
					dayPickerProps={{
						todayButton: "Today",
						showOutsideDays: true
					}}
					inputProps={{
						...this.props.inputProps,
						className: "form-control",
						disabled: this.props.disabled
					}}
				/>
				<ErrorFormFeedback errors={this.props.errorText} />
			</div>
		);
	}
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
	openLeft: PropTypes.bool,
	/**
	 * Additional props to add to the input
	 */
	inputProps: PropTypes.object,
	/**
	 * Timezone to use for for display
	 */
	timezone: PropTypes.string,
	/**
	 * true to disable toggling
	 */
	disabled: PropTypes.bool,
	/**
	 * How to Format the Presented Date
	 */
	format: PropTypes.string
}

SLDate.defaultProps = {
	openLeft: false,
	disabled: false,
	format: 'MM/DD/YYYY'
}

export default SLDate;