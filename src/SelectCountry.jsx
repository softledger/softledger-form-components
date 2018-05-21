'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import CountryList from './util/countryList.js';
import Select from 'react-select';

/**
 * Select a country code in a dropdown
 */
class SelectCountry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    }
  }

  changeValue = value => {
    this.props.onChange(value._id)
    this.setState({
      value
    })
  }

  render() {
    return (
      <Select 
        value={this.state.value}
        onChange={this.changeValue}
        options={CountryList}
        labelKey="name"
        valueKey="_id"
        disabled={this.props.disabled}
      />
    )
  }
}

SelectCountry.propTypes = {
  /**
   * callback when a country is selected
   */
  onChange: PropTypes.func.isRequired,
  /**
   * current selected country
   */
  value: PropTypes.object,
  /**
   * true to disable toggling
   */
  disabled: PropTypes.bool
}

SelectCountry.defaultProps = {
  disabled: false
}

export default SelectCountry;