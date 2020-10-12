import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import {isEmpty } from 'config/functions';
import { UPLOAD_URL, PUBLIC_URL } from 'config/constants';
import {ProviderContext} from 'views/common/CommonContext';
import Drawing from '../../../assets/images/Drawing.png'
export default class GetStarted extends Component {
	static contextType = ProviderContext;	
    constructor(props) {
		super(props);
		this.chartRef = React.createRef();
		this.state = {
		  "participantCount" : 0,
		};
	}
	
	render() {
		let {context,updateContext} 	= this.context;
        return (
				<section id="getstart-sec">
				<div class="container">
				<div class="grid-row">
					<div class="flex-cols left-sec">
					<h2 class="h2">Let’s Get Started</h2>
					<p class="text">Create your ArtID so people know who you are</p>
					<div class="btn-wraper">
						<Link to="/artist/create-artID" class="btn btn-dark">Create ArtID</Link>
					</div>
					</div> 
					<div class="flex-cols right-sec">
					<div class="img-wraper">
						<img src={Drawing} class="img-fluid"/>
					</div>
					</div>	
				</div>
				</div>
				</section>
			);
    }
}