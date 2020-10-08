import React, { Component, Suspense } from 'react';
import { Link,NavLink,Route, Switch} from 'react-router-dom';
import {Tab, Nav,Form, Modal,Button} from 'react-bootstrap';
import {isEmpty} from 'config/functions';
import { UPLOAD_URL,BASE_URL,PUBLIC_URL } from 'config/constants';
import axios from 'axios';
import {AdminContext} from 'views/common/CommonContext';
import SimpleReactValidator from 'simple-react-validator';
import HeaderMeta from 'views/common/HeaderMeta';
import FlashMessages from 'views/common/FlashMessages';

export default class PublicPage extends Component {
	render() {
		let {providerSlug} 	= this.props.match.params;
        return (
			<div className="scheduled-wrapper right-content-modify public-wrapper public-wraper-modify">
				<AdminContext.Consumer>
				 {({context,updateContext}) => (
					<div id="content" className="scheduled-content">
						<div className="container-fluid">
							<div className="scheduled-inner public-inner">
								<div className="block-header page-title">
									<div className="heading_css">
										<h2><span className="righttop-icon">
											<img src={PUBLIC_URL+"/assets/images/public-hover.svg"} /></span> <span className="heading-text"> Profile</span>
										</h2>
									</div>
								</div>
								<Tab.Container id="left-tabs-example" defaultActiveKey="PublicProfile">
									<div className="scheduled-tab public-tab">
										  <Nav variant="tabs" id="scheduledtab">
											<Nav.Item>
											   <NavLink className="nav-link" isActive={(_, { pathname }) =>['/admin/profile','/admin/profile/view'].includes(pathname)} to={'/admin/profile/view'}>Profile</NavLink>
											</Nav.Item>
											<Nav.Item>
											   <NavLink className="nav-link" to='/admin/profile/reset-password'>Reset Password</NavLink>
											</Nav.Item>
										  </Nav>
									</div>
									<Tab.Content className="scheduled-tab-content public-tab-content">
										<Tab.Pane eventKey="PublicProfile">
											Admin Profile
										</Tab.Pane>
									</Tab.Content>
								</Tab.Container>
							</div>
						</div>
					</div>
				  )}
			 </AdminContext.Consumer>
			</div>
			);
    }
}