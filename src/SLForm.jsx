'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import {
	Modal, ModalHeader, ModalBody, ModalFooter, Button, Container, Row, Col
} from 'reactstrap'
import { SLLoadingIcon } from '@softledger/components';


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
	//only required if notModal is false
	header: PropTypes.string,
	onSubmit: PropTypes.func.isRequired,
	fields: PropTypes.object.isRequired,
	Button: PropTypes.func,
	size: PropTypes.string,
	//the form is valid
	formInValid: PropTypes.bool,
	notModal: PropTypes.bool,
	submitButton: PropTypes.func
}

