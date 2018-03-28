'use strict';
import React from 'react';

const ZeroPad = ({value, pad}) => {

	const transform = (v, p) => {
    if(!v) return '--';
		if(v.length >= p) return v;
		let zeroes = '0'.repeat(p);
		return (zeroes + v).slice(-1 * p);
	}

  return <span>{transform(value, pad)}</span>
}

export default ZeroPad;