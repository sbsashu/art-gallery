import React, { Component } from "react";
import { currentTimeInUTC, isEmpty, isEmptyObj } from 'config/functions';
import moment from 'moment';

export default class CountDownTimer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			timeLeft: {},
			className: props.className ? props.className : '',
		};
		setInterval(this.calculateTimeLeft, 1000);
	}

	componentWillMount() {
		this.calculateTimeLeft();
	}

	calculateTimeLeft = () => {
		const { formDateTime, utcDate } = this.props;
		let currentTimeUTC	= currentTimeInUTC().replace(/T/, ' ').replace(/\..+/, '');
		let currentTime 	= !isEmpty(utcDate) ? new Date(moment(currentTimeUTC).format()) : new Date();
		const difference = +new Date(moment(formDateTime).format()) - +currentTime;
		let timeLeft = {};
		if (difference >= 0) {
			let MO	= Math.floor(difference / (1000 * 60 * 60 * 24*30));
			let D		= Math.floor(difference / (1000 * 60 * 60 * 24));
			let H		= Math.floor((difference / (1000 * 60 * 60)) % 24);
			let M		= Math.floor((difference / 1000 / 60) % 60);
			let S		= Math.floor((difference / 1000) % 60);
			if( D > 30 ){
				timeLeft["Months"]		= MO;
				timeLeft[" Days"]		= D-(MO*30);
			}
			else if( D >= 1 ){
				timeLeft[" Days"]		= D;
				timeLeft[" Hours"]		= H;
			}
			else if( H >= 1 ){
				timeLeft[" Hours"]		= H;
				timeLeft[" Minutes"]	= M;
			}
			else if( M > 10 ){
				timeLeft[" Minutes"]	= M;
			}else{
				timeLeft[" Minutes"]	= M;
				timeLeft[" Seconds"]	= S;				
			}
		}
		if( (difference / 1000) <= 0 ){
			if (typeof this.props.endTime !== 'undefined'){
				this.props.endTime();
			}
		}
		/* let timeLeft1 = {
			MO: Math.floor(difference / (1000 * 60 * 60 * 24*30)),
			D: Math.floor(difference / (1000 * 60 * 60 * 24)),
			H: Math.floor((difference / (1000 * 60 * 60)) % 24),
			M: Math.floor((difference / 1000 / 60) % 60),
			S: Math.floor((difference / 1000) % 60)
		}; */
		if (!isEmptyObj(timeLeft)) {
			this.setState({
				timeLeft: timeLeft
			});
		}
	};

	render() {
		const { timeLeft } = this.state;
		const timerComponents = [];

		Object.keys(timeLeft).forEach((interval, key) => {
			if (!timeLeft[interval]) {
				return;
			}

			timerComponents.push(
				<span key={key} className={ this.state.className }>
					{timeLeft[interval]}{interval}{" "}
				</span>
			);
		});

		return (
			<React.Fragment>
				{timerComponents.length ? timerComponents : (<span>{(this.props.message)?this.props.message:"Times up!"}</span>)}
			</React.Fragment>
		);
	}
}