import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import {isEmpty } from 'config/functions';
import { UPLOAD_URL, PUBLIC_URL } from 'config/constants';
import {ProviderContext} from 'views/common/CommonContext';
import File from '../../../../assets/images/File.png'
export default class Upload extends Component {
	static contextType = ProviderContext;	
    constructor(props) {
		super(props);
		this.chartRef = React.createRef();
		this.state = {
		  "participantCount" : 0,
		};
	}
	
	onContinue = (e) => {
		e.preventDefault();
		this.props.history.push("/artist/art-work/verify-sign")
	}
	render() {
		let {context,updateContext} 	= this.context;
        return (
			<section id="artistinfo-sec" class="secure-upload">
			<div class="container">
			<form>
			   <div class="grid-row">
				<div class="flex-cols form-heaad">
				   <h2 class="h2">Add Artwork</h2>
				 </div>	
				 <div class="flex-cols">
				   <div class="progress">
					 <div class="circle first active"></div>
					 <div class="circle second active"></div>
					 <div class="circle third"></div>
				   </div>
				 </div>
				 <div class="flex-cols information">
					<h4 class="h4">Upload to secure vault</h4>
					<p class="text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quas et quasi architecto beatae vitae dicta sunt explicabo.</p>
				 </div>
				 </div>
				 <div class="grid-row">
				   <div class="flex-cols">
					 <div class="secure-upload-wraper">
					   <div class="upload-area">
						 <img src={File} />
						 <p class="upload-text">Upload File or Drop Files Here</p>
					   </div>
					   <div class="form-group">
						   <input type="file" name="file" id="file" class="inputfile" />
						   <label class="upload-file" for="file">Browse</label>
						</div>
					 </div>
				   </div>
				 </div>
				  <div class="grid-row form-row btn-sec">
					<div class="flex-cols">
						<div class="form-group">
						  <button type="button" class="btn btn-block cancel">Cancel</button>
					   </div>
					</div>
					<div class="flex-cols">
					  <div class="form-group">
						  <button type="button" class="btn btn-block continue" onClick={this.onContinue.bind(this)}>Continue</button>
					   </div>
					</div>
				  </div>
			  </form></div>
			</section>
			);
    }
}