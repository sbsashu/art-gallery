import React, { Component, Suspense } from 'react';
import {Route, Switch,Redirect} from 'react-router-dom';
import {artistRoutes} from 'routes';
import NoMatchPage from 'views/pages/NoMatchPage';
import {ProviderContext,InitialProviderContext} from 'views/common/CommonContext';
import ScrollToTopBtn from "views/common/ScrollToTopBtn";
import Header from "./header/Header";
import Footer from "./footer/Footer";

export default class ArtistLayout extends Component {
	
	constructor(props) {
		super(props);
		let {providerSlug} 		= this.props.match.params;
		this.state = {
		  context: InitialProviderContext,
		  updateContext: this.updateContext,
		};
	}
	
	updateContext = (newState) => {
		 this.setState(state => ({
			context:{...state.context,...newState}
		  }));
	};
	
	render() {
		let {context}			= this.state;
        return(
            <React.Fragment>
				<ProviderContext.Provider value={this.state}>
					 <div className="page-wrapper provider_module" id="wrapper">
						{this.props.history.location.pathname === '/artist/publish/artist/page' ? null : <Header {...this.props}/>}
						<div id="content-wrapper" className="d-flex flex-column height-40">
							<Suspense fallback={this.props.pageLoader()}>
								<Switch>
									{(context.isSubProviderLoggedIn)?(
										artistRoutes.map((route, idx) => {
											return (typeof route.component !== "undefined" && !route.isProviderOnly ? (
												<Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (<route.component {...this.props} {...props} />)} />
												) : (null))
										} )
									):(
										artistRoutes.map((route, idx) => {
											return (typeof route.component !== "undefined" ? (
												<Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (<route.component {...this.props} {...props} />)} />
												) : (null))
										} )
									)}									
									<Route path="/artist" name="Artist" render={(props) =>  <Redirect to={`/artist/catalog`} /> } />
									<Route component={NoMatchPage} />
								</Switch>
							</Suspense>
						</div>
					</div>
					<Footer {...this.props} />
					<ScrollToTopBtn />
				</ProviderContext.Provider>
           </React.Fragment>
        );
    }
}