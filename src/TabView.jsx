'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import {
	Nav, NavItem, NavLink,
	TabContent, TabPane
} from 'reactstrap';
import classnames from 'classnames';

export default class TabView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activeTab: 0
		};
	}

	toggle = tab => {
		if(this.state.activeTab !== tab) {
			this.setState({
				activeTab: tab
			});
			if(this.props.tabs[tab].onClick) {
				this.props.tabs[tab].onClick();
			}
		}
	}

	renderLinks = (tabs, activeTab) => tabs.map((tab, idx) => (
		<NavItem key={idx}>
			<NavLink className={classnames({ active: activeTab === idx })}
				onClick={() => this.toggle(idx)}>
				{tab.Header}
			</NavLink>
		</NavItem>
	))

	renderTabs = tabs => tabs.map((tab, idx) => (
		<TabPane tabId={idx} key={idx}>
			{tab.Body}
		</TabPane>
	))

	render() {
		const {
			tabs
		} = this.props;
		const {
			activeTab
		} = this.state;

		return (<div>
			<Nav tabs justified>
				{this.renderLinks(tabs, activeTab)}
    	</Nav>
    	<TabContent activeTab={this.state.activeTab}>
    		{this.renderTabs(tabs)}
    	</TabContent>

		</div>)
	}
}

TabView.propTypes = {
	tabs: PropTypes.arrayOf(PropTypes.shape({
		Header: PropTypes.string.isRequired,
		Body: PropTypes.object.isRequired,
		onClick: PropTypes.func
	})).isRequired
}