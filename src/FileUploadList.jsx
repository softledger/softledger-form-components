'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import FileDrop from 'react-file-drop';
import { Table } from 'reactstrap';
import { LoadingButton } from '@softledger/components';
import './FileUpload.css';

const FileUploadList = props => {
	const renderTableRows = files => files.map((a, idx) => (
		<tr key={idx}>
			<td>
				<div style={{
					width: `${a.progress || 0}%`,
					whiteSpace: "nowrap",
					backgroundColor: "lightgreen"
				}}>
					{a.file.name}
				</div>
			</td>
			<td>
				<LoadingButton 
					iconClass="times"
					handleClick={() => props.onRemove(idx)}
				/>
			</td>
		</tr>
	))

	renderTable = files => {
		if(!files || files.length < 1) return;
		return (
			<Table>
				<thead>
					<tr>
						<th>Attachments</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{this.renderTableRows(files)}
				</tbody>
			</Table>
		)
	}

	let dt;

	return (
		<div className="file-uploader"
			ref={dropTarget => dt = dropTarget}>
			{props.dropText || "Drag Here to upload"}
			<FileDrop frame={dt}
				onDrop={props.onDrop}>
			</FileDrop>
			{this.renderTable(props.files)}
		</div>
	)
}

FileUpload.propTypes = {
	//can be a dom element
	dropText: PropTypes.object,
	//list of files to display, can leavae blank to not have table shown
	files: PropTypes.array,
	//handler for file(s) being dropped
	onDrop: PropTypes.func.isRequired,
	//remove file, needed if files is not blank
	onRemove: PropTypes.func
}

export default FileUploadList;