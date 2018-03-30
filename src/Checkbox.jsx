'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import Switch from 'react-switch';

/**
 * Checkbox component using react-switch
 */
const Checkbox = ({onChange, value}) => (
	<Switch
    onChange={e => onChange(e)}
    checked={value}
    className="react-switch"
    id="normal-switch"
  />
);

Checkbox.propTypes = {
	/**
	 * callback when toggled
	 */
	onChange: PropTypes.func.isRequired,
	/**
	 * value of the component
	 */
	value: PropTypes.bool
}

export default Checkbox;