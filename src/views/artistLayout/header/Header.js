import React, {Component} from 'react';
import { NavLink,Link} from 'react-router-dom';
import {isEmpty,saveCookie,getCookie,removeCookie} from 'config/functions';
import {PUBLIC_URL,BASE_URL} from 'config/constants';
import axios from 'axios';
import {ProviderContext} from 'views/common/CommonContext';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
import {Navbar,Nav} from 'react-bootstrap';

export default class SideBar extends Component {
	
	static contextType = ProviderContext;
	
	getLogout(e){
		e.preventDefault();
		let data = {
			"deviceType": "3",
			"deviceToken": "12345"
		};
		axios({
			method: 'POST',
			url: "providerLogout",
			data: data
		}).then((result) => {
			let resultObj = result.data;
			removeCookie("authToken");
			removeCookie("providerSlug");
			removeCookie("selectedProviderID");
			removeCookie("lobbyAuthToken");
			removeCookie("providerCanLogginOnLobby");
			this.props.history.push({
				pathname : '/provider/login',
				messageType : 'success',
				message : 'Provider logout successfully',
			});
		}).catch((error) => {
			
			removeCookie("authToken");
			removeCookie("providerSlug");
			removeCookie("selectedProviderID");
			removeCookie("lobbyAuthToken");
			removeCookie("providerCanLogginOnLobby");
			this.props.history.push({
				pathname : '/provider/login',
				messageType : 'success',
				message : 'Provider logout successfully',
			});
		})
    }
	
    render() {
		let {providerSlug} 	= this.props.match.params;
		let {context,updateContext} 	= this.context;
		
        return (
			<div className={context.leftSideBarShow?"sidebarwrap dashboard-modify sidebar admin-sidebar sidebar toggled":"sidebarwrap dashboard-modify sidebar admin-sidebar sidebar"}>
				<Navbar bg="light" expand="lg">
					  <Link className="navbar-brand" to="/artist">BC/A</Link>
					  <Navbar.Toggle aria-controls="basic-navbar-nav" />
					  <Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ml-auto">
						  <Link className="nav-link active" to="/artist/catalog">Catalog</Link>
						  <Link className="nav-link" to="">Marketplace</Link>
						  <Link className="nav-link" to="">Support</Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
			);
    }
}