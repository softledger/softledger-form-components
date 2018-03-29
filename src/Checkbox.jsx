'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import Switch from 'react-switch';

const Checkbox = ({onChange, value}) => (
	<Switch
    onChange={e => onChange(e)}
    checked={value}
    className="react-switch"
    id="normal-switch"
  />
);

Checkbox.propTypes = {
	onChange: PropTypes.func.isRequired,
	value: PropTypes.bool
}

export default Checkbox;