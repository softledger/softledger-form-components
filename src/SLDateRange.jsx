'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Popover, PopoverBody } from 'reactstrap';
import { DateRangePicker } from 'react-dates';

/**
 * Input which allows user to pick a range of dates
 * wrapper on react-dates
 */
class SLDateRange extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	toggle = () =>this.setState({ showDatePicker: !this.state.showDatePicker })

	render() {
		const { showDatePicker } = this.state;
		return (
			<div>
				<Button 
					style={{
						padding: ".25rem .75rem"
					}}
					id={this.props.id}
					onClick={this.toggle}
					disabled={this.props.disabled}
				>
					{this.props.buttonText || 'Filter'}
				</Button>
				<Popover 
					placement="top" 
					isOpen={showDatePicker}
					target={this.props.id}
					toggle={this.toggle}
				>
					<PopoverBody>
						<DateRangePicker
							small
							noBorder
							showClearDates
							startDate={this.props.startDate}
							startDateId="startDateId"
							endDateId="endDateId"
							isOutsideRange={() => false}
							endDate={this.props.endDate}
							onDatesChange={this.props.onChange}
							focusedInput={this.state.focusedInput}
							onFocusChange={focusedInput => this.setState({ focusedInput })}
						/>
					</PopoverBody>
				</Popover>
			</div>
		)
	}
}

SLDateRange.propTypes = {
	/**
	 * Unique ID required
	 */
	id: PropTypes.string.isRequired,
	/**
	 * Text for button
	 */
	buttonText: PropTypes.string,
	/**
	 * value to use as startDate
	 */
	startDate: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object
	]),
	/**
	 * value to use as end date
	 */
	endDate: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object
	]),
	/**
	 * callback when start or end date changes
	 */
	onChange: PropTypes.func.isRequired,
	/**
	 * true to disable toggling
	 */
	disabled: PropTypes.bool
}

SLDateRange.defaultProps = {
	buttonText: 'Filter',
	disabled: false
}

export default SLDateRange;