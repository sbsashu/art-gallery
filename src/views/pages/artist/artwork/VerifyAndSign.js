import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import {isEmpty } from 'config/functions';
import { UPLOAD_URL, PUBLIC_URL } from 'config/constants';
import {ProviderContext} from 'views/common/CommonContext';

export default class VerifyAndSign extends Component {
	static contextType = ProviderContext;	
    constructor(props) {
		super(props);
		this.chartRef = React.createRef();
		this.state = {
		  "participantCount" : 0,
		};
		console.log("context","dddd");
	}
	
	render() {
		let {context,updateContext} 	= this.context;
        return (
			<div id="content">
				<div className="container">
					<div className="row">
						<div className="col-md-12 mt-5">
							<h2>Add Artwork</h2><hr/>
							<h4>Verify and sign</h4>
							<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quas et quasi architecto beatae vitae dicta sunt explicabo.</p>
						</div>
					</div>
					<div className="row mb-2">
						<div className="col-md-12 pt-5 pb-5 bg-light">
							<div className=" text-center">
								<em>Signature</em>
							</div>
						</div>
					</div>
					<div className="row mt-3 mb-4">
						<div className="col-md-6">
							<div className="form-button-set signup-buttonset">
								<Link className="btn-block btn text-dark bg-transparent border-dark" to="/artist/art-work/upload">Cancel</Link>
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-button-set signup-buttonset">
								<Link className="btn-block btn btn-primary bg-dark border-dark" to="/artist/art-work/catalog">Sign & Create</Link>
							</div>
						</div>
					</div>
				</div>
            </div>
			);
    }
}