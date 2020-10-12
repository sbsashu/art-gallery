import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import {isEmpty } from 'config/functions';
import { UPLOAD_URL, PUBLIC_URL } from 'config/constants';
import {ProviderContext} from 'views/common/CommonContext';
import bIcon from '../../../../assets/images/bIcon.png'

export default class VerifyAndSign extends Component {
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
            <section id="catalog-sec">
            <div className="container-expand">
              <div className="grid-row back-row">
                <div className="flex-cols"><Link to="/artist/catalog" className="back-btn"><img src={bIcon} /></Link> <span>Back</span></div>
              </div>
              <div className="grid-row artwork">
                 <div className="flex-cols">
                   <div className="wraper add-edition">
                       <div className="left-cols">
                         <h4 className="h4">The Master</h4>
                         <p className="sm-text">By Enzo Rossi | Created in Rome, Italy</p>
                         <p className="text">The inspiration came from the treemap type diagrams. I implemented a procedure in Houdini, that takes a rectangle and splits it vertically.</p>
                         <div className="artist-id-sec">
                           <div className="id-detail">
                             <p className="id-head">Edition ID</p>
                             <p className="id-text">#21341</p>
                           </div>
                           <div className="id-detail">
                             <p className="id-head">Quantity</p>
                             <p className="id-text">5</p>
                           </div>
                           <div className="id-detail">
                             <p className="id-head">Sold</p>
                             <p className="id-text">0/1,000</p>
                           </div>
                         </div>
                       </div>
                      {localStorage.getItem('publish') ? (			 
                                <div class="right-cols vertical-show">
                                  <div class="btns-wraper">
                                  <span class="comission-text">In Comission 
                                    <label class="comission-label">
                                    <input type="checkbox" class="form-control" name="" value="7pm" />
                                    <span> </span>
                                    </label>
                                  </span> 
                                  <a href="#" class="btn btn-green">Sell</a>
                                </div>
                                <div class="btns-wraper"><a href="#" class="btn btn-red">Unpublish</a></div>
                              </div>
                              ) :  (
                                <div class="right-cols">
                                <Link to="/artist/add/public/page" class="btn btn-green">Add Public Page</Link>
                              </div>
                          )}
                          {localStorage.getItem('publish') &&
                                  <div className="edition-detail share-detail">
                                  <h5 className="h5">Private Share</h5>
                                <div className="white-box">
                                  <div className="detail-text">
                                    <p className="text">www.saatchiart.com/themaster/enzorossie/private/edition1/#id232332</p>
                                  </div>
                                  <div className="view-detail">
                                    <a href="#" className="btn btn-black">Preview</a>
                                  <a href="#" className="btn">Copy Link</a>
                                  </div>
                                </div>
                              </div>
                          }
                   </div>
                 </div>
              </div>
            </div>
          </section>
			);
    }
}