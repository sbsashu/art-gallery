import React, {Component} from 'react';
import { Link} from 'react-router-dom';

export default class AdminDashboard extends Component {
	
    constructor(props) {
		super(props);
		this.state = {
		  "providerCount" : 0,
		   "labelText":'Sessions',
		};
	}
	
	render() {
        return (
			<div id="content">
				<div className="container-fluid-wrap">
					<div className="row no-gutters1">
                        <div className="col-xl-8 col-lg-7">
                            Admin Dashboard
						</div>
					</div>
				</div>
            </div>
			);
    }
}