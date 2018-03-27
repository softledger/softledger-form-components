import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

//add fontawesome icons for testing
import fontawesome from '@fortawesome/fontawesome';
import faRocket from '@fortawesome/fontawesome-free-solid/faRocket';
fontawesome.library.add(faRocket);

import { 
	ButtonBar, CardValue, ChipButton, ConfirmButton, DateFormat,
	SLLoadingIcon 
} from '../src';

//promise function
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

storiesOf('ButtonBar', module)
	.add('With Buttons', () => (
		<ButtonBar
			buttons={[
				<button 
					class="btn btn-primary"
				>Button 1</button>,
				<button 
					class="btn btn-warning"
				>Button 2</button>,
				<button 
					class="btn btn-danger"
				>Button 3</button>
			]}
		/>
	))

storiesOf('CardValue', module)
	.addDecorator(story => (
		<div class="col-sm-6">
			{story()}
		</div>
	))
	.add('With Header', () => 
		<CardValue
			Header="Test Header"
			Body="Body"
			big={false} 
		/>
	)
	.add('Without Header', () => 
		<CardValue
			Body={
				<ul>
					<li>This is</li>
					<li>A Body</li>
					<li>with jsx</li>
				</ul>
			}
		/>
	)
	.add("With Big", () => 
		<CardValue
			Header={<h4>Header with big</h4>}
			big={true}
			Body={
				<p>So much space in here!</p>
			}
		/>
	)

storiesOf('ChipButton', module)
	.add('With Icon', () => (
		<ChipButton 
			onClick={ action('button-click') }
			iconClass='rocket'
			text="Blast Off"
		/>
	));

storiesOf('ConfirmButton', module)
	.add('Minimum', () => (
		<ConfirmButton
			onConfirm={ () => sleep(1000) }
		/>
	))
	.add('All Fields', () => (
		<ConfirmButton
			onConfirm={ () => sleep(1000) }
			confirmBody={
				<div>
					<h4>Body can be text</h4>
					<p>Or JSX</p>
				</div>
			}
			confirmTitle={
				<h1>Title can be text or JSX</h1>
			}
			buttonClass="btn-success"
			buttonText="My Confirm Button"
		/>			
	))
	.add('Disabled', () => (
		<ConfirmButton
			onConfirm={ () => sleep(1000) }
			disabled={true}
		/>
	))

storiesOf('DateFormat', module)
	.add('Default Format', () => (
		<DateFormat date={new Date()} />
	))
	.add('Missing Date', () => (
		<DateFormat />
	))
	.add('Custom format', () => (
		<DateFormat date={new Date} format={'MM/DD/YY'}
	))

storiesOf('SLLoadingIcon', module)
	.add('Default', () => <SLLoadingIcon />)