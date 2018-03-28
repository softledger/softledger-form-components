'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import { DropdownItem } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const BoolDropDownMenuItem = ({text, value, onToggle}) => (
	<DropdownItem onClick={() => {
		console.log("value", value);
		return onToggle(text)
	}}>
		<FontAwesomeIcon icon={value ? "times" : "plus"} />
    <span style={{paddingLeft:"5px",paddingRight:"5px"}}>&#124;</span>
    {text}
  </DropdownItem>
)

BoolDropDownMenuItem.propTypes = {
	value: PropTypes.bool,
	text: PropTypes.string,
	onToggle: PropTypes.func
};

export default BoolDropDownMenuItem;