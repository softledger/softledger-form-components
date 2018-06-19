import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withState } from '@dump247/storybook-state';

import 'bootstrap/scss/bootstrap.scss';

//Story components
import { 
	Checkbox, FileUploadList, Input, SelectCountry, SimpleSelect, SLDate, SLDateRange, SLForm, SLFormGroup, TextArea, SLDateTime
} from '../src';

//promise function
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

storiesOf('Checkbox', module)
	.add('Default', withState({v:false}, store => (
		<div>
			<Checkbox
				onChange={v => store.set({v})}
				value={store.state.v}
			/>
			<p>{`Value: ${store.state.v}`}</p>
		</div>
	)))
	.add('Disabled', withState({v:false}, store => (
		<div>
			<Checkbox
				onChange={v => store.set({v})}
				value={store.state.v}
				disabled
			/>
			<p>{`Value: ${store.state.v}`}</p>
		</div>
	)))

storiesOf('FileUploadList', module)
	.add('Default', withState({files: []}, store => (
		<FileUploadList
			dropText="Drop Your Files Here"
			files={store.state.files}
			onDrop={files => {
				let newFiles = [...files];
				store.set({
					files: [...store.state.files, ...newFiles.map(file => ({
						file,
						progress: 100
					}))]
				})
			}}
			onRemove={idx => {
				let tmp = [...store.state.files];
				tmp.splice(idx, 1);
				return Promise.resolve(store.set({files: tmp}));
			}}
		/>
	)));

storiesOf('Input', module)
	.add('Default', withState({v:''}, store => (
		<div>
			<Input
				onChange={v => store.set({v})}
				value={store.state.v}
			/>
			<p>{`Value: ${store.state.v}`}</p>
		</div>
	)))
	.add('Disabled', withState({v:'Can\'t Change'}, store => (
		<div>
			<Input
				onChange={v => store.set({v})}
				value={store.state.v}
				disabled
			/>
			<p>{`Value: ${store.state.v}`}</p>
		</div>
	)))
	.add('With Number Type', withState({v:0}, store => (
		<div>
			<Input
				type="number"
				onChange={v => store.set({v})}
				value={store.state.v}
			/>
			<p>{`Value: ${store.state.v}`}</p>
		</div>
	)))
	.add('With Error Text', withState({v:0}, store => (
		<div>
			<Input
				onChange={v => store.set({v})}
				value={store.state.v}
				errorText="Always an Error"
			/>
			<p>{`Value: ${store.state.v}`}</p>
		</div>
	)))

storiesOf('SelectCountry', module)
	.add('Default', withState({v:null}, store => (
		<div>
			<SelectCountry
				onChange={v => store.set({v})}
				value={store.state.v}
			/>
			<p>{`Value: ${store.state.v}`}</p>
		</div>
	)))
	.add('Disabled', withState({v:null}, store => (
		<div>
			<SelectCountry
				onChange={v => store.set({v})}
				value={store.state.v}
				disabled
			/>
			<p>{`Value: ${store.state.v}`}</p>
		</div>
	)))

storiesOf('SimpleSelect', module)
	.add('Default', withState({v:null}, store => (
		<div>
			<SimpleSelect
				onChange={v => store.set({v})}
				valueField="value"
				labelField="label"
				options={[
					{value: "1", label: "one"},
					{value: "2", label: "two"},
					{value: "3", label: "three"},
					{value: "4", label: "four"},
					{value: "5", label: "five"},
				]}
			/>
			<p>{`Value: ${JSON.stringify(store.state.v)}`}</p>
		</div>
	)))
	.add('Disabled', withState({v:null}, store => (
		<div>
			<SimpleSelect
				onChange={v => store.set({v})}
				valueField="value"
				labelField="label"
				options={[
					{value: "1", label: "one"},
					{value: "2", label: "two"},
					{value: "3", label: "three"},
					{value: "4", label: "four"},
					{value: "5", label: "five"},
				]}
				disabled
			/>
			<p>{`Value: ${JSON.stringify(store.state.v)}`}</p>
		</div>
	)))

storiesOf('SLDate', module)
	.add('Default', withState({v: new Date()}, store => (
		<div>
			<SLDate
				onChange={v => store.set({v})}
				value={store.state.v}
			/>
			<p>{`Value: ${JSON.stringify(store.state.v)}`}</p>
		</div>
	)))
	.add('Disabled', withState({v: new Date()}, store => (
		<div>
			<SLDate
				onChange={v => store.set({v})}
				value={store.state.v}
				disabled
			/>
			<p>{`Value: ${JSON.stringify(store.state.v)}`}</p>
		</div>
	)))
	.add('Format', withState({v: new Date()}, store => (
		<div>
			<SLDate
				onChange={v => store.set({v})}
				value={store.state.v}
				format="YYYY-MM-DD"
			/>
			<p>{`Value: ${JSON.stringify(store.state.v)}`}</p>
		</div>
	)))
	.add('Start Empty', withState({v: null}, store => (
		<div>
			<SLDate
				onChange={v => store.set({v})}
				value={store.state.v}
			/>
			<p>{`Value: ${JSON.stringify(store.state.v)}`}</p>
		</div>
	)))
	.add('Open Left', withState({v: new Date()}, store => (
		<div style={{paddingLeft: "300px"}}>
			<SLDate
				onChange={v => store.set({v})}
				value={store.state.v}
				openLeft={true}
			/>
			<p>{`Value: ${JSON.stringify(store.state.v)}`}</p>
		</div>
	)))

