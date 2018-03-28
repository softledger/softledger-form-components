'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';


export default class DropDownMenu extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle = () => this.setState({
  	dropdownOpen: !this.state.dropdownOpen
  })

  renderToggle = () =>  {
  	if(this.props.toggleTag) {
  		return this.props.toggleTag;
  	} else {
  		return <FontAwesomeIcon icon="bars" />
  	}
  }


	render() {
		return (
			<Dropdown isOpen={this.state.dropdownOpen} 
				toggle={this.toggle}
				className={this.props.class}>
				<DropdownToggle>
					{this.renderToggle()}
				</DropdownToggle>
				<DropdownMenu right={!this.props.openRight}>
					{this.props.children}
				</DropdownMenu>
			</Dropdown>
		);
	}
}

DropDownMenu.propTypes = {
	toggleTag: PropTypes.object,
	className: PropTypes.string,
	openRight: PropTypes.bool
}