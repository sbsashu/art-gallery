import React, { Component, Suspense } from 'react';
import {Route, Switch} from 'react-router-dom';
import {adminRoutes} from 'routes';
import NoMatchPage from 'views/pages/NoMatchPage';
import ScrollToTopBtn from "views/common/ScrollToTopBtn";
import SideBar from "./sidebar/SideBar";
import {AdminContext,InitialAdminContext} from 'views/common/CommonContext';
import {BASE_URL} from 'config/constants';
import {isEmpty,saveCookie,getCookie,removeCookie} from 'config/functions';
import axios from 'axios';

export default class AdminLayout extends Component {
	
	constructor(props) {
		super(props);
		let {providerSlug} 		= this.props.match.params;
		this.state = {
		  context: InitialAdminContext,
		  updateContext: this.updateContext,
		};
	}
	
	updateContext = (newState) => {
		 this.setState(state => ({
			context:{...state.context,...newState}
		  }));
	};
	
	componentWillMount () {
		axios({
			method: 'post',
			url: "getAdminInfo",
		}).then((result) => {
			let resultObj 			= result.data;
			if (resultObj.status) {
				resultObj 									= resultObj.data;
				this.updateContext({
					"fullName" : !isEmpty(resultObj.firstName)?resultObj.firstName:""+" "+!isEmpty(resultObj.lastName)?resultObj.lastName:"",
					"firstName" : resultObj.firstName,
					"lastName" : resultObj.lastName,
					"imageURL" : resultObj.imageURL,
					"email" : resultObj.email,
					"phone" : resultObj.phone,
				});
			}
		}).catch((error) => {
			console.log("Network Error!");
		})
	}
	
	render() {
		let {context}			= this.state;
        return(
            <React.Fragment>
				<AdminContext.Provider value={this.state}>
					 <div className="page-wrapper provider_module admin_module" id="wrapper">
						<SideBar {...this.props} />
						<div id="content-wrapper" className={context.leftSideBarShow?"d-flex flex-column contentToggled":"d-flex flex-column"}>
							<Suspense fallback={this.props.pageLoader()}>
								<Switch>
									{
										adminRoutes.map((route, idx) => {
											return (typeof route.component !== "undefined" ? (
												<Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (<route.component {...this.props} {...props} />)} />
												) : (null))
										})
									}
									<Route component={NoMatchPage} />
								</Switch>
							</Suspense>
						</div>
					</div>
					<ScrollToTopBtn />
				</AdminContext.Provider>
           </React.Fragment>
        );
    }
}