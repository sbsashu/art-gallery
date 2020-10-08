import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import SimpleReactValidator from 'simple-react-validator';
import {isEmpty,isEmptyObj,getCookie,formatDate} from 'config/functions';
import {PUBLIC_URL} from 'config/constants';
import BookingSideBar from 'views/pages/users/BookingSideBar';
import axios from 'axios';
import base64 from 'base-64';
import InputMask from 'react-input-mask';

import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  injectStripe,
} from 'react-stripe-elements'
let StripeCardForm = {};

class _CardForm extends Component {
	
	constructor(props) {
		super(props);
		let {providerSlug,sessionType,sessionID} 	= this.props.match.params;
		let bookingDetails = props.resultObj.bookingDetails;
		this.initialState = {
			email: bookingDetails.email,
			nameOnCard: bookingDetails.firstName+" "+bookingDetails.lastName,
			zipcode: "",
			flashMessage: "",
			messageType: "error",
			errorMessage: '',
			isStartLoader: false,
			btnDisabled: props.btnDisabled,
		}
		this.state 					= this.initialState;
		this.validator 				= new SimpleReactValidator({autoForceUpdate: this});
		this.handleChange 	= this.handleChange.bind(this);
	}
	
	handleChange(event) {
		const name = event.target.name;
		const value = event.target.value;		
		this.setState({
			[name]: value,
		},()=>this.checkAllValid())
	}
	
	checkAllValid(){
		let btnDisabled = true;
		if (this.validator.allValid()) {
			btnDisabled = false;
		} else {
			//this.validator.showMessages();
		}
		this.setState({
			btnDisabled: btnDisabled
		})
	}
	
	stripeFormInputChange = ({error}) => {
		let info 	= {};
		if (error) {
			info	= {errorMessage: error.message,btnDisabled: true};
		}else{
			info	= {btnDisabled: false,errorMessage: ""};
		}
		this.setState(info,()=>this.checkAllValid())
	}

	handleSubmit = (evt) => {
		evt.preventDefault();
		this.setState({errorMessage: ""});					
		if (this.props.stripe) {
			if( !isEmpty( this.state.email ) ){
				let tokenInfo					= {};
				tokenInfo.email				= this.state.email;
				tokenInfo.address_zip	= this.state.zipcode; 
				tokenInfo.name				= this.state.nameOnCard; 
				this.props.stripe.createToken(tokenInfo).then((response)=>{
					if( !response.error && this.validator.allValid() ){
						this.props.handleResult(response,tokenInfo);
					} else {
						this.validator.showMessages();
						if(response.error){
							this.setState({errorMessage: response.error.message});
						}
					}
				});
			}
			this.setState({isBtnDisabled: true});
		} else {
			console.log("Stripe.js hasn't loaded yet.");
		}
	};
	
	render() {
			const styleOptions = {
			  base: {
				fontSize: '16px',
				'::placeholder': {
				  color: '#ccced8',
				},
			  }
			};
		return (
		<Form onSubmit={this.handleSubmit.bind(this)}>
		<div className="row smright-box payment payment-modify">			
			<div className="col1">
				<div className="wrap">
					<div className="topheader">
						<div className="leftcol">
							<div className="visaCard show_sm">
								<img src="/assets/images/visaicon.svg" alt="payment gateway"/>
							</div>
							<h4>{/*<span className="iconwrap"><img src={PUBLIC_URL+"/assets/images/payment-icon.svg"} alt="payment icon" /></span>*/} Payment</h4>
							<div className="parasec">
								<p>We don’t charge your credit card before your sessions is over. To cancel and avoid service charge, please do so 24 hours before your session</p>
							</div>
						</div>
						{/*<div className="rightcol">
							<Link to={this.props.history.location.pathname}><img src={PUBLIC_URL+"/assets/images/visaicon.svg"} alt="payment gateway" /></Link>
						</div>*/}
					</div>
					<div className="parasec for-mobile">
						<p>We don’t charge your credit card before your sessions is over. To cancel and avoid service charge, please do so 24 hours before your session</p>
					</div>
					{(this.state.isStartLoader)?this.props.pageLoader():("")}
					<div className="payform-wraper">
						<div className="form-grp">
							<Form.Group className="inputcol" controlId="email">
								<Form.Label>Email</Form.Label>
								<Form.Control
								  type="email"
								  name="email"
								  value={this.state.email}								  
								  autoFocus={true}
								  className="input"
								  autoComplete="nope"
								  placeholder="name@email.com"
								  onChange={this.handleChange}/>
								  {this.validator.message('email', this.state.email, 'required|email',{'className':'text-danger'})}			 
							</Form.Group>
						</div>
						<div className="form-grp inputblock cardinput">
							<div className="inputcol">
								<label>Card Information</label>
								<CardNumberElement className="input" placeholder="Card # 0000 0000 0000 0000" onChange={this.stripeFormInputChange} style={styleOptions}/>
							</div>
						</div>
						<div className="form-grp expinput">
							<div className="inputcol">
								<CardExpiryElement className="input" placeholder="Expiration date" onChange={this.stripeFormInputChange} style={styleOptions} />
							</div>
							<div className="inputcol">
								<CardCVCElement className="input" placeholder="CVC code" onChange={this.stripeFormInputChange} style={styleOptions}/>
							</div>
						</div>
						<div className="form-grp inputblock">
							<div className="text-danger" role="alert">
								{this.state.errorMessage}
							</div>
						</div>
						<div className="form-grp inputblock">
							<Form.Group className="inputcol" controlId="nameOnCard">
								<Form.Label className="control-label">Name on card</Form.Label>
								<Form.Control
								  type="text"
								  name="nameOnCard"
								  value={this.state.nameOnCard}
								  className="input"
								  placeholder="Name Namesen"
								   autoComplete="nope"
								  onChange={this.handleChange}/> 
							</Form.Group>
						</div>
						{/*<div className="form-grp inputblock">
							<div className="inputcol">
								<label>Zip Code</label>
								<InputMask
								  mask="**********"
								  maskChar={null}
								  className="input"
								  name="zipcode"
								  placeholder="Zip Code"
								   autoComplete="nope"
								  value={this.state.zipcode}
								  onChange={this.handleChange}/>
								  {this.validator.message('zipcode', this.state.zipcode, 'required|min:3',{'className':'text-danger'})}	
							</div>
						</div>*/}
					</div>
				</div>
			</div>
			<div className="col2">
			{ (!isEmptyObj(this.props.providerDetails))?(
				<BookingSideBar {...this.props} btnDisabled={this.state.btnDisabled} btnText={"Review & Book"} providerDetails={this.props.providerDetails} stripePaymentImg={ true } />
			):(null)}
			</div>
		</div>
	</Form>
		);
	}
}

export default StripeCardForm = injectStripe(_CardForm);