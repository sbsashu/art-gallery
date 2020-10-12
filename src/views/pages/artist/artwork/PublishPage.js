import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import {isEmpty } from 'config/functions';
import { UPLOAD_URL, PUBLIC_URL } from 'config/constants';
import {ProviderContext} from 'views/common/CommonContext';
import Logo from '../../../../assets/images/Logo.png';
import Banner from '../../../../assets/images/Base-banner.png';
import SmBase from '../../../../assets/images/sm-base.png';
import ProfilePic from '../../../../assets/images/profile-pics.jpeg';
import Image from '../../../../assets/images/Image.png';
import Art from '../../../../assets/images/art1.png';


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
        this.props.history.push("/artist/catalog");
        localStorage.setItem("publish", true);
    }
    
	render() {
		let {context,updateContext} = this.context;
        return (
            <div>
            <header id="publish-header">
            <div className="grid-row">
                <div className="flex-cols left-cols">
                <p className="prev-text">Preview</p>
                </div>
                <div className="flex-cols right-cols">
                <a href="#" className="btn edit-btn">Back to Edit</a>
                <Link href="#" className="btn btn-green publish" onClick={this.onContinue.bind(this)}>Publish</Link>
                </div>
            </div>
            </header>
             <section id="art-heading-sec">
                <div className="">
                    <div className="grid-row">
                    <div className="flex-cols">
                        <h2 className="h2"><img src={Logo} /></h2>
                    </div>
                    </div>
                </div>
                </section>
                <section id="art-banner">
                <div className="">
                    <div className="grid-row">
                    <div className="flex-cols">
                        <div className="banner">
                        {/* <!--<div className="banner"><img src="images/Base.png" className="banner-img"></div>--> */}
                        <div id="slider-banner" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active ">
                            <img src={Banner} className="d-block" />
                            </div>
                            <div className="carousel-item">
                            <img src={Banner} className="d-block" />
                            </div>
                            <div className="carousel-item">
                            <img src={Banner} className="d-block" />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#slider-banner" data-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                        </a>
                        <a className="carousel-control-next" href="#slider-banner" data-slide="next">
                            <span className="carousel-control-next-icon"></span>
                        </a>

                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
                <section id="indicators">
                <div className="grid-row" style={{position: "relative"}}>
                    {/* <!-- Indicators -->
                        <!--<ul className="carousel-indicators">
                            <li data-target="#slider-banner" data-slide-to="0" className="active"><img src="images/sm-base.png"></li>
                            <li data-target="#slider-banner" data-slide-to="1"><img src="images/sm-base.png"></li>
                            <li data-target="#slider-banner" data-slide-to="2"></li>
                        </ul>--> */}
                    <div className="flex-cols">
                    <ul className="indicators-row">
                        <li><a href="#"><img src={SmBase} /></a></li>
                        <li><a href="#"><img src={SmBase} /></a></li>
                        <li><a href="#"><img src={SmBase} /></a></li>
                        <li><a href="#"><img src={SmBase} /></a></li>
                    </ul>
                    </div>	  
                </div>
                </section>
                <section id="publish-art-sec">
                <div className="container">
                    <div className="grid-row buyart">
                    <div className="flex-cols left-cols">
                        <p className="price">$5,500.00</p>
                        <p className="sm-text">Excluding 10% Comission</p>
                    </div>
                    <div className="flex-cols right-cols">
                        <a href="" className="btn buy-btn">Buy Art</a>
                    </div>
                    </div>
                    <div className="grid-row border-line">
                    <div className="flex-cols"><hr/></div>
                    </div>
                    <div className="grid-row master-detail-row">
                    <div className="flex-cols left-cols">
                        <h4 className="h4">The Master - 10th Anniversary</h4>
                        <p className="title">By <span>Enzo Rossi</span></p>
                        <p className="detail-text">
                        The inspiration came from the treemap type diagrams. I implemented a procedure in Houdini, that takes a rectangle and splits it vertically and then horizontally. The number of splits is randomly selected from a given max. The outcome is fed to the loop, again and again, depending on the number of user defined iterations.
                        </p>
                        <p className="text">#painting, #art, #digital, #abstract, #contemporary</p>
                    </div>
                    <div className="flex-cols right-cols">
                        <div className="cols-detail">
                        <div className="wraper">
                            <p className="price-id">ART PIECE ID<br /><span>#837216</span></p>
                        </div>
                        </div>
                        <div className="cols-detail">
                        <div className="wraper">
                            <p className="price-id">ART PIECE ID<br /><span>#837216</span></p>
                        </div>
                        </div>
                        <div className="cols-detail">
                        <div className="wraper">
                            <p className="price-id">ART PIECE ID<br /><span>#837216</span></p>
                        </div>
                        </div>
                        <div className="cols-detail">
                        <div className="wraper">
                            <p className="price-id">ART PIECE ID<br /><span>#837216</span></p>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="grid-row border-line">
                    <div className="flex-cols"><hr /></div>
                    </div>
                    <div className="grid-row profile-row">
                        <div className="flex-cols">
                        <div className="profile-wraper">
                            <img src={ProfilePic} />
                        </div>
                        </div>
                        <div className="flex-cols">
                        <h4 className="h4">Enzo Rossi</h4>
                        <p className="place">Verona, Italy</p>
                        <p className="detail-text">Interdisciplinary artist working in print, fiber, sculpture and installation. Her work draws on the familiarity of pattern, decoration, garments and domestic materials. By gently subverting motifs, spaces and objects reminiscent of comfort, warmth and functionality.</p>
                        </div>
                    </div>
                    <div className="slider-sec">
                    <div className="slider-head"><span>More from Enzo</span><span className="view"><a href="#" className="view-link">View All</a></span></div>
                    <div className="owl-carousel owl-theme">
                            <div className="item">
                            <div className="img-wraper"><img src={Image} /></div>
                            <div className="img-detail">
                                <p className="name">Powerhouse</p> 
                                <p className="price">$500.00</p>
                            </div>
                            </div>
                            <div className="item">
                            <div className="img-wraper"><img src={Art} /></div>
                            <div className="img-detail">
                                <p className="name">Liquid Ooz</p> 
                                <p className="price">$450.00</p>
                            </div>
                            </div>
                            <div className="item">
                            <div className="img-wraper"><img src={Image} /></div>
                            <div className="img-detail">
                                <p className="name">Star Smoke</p> 
                                <p className="price">$300.00</p>
                            </div>
                            </div>
                            <div className="item">
                            <div className="img-wraper"><img src={Image} /></div>
                            <div className="img-detail">
                                <p className="name">Square 212</p> 
                                <p className="price">$100.00</p>
                            </div>
                            </div>
                            <div className="item">
                            <div className="img-wraper"><img src={Image} /></div>
                            <div className="img-detail">
                                <p className="name">Powerhouse</p> 
                                <p className="price">$500.00</p>
                            </div>
                            </div>
                            <div className="item">
                            <div className="img-wraper"><img src={Image} /></div>
                            <div className="img-detail">
                                <p className="name">Powerhouse</p> 
                                <p className="price">$500.00</p>
                            </div>
                            </div>
                            <div className="item">
                            <div className="img-wraper"><img src={Image} /></div>
                            <div className="img-detail">
                                <p className="name">Powerhouse</p> 
                                <p className="price">$500.00</p>
                            </div>
                            </div>
                            <div className="item">
                            <div className="img-wraper"><img src={Image} /></div>
                            <div className="img-detail">
                                <p className="name">Powerhouse</p> 
                                <p className="price">$500.00</p>
                            </div>
                            </div>
                            <div className="item">
                            <div className="img-wraper"><img src={Image} /></div>
                            <div className="img-detail">
                                <p className="name">Powerhouse</p> 
                                <p className="price">$500.00</p>
                            </div>
                            </div>
                            <div className="item">
                            <div className="img-wraper"><img src={Image} /></div>
                            <div className="img-detail">
                                <p className="name">Powerhouse</p> 
                                <p className="price">$500.00</p>
                            </div>
                            </div>
                            <div className="item">
                            <div className="img-wraper"><img src={Image} /></div>
                            <div className="img-detail">
                                <p className="name">Powerhouse</p> 
                                <p className="price">$500.00</p>
                            </div>
                            </div>
                            <div className="item">
                            <div className="img-wraper"><img src={Image} /></div>
                            <div className="img-detail">
                                <p className="name">Powerhouse</p> 
                                <p className="price">$500.00</p>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-row artworks-right">
                    <div className="flex-cols">
                        <div className="wraper">
                            <h3 className="h3">Artwork Rights</h3>
                            <p className="text">The Copyright Act states that “pictorial, graphic, and sculptural works include two-dimensional and three-dimensional works of fine, graphic, and applied art, photographs, prints and art reproductions, maps, globes, charts, diagrams, models, and technical drawings, including architectural plans.</p>
                            <p className="text">The Copyright Act defines “Digital Works” as “the design of a building as embodied in any tangible medium of expression, including a building, architectural plans, or drawings. The work includes the overall form as well as the arrangement and composition of spaces and elements in the design, but does not include individual standard features.” 17 U.S.C. § 101</p>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
            </div>
			);
    }
}