import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {isEmpty} from 'config/functions';
import base64 from 'base-64';

export default class Header extends Component {
    
    constructor(props) {
        super(props);
		const { tabSequence, providerSlug, sessionType, sessionID,paymentType } = this.props;
		let paymentTypeDecoded	= !isEmpty(paymentType)?base64.decode(paymentType):""
		this.initialState = {
			tabSequence: !isEmpty(tabSequence)?tabSequence:"1",
			providerSlug: !isEmpty(providerSlug)?providerSlug:"",
			sessionType: !isEmpty(sessionType)?sessionType:"",
			sessionID: !isEmpty(sessionID)?sessionID:"",
			paymentType: !isEmpty(paymentTypeDecoded)?paymentTypeDecoded:"",
			navLinkArray: [],
		}
		this.state 					= this.initialState;
		let navLinks				= [];
		if( this.state.sessionType == "class" ){
			if( this.initialState.paymentType == 'free' ){
				navLinks = [
					{"linkUrl":`/${providerSlug}/personal-info/${sessionType}/${sessionID}/${paymentType}`,"className":"nav-item nav-link","linkText":"1. Personal Info"}
				];	 			
			}else{
				navLinks = [
					{"linkUrl":`/${providerSlug}/personal-info/${sessionType}/${sessionID}/${paymentType}`,"className":"nav-item nav-link","linkText":"1. Personal Info"},
					{"linkUrl":`/${providerSlug}/payment/${sessionType}/${sessionID}/${paymentType}`,"className":"nav-item nav-link","linkText":"2. Payment"},
					{"linkUrl":`/${providerSlug}/booking-confirm/${sessionType}/${sessionID}/${paymentType}`,"className":"nav-item nav-link","linkText":"3. Book"},
				];
			}
		}else{
			if( this.initialState.paymentType == 'free' ){
				navLinks = [
					{"linkUrl":`/${providerSlug}/personal-info/${sessionType}/${sessionID}/${paymentType}`,"className":"nav-item nav-link","linkText":"1. Personal Info"},
					{"linkUrl":`/${providerSlug}/choose-date/${sessionType}/${sessionID}/${paymentType}`,"className":"nav-item nav-link","linkText":"2. Select Time"},
				];	 			
			}else{
				 navLinks = [
					{"linkUrl":`/${providerSlug}/personal-info/${sessionType}/${sessionID}/${paymentType}`,"className":"nav-item nav-link","linkText":"1. Personal Info"},
					{"linkUrl":`/${providerSlug}/choose-date/${sessionType}/${sessionID}/${paymentType}`,"className":"nav-item nav-link","linkText":"2. Select Time"},
					{"linkUrl":`/${providerSlug}/payment/${sessionType}/${sessionID}/${paymentType}`,"className":"nav-item nav-link","linkText":"3. Payment"},
					{"linkUrl":`/${providerSlug}/booking-confirm/${sessionType}/${sessionID}/${paymentType}`,"className":"nav-item nav-link","linkText":"4. Book"},
				];
			}
		}
		this.state.navLinkArray = navLinks;
    }
	
    render() {
		let {tabSequence,navLinkArray,providerSlug}		= this.state;
		let backPageUrl	= (navLinkArray.hasOwnProperty(tabSequence-2))?navLinkArray[tabSequence-2].linkUrl:"/"+providerSlug;
        return (
				<div className="row customerlink">
					<div className="back-icon">
						<Link to={backPageUrl}><span className="goback"></span></Link>
					</div>
					<ul>
						{ (this.state.navLinkArray.length>0)?this.state.navLinkArray.map(function(data, i){ return (<NavLinkItem key={i} Values={data} currentTab={i+1} props={this.props} tabSequence={this.props.tabSequence} />)},{"props":this.props}):("") }
					</ul>
				</div>
			);
    }
}

class NavLinkItem extends Component {
    render() {
		let pathname				= this.props.props.location.pathname;
		let listInfo					= this.props.Values;
		let tabSequence			= this.props.tabSequence;
		let currentTab				= this.props.currentTab;
		let className			= (currentTab==tabSequence)?listInfo.className+" active":listInfo.className;
        return(
                (typeof listInfo.linkText !== "undefined") ?
                (<li className={(currentTab==tabSequence)?"activeli":""}><Link to={(tabSequence>currentTab)?listInfo.linkUrl:pathname} className={className}>{listInfo.linkText}</Link></li>) : (null)
                )
				
    }
}