import React, {Component} from 'react';
import { NavLink,Link} from 'react-router-dom';
import {isEmpty,saveCookie,getCookie,removeCookie} from 'config/functions';
import {PUBLIC_URL,BASE_URL} from 'config/constants';
import axios from 'axios';
import {ProviderContext} from 'views/common/CommonContext';
import {Navbar,Nav} from 'react-bootstrap';

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
			<footer className="footer-area footer--light">
			  <div className="footer-big">
				<div className="container-fluid">
				  <div className="row">
					<div className="col-2">
					  <div className="row">
							<div className="col-md-3 col-sm-12">
							  <div className="footer-widget">
								<div className="widget-about">
								  <h2>BC/A</h2>
								</div>
							  </div>
							</div>
						</div>
					</div>
					<div className="col-10">
					  <div className="row">
							<div className="col-md-3 col-sm-12">
							  <div className="footer-widget">
								<div className="widget-about">
								  <p>Sed ut perspiciatis unde omnis iste natus error sit volup accusantium en totum unde iste doloremqu</p>
								</div>
							  </div>
							</div>
							<div className="col-md-3 col-sm-4">
							  <div className="footer-widget">
								<div className="footer-menu footer-menu--1">
								  <h4 className="footer-widget-title">Company</h4>
								  <ul className="list-unstyled">
									<li>
									  <a href="#">About Us</a>
									</li>
									<li>
									  <a href="#">Home</a>
									</li>
									<li>
									  <a href="#">Contact Us</a>
									</li>
									<li>
									  <a href="#">FAQs</a>
									</li>
								  </ul>
								</div>
							  </div>
							</div>
							<div className="col-md-3 col-sm-4">
							  <div className="footer-widget">
								<div className="footer-menu">
								  <h4 className="footer-widget-title">Product</h4>
								  <ul className="list-unstyled">
									<li>
									  <a href="#">Services</a>
									</li>
									<li>
									  <a href="#">Resource</a>
									</li>
								  </ul>
								</div>
							  </div>
							</div>
							<div className="col-md-3 col-sm-4">
							  <div className="footer-widget">
								<div className="footer-menu no-padding">
								  <h4 className="footer-widget-title">Support</h4>
								  <ul className="list-unstyled">
									<li>
									  <span className="icon-earphones"></span> Call Us:
									  <a href="tel:+1 (829)-092-1254">+1 (829)-092-1254</a>
									</li>
									<li>
									  <span className="icon-envelope-open"></span>
									  <a href="mailto:info@bca.com">info@bca.com</a>
									</li>
								  </ul>
								</div>
							  </div>
							</div>
						</div>
						</div>
				  </div>
				</div>
			  </div>
			</footer>
			);
    }
}