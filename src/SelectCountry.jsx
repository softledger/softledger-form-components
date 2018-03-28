'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import CountryList from './util/countryList.js';
import Select from 'react-select';

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
      />
    )
  }
}

SelectCountry.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.object
}

export default SelectCountry;