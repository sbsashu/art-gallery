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
	}
	addEdition = (e) => {
		e.preventDefault();
		this.props.history.push('/artist/add/edition')
	}
	render() {
		let {context,updateContext} 	= this.context;
		
        return (
			<div>
			<section id="welcome-backsec">
			<div className="container-expand">
			  <div className="grid-row">
				 <div className="flex-cols left-cols">
					<div className="wraper">
					   <h4 className="h4">Welcome Back, Enzo</h4>
					   <p className="text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremqu</p>
					</div>
				 </div>
				 <div className="flex-cols right-cols">
					<div className="wraper">
					   <div className="cols">
						 <p className="price">0</p>
						 <p className="title">Visitors</p>
					   </div>
					   <div className="cols">
						 <p className="price">$0</p>
						 <p className="title">Sales</p>
					   </div>
					   <div className="cols">
						 <p className="price">$0</p>
						 <p className="title">In Comission</p>
					   </div>
					</div>
				 </div>
			  </div>
			</div>
		  </section>
		  <section id="catalog-sec">
			<div className="container-expand">
			  <div className="grid-row header">
				 <div className="flex-cols left-cols">
					<h4 className="h4">Catalog</h4>
				 </div>
				  <div className="flex-cols right-cols">
					<button className="icon-btn"><i className="fa fa-plus" aria-hidden="true"></i></button>
				 </div>
			  </div>

			  {/* AFTER ADD ON ART WORK FROM ARTIST TO-DO */}
			{localStorage.getItem('catalog') ? <div className="grid-row artwork">
			<div className="flex-cols">
				<div className="wraper add-edition">
					<div className="left-cols">
					<h4 className="h4">The Master</h4>
					<p className="text">The inspiration came from the treemap type diagrams. I implemented a procedure in Houdini, that takes a rectangle and splits it vertically.</p>
					<div className="artist-id-sec">
						<div className="id-detail">
						<p className="id-head">Artist ID</p>
						<p className="id-text">#231231</p>
						</div>
						<div className="id-detail">
						<p className="id-head">Artist ID</p>
						<p className="id-text">#231231</p>
						</div>

					</div>
					</div>
					<div className="right-cols">
						<button type="button" className="btn" onClick={this.addEdition.bind(this)}>Add Edition</button>
					</div>
					{localStorage.getItem('edition-add') &&
								<div className="edition-detail">
									 <h5 className="h5">Editons</h5>
									 <div className="white-box">
									   <div className="detail-text">
										 <p className="text">The Master - 10th Anniversary</p>
									   </div>
									   <div className="view-detail">
										 {localStorage.getItem('publish') && 
													<span class="comission-text">In Comission 
													<label class="comission-label">
													<input type="checkbox" class="form-control" name="" value="7pm"/>
													<span> </span>
													</label>
												</span> 
											}
										 <Link to="/artist/view/edition" className="btn">View Details</Link>
									   </div>
									 </div>
								</div>
					}
				</div>
			</div>
			</div> :
					<div className="grid-row artwork">
					<div className="flex-cols">
					<div className="wraper">
						<p className="noart-text">No ART ADDED </p>
						<Link to="/artist/art-work/details" className="btn">Add Artwork</Link>
					</div>
					</div>
				</div>
			}
			</div>
		  </section>
		  </div>
			);
    }
}