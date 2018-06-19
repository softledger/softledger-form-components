'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import DateTime from 'react-datetime';
import ErrorFormFeedback from'./ErrorFormFeedback';


class SLDateTime extends React.Component {


	render() {
		return (
			<div>
				<DateTime 
					value={this.props.value}
					dateFormat={this.props.dateFormat}
					onChange={this.props.onChange}
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

SLDateTime.propTypes = {
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
	dateFormat: PropTypes.string
}

SLDateTime.defaultProps = {
	openLeft: false,
	disabled: false,
	dateFormat: 'MM/DD/YYYY'
}

export default SLDateTime;