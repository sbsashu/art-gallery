import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import {isEmpty } from 'config/functions';
import { UPLOAD_URL, PUBLIC_URL } from 'config/constants';
import {ProviderContext} from 'views/common/CommonContext';
import { Form, Button } from 'react-bootstrap';
import SimpleReactValidator from 'simple-react-validator';
import Avatar from '../../../assets/images/Avatar.png'

export default class CreateArtID extends Component {
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

	 createArt =(e) => {
			e.preventDefault();
			this.props.history.push('/artist/catalog')
		}
	
	render() {
		let {context,updateContext} 	= this.context;
        return (
			<section id="artistinfo-sec">
			<div className="container">
			<form>
			   <div className="grid-row">
				<div className="flex-cols form-heaad">
				   <h2 className="h2">Create ArtID</h2>
				   <hr/>
				 </div>	
				 <div className="flex-cols information">
					<h4 className="h4">Artist Information</h4>
					<p className="text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quas et quasi architecto beatae vitae dicta sunt explicabo.</p>
				 </div>
				 </div>
				 <div className="grid-row uploadsec">
				 <div className="flex-cols left-cols">
				   <label>Profile Photo</label>
				   <div className="profile-wraper">
					 <div className="profile-pics">
					   <img src={Avatar}/>
					 </div>
					 <div className="upload-form-sec">
					 <div className="form-group">
						   <input style={{display:"none"}} type="file" name="file" id="file" className="inputfile"/>
						   <label className="upload-file" htmlFor="file">Upload Profile Photo</label>
						</div>
					 </div>	
				   </div>
				 </div>
				 <div className="flex-cols right-cols">
					<div className="form-group">
						<label htmlFor="rname">Real Name</label>
						<input type="text" className="form-control" placeholder="Real Name" id="rname" value="Enzo Rossi"/>
					</div>
					<div className="form-group">
						<label htmlFor="aname">Artist Name</label>
						<input type="text" className="form-control" placeholder="Artist Name" id="aname" value="Enzo Rossi"/>
					</div>
					<div className="form-group">
						<label htmlFor="website">Website</label>
						<input type="text" className="form-control" placeholder="Website" id="website" value=""/>
					</div>
				 </div>
				 </div>
				 <div className="grid-row street-row form-row">
				 <div className="flex-cols">
				   <div className="form-group">
						<label htmlFor="address">Street Address</label>
						<input type="text" className="form-control" placeholder="Address" id="address" value=""/>
					</div>
				 </div>
				 <div className="flex-cols">
				   <div className="form-group">
						<label htmlFor="address">Street Address</label>
						<select className="form-control" required="">
						  <option value="" disabled="" selected="">NY</option>
						  <option value="">NY</option>
						</select>
						<i className="fa fa-caret-down" aria-hidden="true"></i>
					</div>
				 </div>
				 <div className="flex-cols">
				   <div className="form-group">
						<label htmlFor="zip">Zip</label>
						<input type="text" className="form-control" placeholder="00000" id="zip" value=""/>
					</div>
				 </div>
				 </div>
				 <div className="grid-row form-row">
				 <div className="flex-cols">
				   <div className="form-group">
						<label htmlFor="Tax">Tax ID</label>
						<input type="text" className="form-control" placeholder="Tax ID" id="Tax" value=""/>
					</div>
				 </div>
				 </div>
				 <div className="grid-row form-row">
				 <div className="flex-cols">
				   <div className="form-group">
						<label htmlFor="url1">Social Media Link #1</label>
						<input type="text" className="form-control" placeholder="Link social media URL" id="ulr1" value=""/>
					</div>
				 </div>
				 <div className="flex-cols">
				   <div className="form-group">
						<label htmlFor="url2">Social Media Link #2</label>
						<input type="text" className="form-control" placeholder="Tax ID" id="url2" value=""/>
					</div>
				 </div>
				 </div>
				 <div className="grid-row form-row">
				 <div className="flex-cols">
					<div className="form-group">
						<label htmlFor="bio">Artist Bio</label>
						<textarea className="form-control" placeholder="Artist Bio"></textarea>
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
						  <button type="submit" className="btn btn-block" onClick={this.createArt.bind(this)}>Create ArtID</button>
					   </div>
					</div>
				  </div>
			  </form></div>
			</section>
			);
    }
}