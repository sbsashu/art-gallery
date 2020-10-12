import React, { Component, Suspense } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { API_BASE_URL,PUBLIC_URL } from 'config/constants';
import {isEmpty,getCookie} from 'config/functions';
import ErrorBoundary from './ErrorBoundary';
import AutoScrollToTop from "views/common/AutoScrollToTop";
import BuyerLayout from 'views/buyerLayout/BuyerLayout';
import ArtistLayout from 'views/artistLayout/ArtistLayout';
import AdminLayout from 'views/adminLayout/AdminLayout';
import AdminLogin from 'views/pages/auth/AdminLogin';
import ArtistLogin from 'views/pages/auth/ArtistLogin';
import ArtistRegister from 'views/pages/auth/ArtistRegister';
/**Gallery Section Import */
import GalleryLayout from 'views/galleryLayout/GalleryLayout';
import GalleryRegister from 'views/pages/auth/GalleryRegister';
import GalleryLogin from 'views/pages/auth/GalleryLogin';
import 'assets/css/style.css';
import 'assets/css/responsive.css';
import 'assets/css/carousel.css';
import 'assets/fonts/fonts.css';

import 'App.css';
class App extends Component {
	
	pageLoader = () => (<div className="app-loader"><div className="body-overlay"></div><div className="theme-loader spinner-border text-primary"><span className="sr-only">Loading...</span></div></div>);
	
    componentWillMount(){
        axios.defaults.baseURL = API_BASE_URL+'/api';
        let authToken 				= getCookie('authToken');
        let galleryAuthToken 		= getCookie('galleryAuthToken');
        let adminAuthToken 		= getCookie('adminAuthToken');
        let selectedArtistID 	= getCookie('selectedArtistID');
        axios.defaults.headers.common['Accept-Version'] = "1";
        axios.defaults.headers.common['Access'] = "*";
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = "*";
        axios.defaults.headers.common['Content-Type'] = "application/json; charset=utf-8";
        axios.defaults.headers.common['authorization'] = !isEmpty(authToken)?authToken:"";
        axios.defaults.headers.common['galleryauthorization'] = !isEmpty(galleryAuthToken)?galleryAuthToken:"";
        axios.defaults.headers.common['adminauthorization'] = !isEmpty(adminAuthToken)?adminAuthToken:"";
        axios.defaults.headers.common['selectedartistid'] = !isEmpty(selectedArtistID)?selectedArtistID:"";
        axios.defaults.validateStatus = function (status) {
			return status >= 200 && status < 500;
		};
    }
    
	isArtistLoggedIn (props, authPage = false){
		let authToken			= getCookie("authToken");
		return true;
		/* if( authPage ){
			if ( !isEmpty( authToken ) ) {
				return true;
			}else{
				props.history.push({ pathname : '/artist/login'});
			}
		}else{
			if ( !isEmpty( authToken ) ) {
				return props.history.push({ pathname : `/artist/dashboard`});
			}else{
				return false;
			}
		} */
	}

	isGalleryLoggedIn (props, authPage = false){
		return true;
		/* let galleryAuthToken		= getCookie("galleryAuthToken");
		let authToken			= getCookie("authToken");
		let artistCanAccess	= getCookie("artistCanLogginOnGallery");
		if( authPage ){
			if ( (!isEmpty( authToken ) && !isEmpty( artistCanAccess )) || !isEmpty(galleryAuthToken) ) {
				return true;
			}else{
				props.history.push({ pathname : '/my-gallery/login'});
			}
		}else{  
			if (!isEmpty(galleryAuthToken) ) {
				return props.history.push({ pathname : '/my-gallery'});
			}else{
				return false;
			}
		} */
	}
	
	isAdminLoggedIn (props, authPage = false){
		return true;
		/* let authToken			= getCookie("adminAuthToken");
		if( authPage ){
			if ( !isEmpty( authToken ) ) {
				return true;
			}else{
				props.history.push({ pathname : '/admin/login'});
			}
		}else{
			if ( !isEmpty( authToken ) ) {
				return props.history.push({ pathname : '/admin/dashboard'});
			}else{
				return false;
			}
		} */
	}
	
    render() {
		return (
			<ErrorBoundary>
				<Router basename={PUBLIC_URL}>
					<AutoScrollToTop>
						<Suspense fallback={this.pageLoader()}>
							<Switch>
							
								/* -----------  Artist Section Start ---------- */
								<Route exact path="/artist/login" name="artistLogin" render={(props) =><ArtistLogin {...props} pageLoader={ this.pageLoader.bind(this)} title="Artist Login" />} />
								<Route exact path="/artist/sign-up" name="artistRegister" render={(props) =><ArtistRegister {...props} pageLoader={ this.pageLoader.bind(this)} title="Artist Sign Up"/>} />
								<Route path="/artist" name="Artist" render={(props) =>  this.isArtistLoggedIn(props,true) && <ArtistLayout {...props} pageLoader={ this.pageLoader.bind(this)}/>} />
								/* ------------  Artist Section End ---------------- */

								/* ---------------- Gallery Section Start --------------- */
								<Route exact path="/my-gallery/login" name="Gallery Login" render={(props) => !this.isGalleryLoggedIn(props) && <GalleryLogin {...props} pageLoader={ this.pageLoader.bind(this)} title="Gallery Login" />} />
								<Route exact path="/my-gallery/sign-up/:verificationToken" name="Gallery Register" render={(props) =>  !this.isGalleryLoggedIn(props) && <GalleryRegister {...props} pageLoader={ this.pageLoader.bind(this)} title="Gallery Sign Up"/>} />					
								<Route path="/my-gallery" name="Sub Artist" render={(props) => this.isGalleryLoggedIn(props,true) && <GalleryLayout {...props} pageLoader={ this.pageLoader.bind(this)}/>} />

								/* ---------------- Gallery Section End --------------- */
								
								/* -----------  Admin Section Start ---------- */
								<Route exact path="/admin/login" name="AdminLogin" render={(props) => !this.isAdminLoggedIn(props) && <AdminLogin {...props} pageLoader={ this.pageLoader.bind(this)} title="Artist Login" />} />
								<Route path="/admin" name="Admin" render={(props) =>  this.isAdminLoggedIn(props,true) && <AdminLayout {...props} pageLoader={ this.pageLoader.bind(this)}/>} />
								/* ------------  Admin Section End ---------------- */
								
								/* --------------  Buyer Section Start ----------------- */
								<Route path="/" name="Buyer" render={(props) => <BuyerLayout {...props} pageLoader={ this.pageLoader.bind(this)}/>} />
								/* ----------------------  Buyer Section End --------------------------- */
								
							</Switch>
						</Suspense>
					</AutoScrollToTop>
				</Router>
			</ErrorBoundary>
      );
    }
}
export default App;