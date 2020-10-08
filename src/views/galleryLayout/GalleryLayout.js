import React, { Component, Suspense } from 'react';
import {Route, Switch} from 'react-router-dom';
import {lobbyRoutes} from 'routes';
import {isEmpty,getCookie} from 'config/functions';
import {SubProviderContext,InitialSubProviderContext} from 'views/common/CommonContext';
import ScrollToTopBtn from "views/common/ScrollToTopBtn";
import NoMatchPage from 'views/pages/NoMatchPage';

export default class GalleryLayout extends Component {
	
	constructor(props) {
		super(props);
		
		this.state = {
			lobbyAccess: !isEmpty(getCookie('lobbyAuthToken')) ? true : false,
			updateContext: this.updateContext,
		};
	}

	updateContext = (newState) => {
		 this.setState(state => ({
			context:{...state.context,...newState}
		  }));
	};

	render() {
		return(
            <React.Fragment>
				<SubProviderContext.Provider value={this.state}>
					<div className="Lobby">
						<div className="lobby-container">		
							<div className='lobby-body'>
								<Suspense fallback={this.props.pageLoader()}>
									<Switch>
										{lobbyRoutes.map((route, idx) => {
											return (typeof route.component !== "undefined" ? (
												<Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (<route.component {...this.props} {...props} />)} />
												) : (null))
										} ) }
										<Route component={NoMatchPage} />
									</Switch>
								</Suspense>
							</div>
						</div>
					</div>
					<ScrollToTopBtn />
				</SubProviderContext.Provider>
           </React.Fragment>
        );
    }
}