import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import {isEmpty } from 'config/functions';
import { UPLOAD_URL, PUBLIC_URL } from 'config/constants';
import {ProviderContext} from 'views/common/CommonContext';
import { Form, Button } from 'react-bootstrap';
import SimpleReactValidator from 'simple-react-validator';

export default class Details extends Component {
	static contextType = ProviderContext;	
    constructor(props) {
		super(props);
		this.chartRef = React.createRef();
		this.state = {
		  "participantCount" : 0,
		};
		this.validator 			= new SimpleReactValidator({
			autoForceUpdate: this,
			messages: {
				email: 'Please enter valid email.',
				default: 'Please enter :attribute',
				min: 'The :attribute length must be atleast 6 characters.',
			  },
		  });
	}
	onContinue = (e) => {
		e.preventDefault();
		this.props.history.push('/artist/art-work/upload')
	}
	render() {
		let {context,updateContext} 	= this.context;
        return (
			<section id="artistinfo-sec" class="artwork-sec">
			<div className="container">
			<form>
			   <div className="grid-row">
				<div className="flex-cols form-heaad">
				   <h2 className="h2">Add Artwork</h2>
				 </div>	
				 <div className="flex-cols">
				   <div className="progress">
					 <div className="circle first active"></div>
					 <div className="circle second"></div>
					 <div className="circle third"></div>
				   </div>
				 </div>
				 <div className="flex-cols information">
					<h4 className="h4">Basic information</h4>
					<p className="text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quas et quasi architecto beatae vitae dicta sunt explicabo.</p>
				 </div>
				 </div>
				 <div className="grid-row form-row">
				 <div className="flex-cols">
				   <div className="form-group">
						<label htmlFor="Tax">Title</label>
						<input type="text" className="form-control" placeholder="What is the name of the art piece" id="Title" value="" />
					</div>
				 </div>
				 </div>
				 <div className="grid-row form-cols-2">
				 <div className="flex-cols left-cols">
				   <div className="form-group">
						<label htmlFor="rname">Creation Date</label>
						<input type="text" className="form-control" placeholder="MM/DD/YYYY" id="rname" value="" />
					</div>
				 </div>
				 <div className="flex-cols right-cols">
					<div className="form-group">
						<label htmlFor="rname">Media Type</label>
						<select className="form-control" required="">
						  <option value="">Select</option>
						  <option value="">Select</option>
						</select>
						<i className="fa fa-caret-down" aria-hidden="true"></i>
					</div>
				 </div>
				 </div>
				 <div className="grid-row form-row">
				 <div className="flex-cols">
					<div className="form-group">
						<label htmlFor="bio">Description</label>
						<textarea className="form-control" placeholder="Describe the art piece"></textarea>
					</div>
					
				 </div>
				 </div>
				  <div className="grid-row form-row btn-sec">
					<div className="flex-cols">
						<div className="form-group">
						  <button type="submit" className="btn btn-block cancel">Cancel</button>
					   </div>
					</div>
					<div className="flex-cols">
					  <div className="form-group">
						  <button type="submit" className="btn btn-block" onClick={this.onContinue.bind(this)}>Continue</button>
					   </div>
					</div>
				  </div>
			  </form></div>
			</section>
			);
    }
}