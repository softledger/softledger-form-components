'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

export default class LoadingButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false
		} 
	}

	handleClick = e => {
		if(this.props.notPromise) {
			this.props.onClick();
		} else {
			this.setState({loading:true});
			this.props.onClick()
				.then(() => this.setState({
					loading: false
				}));
		}
	}

	renderButtonText = () => {
		//iconClass takes preference
		if(this.props.iconClass) {
			return <FontAwesomeIcon icon={this.props.iconClass} />
		} else {
			return this.props.buttonText;
		}
	}

	renderButton = buttonClass => (
		<button 
			className={`btn ${buttonClass}`}
			style={{
				padding: "5px 8px",
				...this.props.style
			}}
			onClick={this.handleClick}
			disabled={this.props.disabled}
		>
			{this.renderButtonText()}
		</button>
	)

	renderButtonWithToolTip = buttonClass => (
		<Tooltip
			placement={this.props.toolTipPlacement || 'top'}
			overlay={this.props.toolTip}
		>
			{this.renderButton(buttonClass)}
		</Tooltip>
	)

	render() {
		const buttonClass = this.props.buttonClass ? this.props.buttonClass : 'btn-primary';

		return this.state.loading ? (
				<img style={{
					width: "40px"
					}} 
					src="https://s3.amazonaws.com/sl-ui-assets/images/spinner.gif" 
				/>
			) : (
			<div>
				{
					this.props.toolTip ?
						this.renderButtonWithToolTip(buttonClass)
					: this.renderButton(buttonClass)
				}
			</div>
		)
	}
}

LoadingButton.propTypes = {
	onClick: PropTypes.func.isRequired,
	iconClass: PropTypes.string,
	buttonClass: PropTypes.string,
	disabled: PropTypes.bool,
	buttonText: PropTypes.string,
	toolTip: PropTypes.string,
	toolTipPlacement: PropTypes.string,
	notPromise: PropTypes.bool
}