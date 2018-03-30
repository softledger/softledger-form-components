'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import {
	Modal, ModalHeader, ModalBody, ModalFooter, Button, Container, Row, Col
} from 'reactstrap'
import { SLLoadingIcon } from '@softledger/components';

/**
 * Form Component to display as a modal or not
 */
export default class SLForm extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			canSubmit: false,
			modal: false, 
			submitting: false
		}
	}

	toggle = () => {
		if(!this.state.modal && this.props.onToggle) this.props.onToggle();
		this.setState({
			modal: !this.state.modal
		});
	}

	submit = model => {
		this.setState({submitting: true});
		return this.props.onSubmit(model)
			.then(() => this.setState({
				submitting: false,
				modal: false
			}));
	}

	renderButton = () => {
		if(this.props.Button) {
			return this.props.Button(this.toggle);
		}
		return <Button color="primary"
				onClick={this.toggle}>
				{this.props.header}
			</Button>
	}

	renderSubmitButton = () => {
		if(this.props.submitButton) {
			return this.props.submitButton(this.submit, this.props.formInValid);
		}
		return (
			<Button 
				color="primary"
  			style={{marginRight: "20px"}} 
  			onClick={this.submit}
      	disabled={this.props.formInValid}
      	>Submit</Button>
		);
	}

	render() {
		if(this.props.notModal) {
			return (<div>
	        {this.props.fields}
	        <Container>
	        	<Row>
	        		<Col>
			          { this.state.submitting ? 
			          		<div style={{float:"right"}}><SLLoadingIcon /></div>
			          	: (<div style={{float:"right"}}>
			          		{this.renderSubmitButton()}
					          {
					          	this.props.onToggle && 
						          	<Button color="secondary" 
						          		onClick={this.toggle}
						          		>Cancel</Button>
					          }
					         </div>)
					      }
					    </Col>
					  </Row>
		    </Container>
			</div>)
		} else {
			return (<div>
				{this.renderButton()}
				<Modal isOpen={this.state.modal} 
					toggle={this.toggle}
					size={this.props.size}>
	        <ModalHeader toggle={this.toggle}>
	        	{this.props.header}
	        </ModalHeader>
	        <ModalBody>
	        	{this.state.modal && this.props.fields}
	        </ModalBody>
	        <ModalFooter>
	          { this.state.submitting ? 
	          		<SLLoadingIcon />
	          	: <Button color="primary" 
	          			onClick={this.submit}
			          	disabled={this.props.formInValid}
			          	>Submit</Button>
			      }
	          <Button color="secondary" 
	          	onClick={this.toggle}
	          	>Cancel</Button>
	        </ModalFooter>
	      </Modal>
			</div>)
		}
	}

}

SLForm.propTypes = {
	/**
	 * Header Text for Modal
	 * *required if notModal={false}
	 */
	header: PropTypes.string,
	/**
	 * Callback when form is submitted, expected to return Promise
	 */
	onSubmit: PropTypes.func.isRequired,
	/**
	 * Form fields to display, should be JSX
	 * * recommended to use SLFormGroup wrapped components for best presentation
	 */
	fields: PropTypes.object.isRequired,
	/**
	 * Function that returns a button
	 * * this is passed a cb for the buttons onclick method
	 *   toggle => <button onClick={toggle}>Btn</button>
	 */
	Button: PropTypes.func,
	/**
	 * size of the modal
	 */
	size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
	/**
	 * Set to true if the form is not valid
	 * this will disable the submit button
	 */
	formInValid: PropTypes.bool,
	/**
	 * Set true if the form should not be a modal
	 */
	notModal: PropTypes.bool,
	/**
	 * If notModal={true} a custom submit button may be used
	 * * this is passed a callback for submit and formInvalid
	 * (submit, invalid) => <button disabled={invalid} onClick={submit}>submit</button>
	 */
	submitButton: PropTypes.func,
	/**
	 * callback for when the modal is toggled open
	 */
	onToggle: PropTypes.func
}