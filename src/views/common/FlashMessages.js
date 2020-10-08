import React, {Component} from 'react';
import { Alert } from 'react-bootstrap';
import {isEmpty} from 'config/functions';
import {Helmet} from "react-helmet";

export default class FlashMessages extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
			type: (!isEmpty(props.type)?props.type:"error"),
			message: (!isEmpty(props.message)?props.message:""),
			//alertShow: true,
			alertShow: (!isEmpty(props.alertShow)?props.alertShow:true),
		}
		this.state 					= this.initialState;
    }
    
	alertDismiss = ()=>{
		this.setState(prevState => ({
		  //alertShow: !prevState.alertShow
		  alertShow: false,
		}));
		if(typeof this.props.unmountMe != 'undefined')
			this.props.unmountMe();
	}
	
	componentWillReceiveProps(nextProps){
		this.setState(prevState => ({
		  alertShow: !prevState.alertShow,
		  type : nextProps.type,
		  message : nextProps.message,
		}));
	}

	
    render() {
		const state				= this.state;
		let variant			= "danger";
		if( state.type=="success" ){
			variant			= "success";
		}
		if( state.type=="warning" ){
			variant			= "warning";
		}
        return (
			//(state.alertShow)?(
			<Alert className="py-2" variant={variant} onClose={() => this.alertDismiss()} dismissible={ typeof this.props.unmountMe != 'undefined' ? true : false }>
				<div
				  dangerouslySetInnerHTML={{
					__html: state.message
				  }}></div>
			</Alert>
			//):(null)
        );
    }
}