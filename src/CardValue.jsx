'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardBody } from 'reactstrap';
import classNames from 'classnames';
import './CardValue.scss';

const CardValue = ({big, Header, Body, style}) =>  {
	const renderHeader = Header => {
		if(Header) {
			return (
				<CardHeader>
					{Header}
				</CardHeader>
			);
		}
	}
	return (
		<Card 
			className={classNames({'card-tight': !big})}
			style={style}
		>
			{renderHeader(Header)}
			<CardBody>
				{Body}
			</CardBody>
		</Card>
	);
}

CardValue.propTypes = {
	Header: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object
	]),
	Body: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object
	]),
	big: PropTypes.bool,
	style: PropTypes.object
}

export default CardValue;