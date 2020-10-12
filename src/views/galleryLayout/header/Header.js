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
import Profile from '../../../assets/images/Profile.png'
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
			<div  id="navbar-sec">
					<nav className="navbar">
					<div className="nav-brand logo">BC/A</div>
					<button className="navbar-toggler" type="button" data-target="#collapsibleNavbar">
					<span className="navbar-toggler-icon"><i className="fa fa-bars" aria-hidden="true"></i></span>
					</button>	
					<div className="navbar-collapse">
						<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<Link className="nav-link active" to="#">Catalog</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="#">Marketplace</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="#">Support</Link>
						</li> 
						<li className="nav-item profile">
							<Link className="nav-link" to="#"><img src={Profile} /></Link>
						</li>	  
						</ul>
						</div>
					</nav>
			</div>
		)};
		}