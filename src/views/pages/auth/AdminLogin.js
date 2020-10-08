import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import base64 from 'base-64';
import SimpleReactValidator from 'simple-react-validator';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { saveCookie,isEmpty } from 'config/functions';
import { PUBLIC_URL } from 'config/constants';
import HeaderMeta from 'views/common/HeaderMeta';
import FlashMessages from 'views/common/FlashMessages';
import ScrollToTopBtn from "views/common/ScrollToTopBtn";

export default class AdminLogin extends Component {
	
	constructor(props) {
		super(props);
		this.initialState = {
			showBanner: false,
			providerID: '',
			email: '',
			password: '',
			alertShow: false,
			unverified: false,
			messageType: this.props.location.messageType ? this.props.location.messageType : "error",
			flashMessage: this.props.location.message,
			btnDisabled : false,
		}
		this.state 				= this.initialState;
		this.validator 			= new SimpleReactValidator({
									autoForceUpdate: this,
									messages: {
										min: 'Please enter minimum 8 digits password.',
										email: 'Please enter valid email.',
										default: 'Please enter :attribute'
									  },
								  });
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit 	= this.handleSubmit.bind(this);
		this.handleFlashUnmount 	= this.handleFlashUnmount.bind(this);
	}
	
	handleFlashUnmount(){
		this.setState({
			flashMessage : '',
		})
	}
	
	handleChange(event) {
		const name = event.target.name;
		const value = event.target.value;		
		this.setState({
			[name]: value,
		})
	}
	
	render() {
		return (
		 <React.Fragment>
			<HeaderMeta title="Provider Login"/>
			<div className="form-wrapper provider_module signup-wrapper login-wrapper admin_module">
			   <div className="admin_module_login d-flex h-100 align-items-center mx-auto my-auto">
				<div className="admin-login bg-white mx-auto my-auto">
					<div className="card-logo text-center mt-4">
						Admin Login
					</div>
					<div className="login d-flex align-items-center">
						<div className="container">
							<div className="row">
								<div className="col-12 col-md-12 col-lg-12 mx-auto">
									<div className="card card-signin">
										<div className="card-body">
											<h3 className="login-heading mb-4 text-center">Admin</h3>
											<div className="form-grp">
												{(this.state.flashMessage)?(<FlashMessages type={this.state.messageType} message={this.state.flashMessage} unmountMe={this.handleFlashUnmount}/>):("")}
												{(this.state.unverified)?(<div>Are you want verify it? <Link to={"/provider/phone-verification/"+this.state.providerID}>Continue</Link></div>):(null)}
											</div>
											<Form onSubmit={this.handleSubmit.bind(this)} className="form-signin">
												<div className="form-label-group">
													<Form.Label className="control-label">Email</Form.Label>
													<div className="input-field">
													<Form.Control
													  type="email"
													  name="email"
													  placeholder="Email"
													  value={this.state.email}
													  autoFocus={true}
													  onChange={this.handleChange}/>
													  {this.validator.message('email', this.state.email, 'required|email',{'className':'text-danger'})}
													 </div>
												</div>
												<div className="form-label-group">
													<Form.Label className="control-label">Password </Form.Label>
													<div className="input-field">
														<Form.Control
														  type="password"
														  name="password"
														  placeholder="Password"
														  value={this.state.password}
														  onChange={this.handleChange}/>
													  {this.validator.message('password', this.state.password, 'required|min:8',{'className':'text-danger'})}		
													</div>
												</div>
												<div className="form-button-set signup-buttonset">
													<Button className="btn btn-lg btn-primary btn-block text-capitalize" type="submit" disabled={ this.state.btnDisabled }>Log In</Button>
												</div>
											</Form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			</div>
			<ScrollToTopBtn />
           </React.Fragment>
		);
	}
}