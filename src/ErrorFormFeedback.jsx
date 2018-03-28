'use strict';
import React from 'react';
import PropTypes from 'prop-types';

const ErrorFormFeedback = ({errors}) => {		
	if(errors && errors instanceof Array && errors.length > 0) {
		return (
			<div className="form-control-feedback">
				<div style={{padding: "0px 2px"}}>
					{errors.join(',')}
				</div>
			</div>);
	} else if(errors) {
		return (
			<div className="form-control-feedback">
				<div style={{padding: "0px 2px"}}>
					{errors}
				</div>
			</div>
		);
	}
	return <span />
}

ErrorFormFeedback.propTypes = {
	errors: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.string
	])
}

export default ErrorFormFeedback