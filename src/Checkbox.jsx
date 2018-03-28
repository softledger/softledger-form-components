'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import Switch from 'react-switch';

const Checkbox = ({onChange, value}) => {

	const changeValue = e => this.props.onChange(e)

	return (
		<Switch
      onChange={changeValue}
      checked={value}
      className="react-switch"
      id="normal-switch"
    />
	);
}

Checkbox.propTypes = {
	onChange: PropTypes.func.isRequired,
	value: PropTypes.bool
}

export default Checkbox;