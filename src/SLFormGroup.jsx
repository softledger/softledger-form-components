'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import { Label, FormGroup, FormText } from 'reactstrap';
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

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
	label: PropTypes.string,
	helpText: PropTypes.string,
	input: PropTypes.object,
	hideLabel: PropTypes.bool,
	//true if this is a checkbox
	check: PropTypes.bool
}