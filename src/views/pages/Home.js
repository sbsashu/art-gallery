import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import BaseImage from '../../assets/images/Base.jpg'

export default class Home extends Component {
	
    constructor(props) {
        super(props);
		let {REACT_APP_BASE_URL,REACT_APP_HOME_URL}	= process.env;
		if( REACT_APP_BASE_URL != REACT_APP_HOME_URL ){
			window.location = REACT_APP_HOME_URL;
		}
    }

    render() {
        return (
            <section id="sign-upsec">
            <div className="container-fluid">
            <div className="grid-row">
                <div className="flex-cols left-sec">
                <div id="demo" className="carousel slide" data-ride="carousel">
                    <ul className="carousel-indicators">
                        <li data-target="#demo" data-slide-to="0" className="active"></li>
                        <li data-target="#demo" data-slide-to="1"></li>
                        <li data-target="#demo" data-slide-to="2"></li>
                    </ul>
                    <div className="carousel-inner">
                        <div className="carousel-item active ">
                        <div className="overlay">
                            <h4 className="h4">FOR ARTIST</h4>
                        <div className="pragraph">
                            <p className="lg-text">All your art in one place</p>
                            <p className="sm-text">ArtID allows you to catalog, sell, and distribute your 
                            digital artwork rights to galleries, museums and 
                            collectors around the world.</p>
                    </div>
                    </div>
                        <img src={BaseImage} className="d-block"/>
                        </div>
                        <div className="carousel-item">
                        <div className="overlay">
                            <h4 className="h4">FOR ARTIST</h4>
                        <div className="pragraph">
                            <p className="lg-text">All your art in one place</p>
                            <p className="sm-text">ArtID allows you to catalog, sell, and distribute your 
                            digital artwork rights to galleries, museums and 
                            collectors around the world.</p>
                        </div>
                        </div>
                        <img src={BaseImage} className="d-block" />
                        </div>
                        <div className="carousel-item">
                        <div className="overlay">
                            <h4 className="h4">FOR ARTIST</h4>
                        <div className="pragraph">
                            <p className="lg-text">All your art in one place</p>
                            <p className="sm-text">ArtID allows you to catalog, sell, and distribute your 
                            digital artwork rights to galleries, museums and 
                            collectors around the world.</p>
                        </div>
                        </div>
                        <img src={BaseImage} className="d-block"/>
                        </div>
                    </div>
                    {/* <!--<a className="carousel-control-prev" href="#demo" data-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </a>
                    <a className="carousel-control-next" href="#demo" data-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </a>--> */}
                    </div>
                </div>  
                <div className="flex-cols right-sec">
                    <h4 className="h4">BC/A</h4>
                    <div className="form-wraper">
                        <div className="signup-formsec">
                        <h2 className="h3">Reserve your ArtID</h2>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Email" id="email" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Password" id="password" />
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Confirm Password" id="confirm-password"/>
                        </div>
                        {/* <div className="form-group call-group">
                            <div className="input-cols select">
                            <select className="form-control" id="email">
                                <option className="value"> +1 </option>
                                <option className="value"> +1 </option>
                            </select>
                            <i className="fa fa-angle-down" aria-hidden="true"></i>
                            </div>
                            <div className="input-cols phone">
                            <input type="text" className="form-control" placeholder="phone" id="phonr"/>
                            </div>
                        </div> */}
                        <div className="form-group">
                            <button type="submit" className="btn">Sign Up</button>
                        </div>
                        </div>
                    </div>
                    <p className="signup-footer">Already have an account? <Link to="/artist/get-started">Log In</Link></p>
                </div>
            </div>
            </div>
            </section>        
)}
}
