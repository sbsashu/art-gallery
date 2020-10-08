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

export default class GalleryLogin extends Component {
	
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
										email: 'Please enter valid email.',
										default: 'Please enter :attribute'
									  },
								  });
		this.handleChange = this.handleChange.bind(this);
	}

	handleToggleClick() {
		this.setState(prevState => ({
		  showBanner: !prevState.showBanner
		}));
	}
	
	render() {
		return (
		 <React.Fragment>
			<HeaderMeta title="Provider Login"/>
			<div className="form-wrapper provider_module signup-wrapper login-wrapper">
				<div className={this.state.showBanner ? 'SliderToggled' : 'SliderToggledNo'}>
					<div className="overlay_this"></div>
					<div className="container-fluid">
						<div className="row no-gutters">
							<div className="col-12 col-sm-12 col-md-6 col-lg-6">
								<div className="card-logo text-center mt-4">
									<Link to="/"><img src={PUBLIC_URL+"/assets/images/small-logo.svg"} alt="Livepass" /> </Link>
								</div>
								<div className="login d-flex align-items-center">
									<div className="container">
										<div className="row">
											<div className="col-12 col-md-12 col-lg-12 col-xl-8 mx-auto">
												<div className="card card-signin">
													<div className="card-body">
														<h3 className="login-heading mb-4 text-center">Welcome Back</h3>
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
																	<div className="input-group forgot-pswd-field bg-white">
																		<Form.Control
																		  type="password"
																		  name="password"
																		  placeholder="Password"
																		  value={this.state.password}
																		  onChange={this.handleChange}/>
																		<div className="input-group-append">
																			<Link to="/provider/forgot-password">Forgot? </Link>
																		</div>
																	</div>
																  {this.validator.message('password', this.state.password, 'required|min:6',{'className':'text-danger'})}		
																</div>
															</div>
															<div className="form-button-set signup-buttonset">
																<Button className="btn btn-lg btn-primary btn-block text-capitalize" type="submit" disabled={ this.state.btnDisabled }>Log In</Button>
															</div>
															<div className="learnmore_toggle" onClick={this.handleToggleClick.bind(this)}>
																<span className="learn-more-label">Learn More</span>
															</div>
														</Form>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="d-flex align-self-center have-account-bottom">
									<div className="container">
										<div className="row">
											<div className="col-12 col-md-12 col-lg-12 col-xl-8 mx-auto">
												<div className="have-account pt-4 text-center"> Don't have an account? <Link to="/provider/sign-up">Sign Up </Link></div>
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