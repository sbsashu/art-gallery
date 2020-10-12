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
	
	onContinue = (e) => {
		e.preventDefault(); 
        this.props.history.push("artist/catalog")
        localStorage.setItem('edition-add', true)
		
	}

	render() {
		let {context,updateContext} 	= this.context;
        return (
            <section id="artistinfo-sec" className="secure-upload">
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
                        <h4 className="h4">Verify and sign</h4>
                        <p className="text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quas et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    </div>
                    </div>
                    <div className="grid-row">
                    <div className="flex-cols">
                        <div className="sign-wraper">
                            <div className="sign-box">
                            <input type="text" className="form-control sign" value="Enza Rossi" />
                            </div>
                            <div className="form-group">
                            <button type="reset" className="btn-clear">Clear</button>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="grid-row">
                    <div className="flex-cols">
                        <p className="terms-text"><span className="check"><input type="checkbox" /></span>I agree and consent to the <a href="#">Terms &amp; Conditions</a></p>
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
                </form></div>
            
                </section>
			);
    }
}