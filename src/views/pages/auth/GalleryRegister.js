import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import SimpleReactValidator from 'simple-react-validator';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import {isEmpty} from 'config/functions';
import {PUBLIC_URL} from 'config/constants';
import HeaderMeta from 'views/common/HeaderMeta';
import FlashMessages from 'views/common/FlashMessages';

export default class GalleryRegister extends Component {
	
	constructor(props) {
		super(props);
		this.initialState = {
			showBanner: false,
			flashMessage: "",
		}
		this.state 				= this.initialState;
		this.validator 			= new SimpleReactValidator({
									autoForceUpdate: this,
									messages: {
										email: 'Please enter valid email.',
										default: 'Please enter :attribute',
										min: 'The :attribute length must be atleast 6 characters.',
									  },
								  });
		this.handleChange 					= this.handleChange.bind(this);
		this.handleSubmit 					= this.handleSubmit.bind(this);
		this.handleFlashUnmount  			= this.handleFlashUnmount .bind(this);
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
	handleSubmit(event) {
		event.preventDefault();
		if (this.validator.allValid()) {
			let timeZone			= "";
			let data = {
				"fullName": this.state.fullName,
				"occupation": this.state.occupation,
				"email": this.state.email,
				//"phone": this.state.phone,
				"countryCode": this.state.countryCode,
				"password": this.state.password,
				"timeZone": !isEmpty(timeZone)?timeZone:"UTC",
				"deviceType": '3', 
				"deviceToken": '12345', 
			}
			axios({
                method: 'post',
                url: "providerRegistration",
                data: data
            }).then((result) => {
                let resultObj = result.data;
                if (resultObj.status) {
					let providerID		= resultObj.data.providerID;
					this.props.history.push({
						state: { userInfo: resultObj.data },
						pathname : '/provider/verify-email',
						//messageType : 'success',
						//message : resultObj.message,
					});
                }else{
					this.setState({
						"flashMessage": resultObj.message
					});
                }
            }).catch((error) => {
				
				this.setState({
					"flashMessage": "Network Error",
					"messageType": "error"
				});
            })
		} else {
			this.validator.showMessages();
		}
	}
	
	 handleToggleClick() {
		this.setState(prevState => ({
		  showBanner: !prevState.showBanner
		}));
	  }
	
	render() {
		let countryCodeOptions = [];
		this.state.countryCodeData.map((data,index) =>
		  countryCodeOptions.push({ value: data.countryID, label: data.phone_code })	 
		);
		return (
			 <React.Fragment>
				<HeaderMeta title="Provider Sign Up"/>
				<div className="form-wrapper provider_module signup-wrapper">
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
															<h3 className="login-heading mb-4 text-center">Let’s Get Started</h3>
															<div className="form-grp my-4">
																{(this.state.flashMessage)?(<FlashMessages type={this.state.messageType} message={this.state.flashMessage} unmountMe={this.handleFlashUnmount} />):("")}
															</div>
															<Form onSubmit={this.handleSubmit} className="form-signin registerartionStep">
																<div className="form-label-group">
																	<Form.Label className="control-label">Full Name: </Form.Label>
																	<Form.Control
																	  type="text"
																	  name="fullName"
																	  autoFocus={true}
																	  value={this.state.fullName}
																	  placeholder="Full Name"
																	  onChange={this.handleChange}/>
																	  {this.validator.message('fullName', this.state.fullName, 'required',{'className':'text-danger mx-3'})}	 
																</div>
																<div className="form-label-group">
																	<Form.Label className="control-label">Occupation </Form.Label>
																	<Form.Control
																	  type="text"
																	  name="occupation"
																	  placeholder="Title"
																	  value={this.state.occupation}
																	  onChange={this.handleChange}/>
																	  {this.validator.message('Title', this.state.occupation, 'required',{'className':'text-danger mx-3'})}		 
																</div>
																
																<div className="form-label-group">
																	<Form.Label className="control-label">Email address:</Form.Label>
																	<Form.Control
																	  type="text"
																	  name="email"
																	  placeholder="Email"
																	  value={this.state.email}
																	  onChange={this.handleChange}/>
																	  {this.validator.message('email', this.state.email, 'required|email',{'className':'text-danger mx-3'})}		 
																</div>
																<div className="form-label-group">
																	<Form.Label className="control-label">Password: </Form.Label>
																	<Form.Control
																	  type="password"
																	  name="password"
																	  placeholder="Password"
																	  value={this.state.password}
																	  onChange={this.handleChange}/>
																	  {this.validator.message('password', this.state.password, 'required|min:6',{'className':'text-danger mx-3'})}
																</div>
																<div className="form-button-set signup-buttonset">
																	<Button className="btn btn-lg btn-primary btn-block text-capitalize" type="submit">Sign up</Button>
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
													<div className="have-account pt-4">Already have an account?
														<Link to="/provider/login"> Log In </Link>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
           </React.Fragment>
		);
	}
}