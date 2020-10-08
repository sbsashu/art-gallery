import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {isEmpty} from 'config/functions';

export default class RescheduleHeader extends Component {
    
    constructor(props) {
        super(props);
		const { tabSequence, providerSlug, sessionType, sessionID, bookingID, state } = this.props;
		this.initialState = {
			tabSequence: !isEmpty(tabSequence)?tabSequence:"1",
			providerSlug: !isEmpty(providerSlug)?providerSlug:"",
			sessionType: !isEmpty(sessionType)?sessionType:"",
			sessionID: !isEmpty(sessionID)?sessionID:"",
			bookingID: !isEmpty(bookingID)?bookingID:"",
			navLinkArray: [],
			accessToken: !isEmpty(state.accessToken)?state.accessToken:""
		}
		this.state 					= this.initialState;
		let navLinks				= [];
		if( this.state.sessionType == "class" ){
			navLinks = [
				{"linkUrl":`/${providerSlug}/re-schedule/personal-info/${sessionType}/${sessionID}`,"className":"nav-item nav-link","linkText":"1. Personal Info"},
			];			 
		}else{
			 navLinks = [
				{"linkUrl":`/${providerSlug}/re-schedule/choose-date/${sessionType}/${sessionID}`,"className":"nav-item nav-link","linkText":"1. Select Time & Book"},
			];
		}
		this.state.navLinkArray = navLinks;
	}
	
	componentWillReceiveProps(changes){}
	
    render() {
		let {tabSequence,navLinkArray,providerSlug, accessToken}		= this.state;
		let backPageUrl	= `/schedule-confirm/`+this.props.state.accessToken;
        return (
				<div className="row customerlink">
					<div className="back-icon">
						{/*<Link to={backPageUrl} ><span className="goback"></span></Link>*/}
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
                (<li className={(currentTab==tabSequence)?"activeli":""}><Link to={pathname} className={className}>{listInfo.linkText}</Link></li>) : (null)
                )
				
    }
}