storiesOf('SLDateTime', module)
	.add('Default', withState({v: new Date()}, store => (
		<div>
			<SLDateTime
				onChange={v => store.set({v})}
				value={store.state.v}
			/>
			<p>{`Value: ${JSON.stringify(store.state.v)}`}</p>
		</div>
	)))
	.add('Disabled', withState({v: new Date()}, store => (
		<div>
			<SLDateTime
				onChange={v => store.set({v})}
				value={store.state.v}
				disabled
			/>
			<p>{`Value: ${JSON.stringify(store.state.v)}`}</p>
		</div>
	)))
	.add('Format', withState({v: new Date()}, store => (
		<div>
			<SLDateTime
				onChange={v => store.set({v})}
				value={store.state.v}
				dateFormat="YYYY-MM-DD"
			/>
			<p>{`Value: ${JSON.stringify(store.state.v)}`}</p>
		</div>
	)))
	.add('Start Empty', withState({v: null}, store => (
		<div>
			<SLDateTime
				onChange={v => store.set({v})}
				value={store.state.v}
			/>
			<p>{`Value: ${JSON.stringify(store.state.v)}`}</p>
		</div>
	)))

storiesOf('SLDateRange', module)
	.add('Default', withState({
		startDate: null,
		endDate: null
	}, store => (
		<div>
			<SLDateRange
				id="dateRange1"
				onChange={v => store.set({
					startDate: v.startDate,
					endDate: v.endDate
				})}
				startDate={store.state.startDate}
				endDate={store.state.endDate}
			/>
			<p>{`Value: ${JSON.stringify(store.state)}`}</p>
		</div>
	)))
	.add('Disabled', withState({
		startDate: null,
		endDate: null
	}, store => (
		<div>
			<SLDateRange
				id="dateRange1"
				onChange={v => store.set({
					startDate: v.startDate,
					endDate: v.endDate
				})}
				startDate={store.state.startDate}
				endDate={store.state.endDate}
				disabled
			/>
			<p>{`Value: ${JSON.stringify(store.state)}`}</p>
		</div>
	)))

storiesOf('TextArea', module)
	.add('Default', withState({v:''}, store => (
		<div>
			<TextArea
				onChange={v => store.set({v})}
				value={store.state.v}
			/>
			<p>{`Value: ${store.state.v}`}</p>
		</div>
	)))
	.add('Disabled', withState({v:'A whole bunch of text that you can\'t change'}, store => (
		<div>
			<TextArea
				onChange={v => store.set({v})}
				value={store.state.v}
				disabled
			/>
			<p>{`Value: ${store.state.v}`}</p>
		</div>
	)))

storiesOf('SLFormGroup', module)
	.add('Default', withState({v:''}, store => (
		<SLFormGroup
			label="My Label"
			input={<Input
				onChange={v => store.set({v})}
				value={store.state.v}
			/>}
		/>
	)))
	.add('With Checkbox', withState({v:false}, store => (
		<SLFormGroup
			label="My Check Label"
			check={true}
			input={<Checkbox
				onChange={v => store.set({v})}
				value={store.state.v}
			/>}
		/>
	)))
	.add('With Help Text', withState({v:''}, store => (
		<div 
			style={{
				width: "50%",
				paddingLeft: "25%",
				paddingTop: "25%"
			}}
		>
			<SLFormGroup
				label="My Label"
				helpText="This is some text that might help describe what this input is for."
				input={<Input
					onChange={v => store.set({v})}
					value={store.state.v}
				/>}
			/>
		</div>
	)))
	
storiesOf('SLForm', module)
	.add('With Modal', withState({input: ''}, store => (
		<SLForm
			header="My Modal Form"
			onSubmit={() => sleep(1000)}
			fields={[
				<SLFormGroup
					label="My Form Label"
					input={<Input
						onChange={v => store.set({input: v})}
						value={store.state.input}
					/>}
				/>
			]}
		/>
	)))
	.add('Without Modal', withState({input: ''}, store => (
		<SLForm
			notModal={true}
			onSubmit={() => sleep(1000)}
			formInValid={!store.state.input.length}
			fields={[
				<SLFormGroup
					label="My Form Label"
					input={<Input
						onChange={v => store.set({input: v})}
						value={store.state.input}
					/>}
				/>
			]}
		/>
	)))
	.add('With Custom Submit Button', withState({input: ''}, store => (
		<SLForm
			notModal={true}
			submitButton={(onSubmit, formInvalid) => (
				<button 
					class="btn btn-danger"
					onClick={onSubmit}
					disabled={formInvalid}
				>
					Dangerous Submit Button
				</button>
			)}
			onSubmit={() => sleep(1000)}
			formInValid={!store.state.input.length}
			fields={[
				<SLFormGroup
					label="My Form Label"
					input={<Input
						onChange={v => store.set({input: v})}
						value={store.state.input}
					/>}
				/>
			]}
		/>
	)))
	.add('With all fields', withState({input: ''}, store => (
		<SLForm
			header="All Fields Header"
			Button={toggle => (
				<button 
					class="btn btn-success"
					onClick={toggle}
				>
					Show Modal 
				</button>
			)}
			submitButton={(onSubmit, formInvalid) => (
				<button 
					class="btn btn-danger"
					onClick={onSubmit}
					disabled={formInvalid}
				>
					Dangerous Submit Button
				</button>
			)}
			onSubmit={() => sleep(1000)}
			formInValid={!store.state.input.length}
			fields={[
				<SLFormGroup
					label="My Form Label"
					input={<Input
						onChange={v => store.set({input: v})}
						value={store.state.input}
					/>}
				/>
			]}
		/>
	)))