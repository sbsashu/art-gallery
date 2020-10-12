import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import {isEmpty } from 'config/functions';
import { UPLOAD_URL, PUBLIC_URL } from 'config/constants';
import {ProviderContext} from 'views/common/CommonContext';
import File from '../../../../assets/images/File.png'
import Move from '../../../../assets/images/Move.png'

export default class VerifyAndSign extends Component {
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
        this.props.history.push("/artist/publish/artist/page")
    }
    
	render() {
		let {context,updateContext} = this.context;
        return (
            <section id="artistinfo-sec" className="secure-upload">
            <div className="container">
            <form>
               <div className="grid-row">
                <div className="flex-cols form-heaad">
                   <h2 className="h2">Add Public Page / The Master - 10th Anniversary</h2>
                 </div>	
                 <div className="flex-cols">
                   <div className="progress four-circle">
                     <div className="circle first active"></div>
                     <div className="circle second active"></div>
                     <div className="circle third active"></div>
                     <div className="circle fourth"></div>
                   </div>
                 </div>
                 <div className="flex-cols information">
                    <h4 className="h4">Assets &amp; Images</h4>
                    <p className="text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quas et quasi architecto beatae vitae dicta sunt explicabo.</p>
                 </div>
                 </div>
                 <div className="grid-row">
                   <div className="flex-cols">
                     <div className="secure-upload-wraper">
                       <div className="upload-area">
                         <img src={File} />
                         <p className="upload-text">Upload File or Drop Files Here</p>
                       </div>
                       <div className="form-group">
                           <input type="file" name="file" id="file" className="inputfile" />
                           <label className="upload-file" for="file">Browse</label>
                        </div>
                     </div>
                   </div>
                 </div>
                 <div className="grid-row action-row">
                    <div className="flex-cols numbering">
                      <div className="wraper" style={{textAlign: "center"}}>
                        <span className="indexing">1</span>
                     </div>
                    </div>
                    <div className="flex-cols action">
                      <div className="wraper">
                        <div className="left-cols">
                          <div className="image-name">goodthings.jpeg</div>
                        </div>
                        <div className="right-cols">
                          <ul className="list-inline">
                             <li className="list-item"><a href="#" className="list-item-link remove">Remove</a></li>
                             <li className="list-item"><a href="#" className="list-item-link view">View</a></li>
                             <li className="list-item"><a href="#" className="list-item-link menu-btn"><img src={Move} /></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                 </div>
                 <div className="grid-row action-row">
                    <div className="flex-cols numbering">
                      <div className="wraper" style={{textAlign: "center"}}>
                        <span className="indexing">2</span>
                     </div>
                    </div>
                    <div className="flex-cols action">
                      <div className="wraper">
                        <div className="left-cols">
                          <div className="image-name">goodthings.jpeg</div>
                        </div>
                        <div className="right-cols">
                          <ul className="list-inline">
                             <li className="list-item"><a href="#" className="list-item-link remove">Remove</a></li>
                             <li className="list-item"><a href="#" className="list-item-link view">View</a></li>
                             <li className="list-item"><a href="#" className="list-item-link menu-btn"><img src={Move} /></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                 </div>
                 <div className="grid-row action-row">
                    <div className="flex-cols numbering">
                      <div className="wraper" style={{textAlign: "center"}}>
                        <span className="indexing">3</span>
                     </div>
                    </div>
                    <div className="flex-cols action">
                      <div className="wraper">
                        <div className="left-cols">
                          <div className="image-name">goodthings.jpeg</div>
                        </div>
                        <div className="right-cols">
                          <ul className="list-inline">
                             <li className="list-item"><a href="#" className="list-item-link remove">Remove</a></li>
                             <li className="list-item"><a href="#" className="list-item-link view">View</a></li>
                             <li className="list-item"><a href="#" className="list-item-link menu-btn"><img src={Move} /></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                 </div>
                  <div className="grid-row form-row btn-sec mx-margin">
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
              </form>
              </div>
            </section>
			);
    }
}