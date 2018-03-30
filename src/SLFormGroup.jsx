'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import { Label, FormGroup, FormText } from 'reactstrap';
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

/**
 * Wrapper for a form input which will display labels and align elements nicely in an SLForm
 */
export default class SLFormGroup extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	renderLabel = () => {
		if(this.props.hideLabel) return;
		if(this.props.helpText) {
			return (
				<Label>
					{this.props.label}
					<Tooltip 
						placement="top"
						overlay={this.props.helpText}
					>
						<FontAwesomeIcon icon="info-circle" id="tooltip" />
					</Tooltip>
				</Label>
			)
		} else {
			return <Label>{this.props.label}</Label>
		}
	}

	render() {
		const {
			check,
			input,
			label
		} = this.props;

		if(check) {
			return (
				<FormGroup check 
					className="form-group"
					style={{
						paddingTop: "2rem"
					}}>
					<Label check>
						{this.props.input}
						<span>{label}</span>
					</Label>
				</FormGroup>
			)
		}else {
			return (
				<FormGroup>
					{this.renderLabel()}
					{this.props.input}
				</FormGroup>
			);
		}
	}

}

SLFormGroup.propTypes = {
	/**
	 * Input Label Text
	 */
	label: PropTypes.string,
	/**
	 * Help text to display when hovering over help icon
	 * * useful for giving context to an input value
	 */
	helpText: PropTypes.string,
	/**
	 * Form Input JSX
	 */
	input: PropTypes.object.isRequired,
	/**
	 * Set true to hide the label component
	 */
	hideLabel: PropTypes.bool,
	/**
	 * Set to true if the input is a check or radio to display label correctly
	 */
	check: PropTypes.bool
}

SLFormGroup.defaultProps = {
	hideLabel: false,
	check: false
}