import React, { Component, Suspense } from 'react';
import { Link} from 'react-router-dom';
import { isEmpty,removeCookie,getCookie} from 'config/functions';
import {SubProviderContext} from 'views/common/CommonContext';
import axios from 'axios';
import Moment from 'react-moment';
    
class Header extends Component {
	static contextType = SubProviderContext;
	
	getLogout(e){
		e.preventDefault();
		let data = {
			"deviceType": "3",
			"deviceToken": "12345"
		};
		axios({
			method: 'POST',
			url: "lobbyLogout",
			data: data
		}).then((result) => {
			let resultObj = result.data;
			removeCookie("lobbyAuthToken");			
			this.props.history.push({
				pathname : '/my-lobby/login',
				messageType : 'success',
				message : 'Lobby logged out successfully',
			});
		}).catch((error) => {
			removeCookie("lobbyAuthToken");
			this.props.history.push({
				pathname : '/my-lobby/login',
				messageType : 'success',
				message : 'Lobby logged out successfully',
			});
		});
    }
	
    render() {
		let { context }			= this.context;
		let providerAccess	= !isEmpty(getCookie('authToken')) ? true : false;
        return (
				<div className="header">
					<div className="provider">
						<Link to="/my-lobby">
							<div className="provider-profile"><img src={context.imageURL} className="img-fluid" alt="Profile Photo" className="img-fluid"/></div>
						</Link>
							{context.fullName}
					</div>
					<div className="d-flex">
						<div className="current-date"><Moment format="MMM, ddd DD"></Moment></div>
						<div className="current-time"><Moment format="h:mm A"></Moment></div>
					</div>
					<Link to="/my-lobby/connect-calendar"><div className="icon dashboard"></div></Link>
					<Link to="#"><div className="icon settings"></div></Link>
					{(!providerAccess)?(
						<Link to="#" onClick={this.getLogout.bind(this)}><div className="icon lobby_logout"></div></Link>
					):(null)}
				</div>
                );
    }
}
export default Header;