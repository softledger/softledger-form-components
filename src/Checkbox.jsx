'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import Switch from 'react-switch';

/**
 * Checkbox component using react-switch
 */
const Checkbox = ({onChange, value, disabled}) => (
	<Switch
    onChange={e => onChange(e)}
    checked={value}
    className="react-switch"
    id="normal-switch"
    disabled={disabled}
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
	value: PropTypes.bool,
	/**
	 * true to disable toggling
	 */
	disabled: PropTypes.bool
}

Checkbox.defaultProps = {
	disabled: false
}

export default Checkbox;