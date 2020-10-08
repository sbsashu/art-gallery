import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import {isEmpty } from 'config/functions';
import { UPLOAD_URL, PUBLIC_URL } from 'config/constants';
import {ProviderContext} from 'views/common/CommonContext';
import { Form, Button } from 'react-bootstrap';
import SimpleReactValidator from 'simple-react-validator';

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
	
	render() {
		let {context,updateContext} 	= this.context;
        return (
			<div id="content">
				<div className="container">
					<div className="row">
						<div className="col-md-12 mt-5">
							<h2>Create ArtID</h2>
							<Form onSubmit={this.handleSubmit} className="form-signin registerartionStep">
								<div className="row">
									<div className="col-md-6">
										<div className="form-label-group">
											<Form.Label className="control-label">Real Name: </Form.Label>
											<Form.Control
											  type="text"
											  name="fullName"
											  autoFocus={true}
											  value={this.state.fullName}
											  placeholder="Real Name"
											  onChange={this.handleChange}/>
											  {this.validator.message('fullName', this.state.fullName, 'required',{'className':'text-danger mx-3'})}	 
										</div>
									</div>
									<div className="col-md-6">
										<div className="form-label-group">
											<Form.Label className="control-label">Artist Name </Form.Label>
											<Form.Control
											  type="text"
											  name="occupation"
											  placeholder="Artist Name"
											  value={this.state.occupation}
											  onChange={this.handleChange}/>
											  {this.validator.message('Title', this.state.occupation, 'required',{'className':'text-danger mx-3'})}		 
										</div>
									</div>
								</div>
								<div className="row mt-3">
									<div className="col-md-6">
										<div className="form-button-set signup-buttonset">
											<Link className="btn-block btn text-dark bg-transparent border-dark" to="/artist/get-started">Cancel</Link>
										</div>
									</div>
									<div className="col-md-6">
										<div className="form-button-set signup-buttonset">
											<Link className="btn-block btn btn-primary bg-dark border-dark" to="/artist/catalog">Create ArtID</Link>
										</div>
									</div>
								</div>
							</Form>
						</div>
					</div>
				</div>
            </div>
			);
    }
}