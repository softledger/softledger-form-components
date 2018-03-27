'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import { Badge } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const ChipButton = ({text, onClick, iconClass, style}) => (
	<Badge pill color="secondary"
		style={style || {}}>
		<div style={{padding: "5px"}}
				onClick={onClick}>			
			{text}
			<FontAwesomeIcon
				icon={iconClass}
				style={{marginLeft: "5px"}}
			/>
		</div>
	</Badge>
);		

ChipButton.propTypes = {
	text: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object
	]).isRequired,
	onClick: PropTypes.func,
	iconClass: PropTypes.string,
	style: PropTypes.object
}

export default ChipButton;