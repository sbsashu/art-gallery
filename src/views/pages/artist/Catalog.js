import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import {isEmpty } from 'config/functions';
import { UPLOAD_URL, PUBLIC_URL } from 'config/constants';
import {ProviderContext} from 'views/common/CommonContext';

export default class Catalog extends Component {
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
					<div className="row mt-5">
						<div className="col-md-4">
							<h3>Welcome Back, Enzo</h3>
							<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremqu</p>
						</div>
						<div className="col-md-8">
							<div className="text-right">
								<h2>$0</h2>
								<p>Sales</p>
							</div>
						</div>
					</div>
					<div className="row mt-4">
						<div className="col-md-4">
							<h5>Catalog</h5>
						</div>
						<div className="col-md-8">
							<div className="text-right">
								<Link className="btn btn-primary bg-dark border-dark" to="/artist/art-work/details">+</Link>
							</div>
						</div>
					</div>
					<div className="row mb-2">
						<div className="col-md-12 pt-5 pb-5 bg-light">
							<div className=" text-center">
								<p>No Art Added</p>
								<Link className="btn btn-primary bg-dark border-dark" to="/artist/art-work/details">Add Artwork</Link>
							</div>
						</div>
					</div>
				</div>
            </div>
			);
    }
}