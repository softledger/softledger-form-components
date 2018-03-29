'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Popover, PopoverBody } from 'reactstrap';
import { DateRangePicker } from 'react-dates';

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
	id: PropTypes.string.isRequired,
	buttonText: PropTypes.string,
	startDate: PropTypes.any,
	endDate: PropTypes.any,
	onChange: PropTypes.func.isRequired
}

export default SLDateRange;