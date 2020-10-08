import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import {isEmpty } from 'config/functions';
import { UPLOAD_URL, PUBLIC_URL } from 'config/constants';
import {ProviderContext} from 'views/common/CommonContext';

export default class GetStarted extends Component {
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
						<div className="col-md-4 mt-5">
							<h2>Artist Catalog</h2>
							<p>Let’s Get Started</p>
							<Link className="btn-block btn btn-primary bg-dark border-dark" to="/artist/create-artID">Create ArtID</Link>
						</div>
					</div>
				</div>
            </div>
			);
    }
}