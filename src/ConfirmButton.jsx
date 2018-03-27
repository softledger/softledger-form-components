'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import {
	Modal, ModalHeader, ModalBody, ModalFooter, Button
} from 'reactstrap';
import {SLLoadingIcon} from './';

class ConfirmButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
			submitting: false
		}
	}

	toggle = () => this.setState({
		isOpen: !this.state.isOpen
	})

	onConfirm = e => {
		this.setState({
			submitting: true
		});
		return this.props.onConfirm()
			.then(() => this.setState({
				submitting: false,
				isOpen: false
			}));
	}

	renderButton = buttonClass => {
		if(this.state.submitting) {
			return <SLLoadingIcon />
		}
		return (
			<button 
				key="confirm"
				className={`btn ${buttonClass}`}
				style={{
					padding: "5px 8px",
					...this.props.style
				}}
				onClick={this.onConfirm}
			>
				Confirm
			</button>
		);
	}

	render() {
		const buttonClass = this.props.buttonClass ? this.props.buttonClass : 'btn-primary';
		return (
			<div>
				<button 
					key="initial"
					disabled={this.props.disabled}
					className={`btn ${buttonClass}`}
					style={{
						padding: "5px 8px",
						...this.props.style
					}}
					onClick={this.toggle}
				>
					{this.props.buttonText || "Submit"}
				</button>
				<Modal
					isOpen={this.state.isOpen}
					size="md"
					toggle={this.toggle}
				>
					<ModalHeader
					>
						{this.props.confirmTitle || "Are you sure?"}
					</ModalHeader>
					<ModalBody>
						{this.props.confirmBody || 'Please Confirm'}
					</ModalBody>
					<ModalFooter>
						{this.renderButton(buttonClass)}
	          <Button color="secondary" 
	          	onClick={this.toggle}
	          >
	          	Cancel
	          </Button>
					</ModalFooter>
				</Modal>
			</div>
		);

	}
}

ConfirmButton.propTypes = {
	onConfirm: PropTypes.func.isRequired,
	confirmBody: PropTypes.any,
	confirmTitle: PropTypes.any,
	//optional
	buttonClass: PropTypes.string,
	disabled: PropTypes.bool,
	buttonText: PropTypes.string
}

export default ConfirmButton;