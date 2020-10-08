import React, { Component, Suspense } from 'react';
import {Route, Switch} from 'react-router-dom';
import {buyerRoutes} from 'routes';
import NoMatchPage from 'views/pages/NoMatchPage';

export default class BuyerLayout extends Component {
	
	render() {
        return(
            <React.Fragment>
				 <div className="page-wrapper customer_module">
					<Suspense fallback={this.props.pageLoader()}>
						<Switch>
							{buyerRoutes.map((route, idx) => {
								return (typeof route.component !== "undefined" ? (
									<Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (<route.component {...this.props} {...props} />)} />
									) : (null))
							} ) }
							<Route component={NoMatchPage} />
						</Switch>
					</Suspense>
				</div>
           </React.Fragment>
        );
    }
}