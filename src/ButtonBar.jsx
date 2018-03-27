'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import {Row} from 'reactstrap';

const ButtonBar = props => (
	<Row style={{
		padding: "10px 20px",
		...props.style
	}}>
		{props.buttons.map((button, idx) => (
			<div key={idx} style={{paddingRight: "10px"}}>
				{button}
			</div>
		))}
	</Row>
)

ButtonBar.propTypes = {
	buttons: PropTypes.array.isRequired,
	style: PropTypes.object
}

export default ButtonBar;