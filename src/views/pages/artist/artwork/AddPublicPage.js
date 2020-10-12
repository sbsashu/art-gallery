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
  
  onContinue = (e) => {
    e.preventDefault();
    this.props.history.push("/artist/public/page/info")
  }
	
	render() {
		let {context,updateContext} 	= this.context;
        return (
          <section id="artistinfo-sec" className="artwork-sec">
                <div className="container">
                <form>
                  <div className="grid-row">
                    <div className="flex-cols form-heaad">
                    <h2 className="h2">Add Public Page / The Master - 10th Anniversary</h2>
                  </div>	
                  <div className="flex-cols">
                    <div className="progress four-circle">
                      <div className="circle first active"></div>
                    <div className="circle second"></div>
                    <div className="circle third"></div>
                    <div className="circle fourth"></div>
                    </div>
                  </div>
                    <div className="flex-cols information">
                      <h4 className="h4">Art information</h4>
                    <p className="text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quas et quasi architecto beatae vitae dicta sunt explicabo.</p>
                  </div>
                  </div>
                  <div className="grid-row form-cols-2">
                  <div className="flex-cols left-cols">
                    <div className="form-group">
                      <label for="edition">Title</label>
                      <input type="text" className="form-control" placeholder="The Master - 10th Anniversary" name="title" value="The Master - 10th Anniversary" />
                    </div>
                  </div>
                  <div className="flex-cols right-cols">
                      <div className="form-group">
                      <label for="edition-no">Price</label>
                      <input type="text" className="form-control" placeholder="$5,500" name="edition-no" value="$5,500" />
                    </div>
                  </div>
                  </div>
                  
                  <div className="grid-row form-row">
                  <div className="flex-cols">
                      <div className="form-group">
                      <label for="commentary">Artist Commentary</label>
                      <textarea className="form-control" placeholder="">The inspiration came from the treemap type diagrams. I implemented a procedure in Houdini, that takes a rectangle and splits it vertically.</textarea>
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