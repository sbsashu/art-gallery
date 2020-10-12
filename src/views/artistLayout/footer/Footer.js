import React, {Component} from 'react';
import { NavLink,Link} from 'react-router-dom';
import {isEmpty,saveCookie,getCookie,removeCookie} from 'config/functions';
import {PUBLIC_URL,BASE_URL} from 'config/constants';
import axios from 'axios';
import {ProviderContext} from 'views/common/CommonContext';
import {Navbar,Nav} from 'react-bootstrap';
import Phone  from '../../../assets/images/phone.png';
import Message from '../../../assets/images/message.png';


export default class Footer extends Component {
	
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
				<footer id="footer-sec">
				<div className="container-fluid">
					<div className="grid-row">
					<div className="flex-cols">
							<h2 className="h2 logo">BC/A</h2>
					</div>
					<div className="flex-cols">
						<p className="text">Sed ut perspiciatis unde omnis iste natus error sit volup accusantium en totum unde iste doloremqu</p>
					</div>
						<div className="flex-cols link-row">
						<h4 className="h4">Company</h4>
						<ul>
							<li><Link to="#">Home</Link></li>
							<li><Link to="#">About</Link></li>
							<li><Link to="#">Contact</Link></li>
							<li><Link to="#">FAQ</Link></li>
						</ul>
						</div>
						<div className="flex-cols link-row">
						<h4 className="h4">Product</h4>
						<ul>
							<li><Link to="#">Services</Link></li>
							<li><Link to="#">Resources</Link></li>
						</ul>
						</div>
						<div className="flex-cols link-row">
						<h4 className="h4">Supports</h4>
						<ul className="supports">
							<li><span className="icons"><img src={Phone} /></span> +1 (829)-092-1254</li>
							<li><span className="icons"><img src={Message}/></span> info@bca.com</li>
						</ul>
						</div>
					</div>
				</div>
				</footer>
			);
    }
}