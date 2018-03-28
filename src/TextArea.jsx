'use strict';
import React from 'react';

const TextArea = ({onChange, className, value}) =>  (
		<textarea className={`form-control ${className}`}
			onChange={e => onChange(e.currentTarget.value)}
			value={value}
		/>
);

export default TextArea;