import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import {isEmpty } from 'config/functions';
import { UPLOAD_URL, PUBLIC_URL } from 'config/constants';
import {ProviderContext} from 'views/common/CommonContext';
import ProfilePic from '../../../../assets/images/profile-pics.jpeg'

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
        this.props.history.push("/artist/public/page/assets")
    }
    
	render() {
		let {context,updateContext} 	= this.context;
        return (
            <section id="artistinfo-sec">
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
                            <div className="circle third"></div>
                            <div className="circle fourth"></div>
                        </div>
                        </div>
                        <div className="flex-cols information">
                            <h4 className="h4">Artist Information</h4>
                            <p className="text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quas et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        </div>
                        </div>
                        <div className="grid-row uploadsec">
                        <div className="flex-cols left-cols">
                        <label>Profile Photo</label>
                        <div className="profile-wraper">
                            <div className="profile-pics">
                            <img src={ProfilePic} />
                            </div>
                            <div className="upload-form-sec">
                            <div className="form-group">
                                <input style={{display: "none"}} type="file" name="file" id="file" className="inputfile" />
                                <label className="upload-file" for="file">Upload Profile Photo</label>
                                </div>
                            </div>	
                        </div>
                        </div>
                        <div className="flex-cols right-cols">
                            <div className="form-group">
                                <label for="rname">Real Name</label>
                                <input type="text" className="form-control" placeholder="Real Name" id="rname" value="Enzo Rossi" />
                            </div>
                            <div className="form-group">
                                <label for="aname">Artist Name</label>
                                <input type="text" className="form-control" placeholder="Artist Name" id="aname" value="Enzo Rossi" />
                            </div>
                            <div className="form-group">
                                <label for="website">Website</label>
                                <input type="text" className="form-control" placeholder="Website" id="website" value="" />
                            </div>
                        </div>
                        </div>
                        <div className="grid-row form-row">
                        <div className="flex-cols artist-pubish-bio">
                            <div className="form-group">
                                <label for="bio">Artist Bio</label>
                                <textarea className="form-control" placeholder="Artist Bio">Interdisciplinary artist working in print, fiber, sculpture and installation. Her work draws on the familiarity of pattern, decoration, garments and domestic materials.</textarea>
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