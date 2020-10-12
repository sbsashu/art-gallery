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
	
	onVerify = (e) => {
		e.preventDefault();
        this.props.history.push("/artist/sign/verify")
	}

	render() {
		let {context,updateContext} 	= this.context;
        return (
            <section id="artistinfo-sec" className="artwork-sec">
            <div className="container">
            <form>
               <div className="grid-row">
                <div className="flex-cols form-heaad">
                   <h2 className="h2">Add Editon / The Master</h2>
                 </div>	
                 <div className="flex-cols">
                   <div className="progress">
                     <div className="circle first active"></div>
                     <div className="circle third"></div>
                   </div>
                 </div>
                 <div className="flex-cols information">
                    <h4 className="h4">Edition information</h4>
                    <p className="text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quas et quasi architecto beatae vitae dicta sunt explicabo.</p>
                 </div>
                 </div>
                 <div className="grid-row form-cols-2">
                 <div className="flex-cols left-cols">
                   <div className="form-group">
                        <label for="edition">Edition Title</label>
                        <input type="text" className="form-control" placeholder="What is the name of the edition" name="edition" value=""/>
                    </div>
                 </div>
                 <div className="flex-cols right-cols">
                    <div className="form-group">
                        <label for="edition-no">Number of Editions</label>
                        <input type="text" className="form-control" placeholder="Enter number of editions" name="edition-no" value=""/>
                    </div>
                 </div>
                 </div>
                 <div className="grid-row form-row">
                 <div className="flex-cols">
                   <div className="form-group">
                        <label for="place">Place of Creation</label>
                        <input type="text" className="form-control" placeholder="Where was this piece created" name="place" value=""/>
                    </div>
                 </div>
                 </div>
                 <div className="grid-row form-row">
                 <div className="flex-cols">
                    <div className="form-group">
                        <label for="commentary">Artist Commentary</label>
                        <textarea className="form-control" placeholder="Add your personal commentary"></textarea>
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
                          <button type="submit" className="btn btn-block" onClick={this.onVerify.bind(this)}>Continue</button>
                       </div>
                    </div>
                  </div>
              </form></div>
               
            
            </section>
			);
    }
}