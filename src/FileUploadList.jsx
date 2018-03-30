'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import FileDrop from 'react-file-drop';
import { Table } from 'reactstrap';
import { LoadingButton } from '@softledger/components';

/**
 * Displays a dropzone for files
 * Dropped files are displayed as a table with option to remove them individually
 */
class FileUploadList extends React.Component {
	renderTableRows = files => files.map((a, idx) => (
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
					onClick={() => this.props.onRemove(idx)}
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

	render() {
		return (
			<div className="file-uploader"
				ref={dropTarget => this.dropTarget = dropTarget}>
				{this.props.dropText || "Drag Here to upload"}
				<FileDrop frame={this.dropTarget}
					onDrop={this.props.onDrop}>
				</FileDrop>
				{this.renderTable(this.props.files)}
			</div>
		)
	}
}

FileUploadList.propTypes = {
	/**
	 * Text or JSX to display in the dropzone
	 */
	dropText: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object
	]),
	/**
	 * list of files to display, can leave blank to not have table shown
	 */
	files: PropTypes.array,
	/**
	 * callback for when a file is dropped
	 */
	onDrop: PropTypes.func.isRequired,
	/**
	 * Callback for when a file is removed
	 * required if files prop is not blank
	 */
	onRemove: PropTypes.func
}

FileUploadList.defaultProps = {
	dropText: 'Drag Here to upload'
}

export default FileUploadList;