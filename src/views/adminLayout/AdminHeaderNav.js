import React,{Component} from 'react';
import {AdminContext} from 'views/common/CommonContext';
export default class AdminHeaderNav extends Component {
	static contextType = AdminContext;
    constructor(props) {
		super(props);
	}
	render() {
        return (
        	<AdminContext.Consumer>
				{({context,updateContext}) => (
				<div className="sidebar-toggler-btn" onClick={()=>updateContext({"leftSideBarShow":!context.leftSideBarShow})}>
					<div className={ `nav-icon ${(this.props.className ? this.props.className : '')}` }>
						<div>
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
								<path d="M2.00098 4.00098H18.001C19.101 4.00098 20.001 3.10098 20.001 2.00098C20.001 0.900977 19.101 0.000976562 18.001 0.000976562H2.00098C0.900977 0.000976562 0.000976562 0.900977 0.000976562 2.00098C0.000976562 3.10098 0.900977 4.00098 2.00098 4.00098ZM18.001 14.001H2.00098C0.900977 14.001 0.000976562 14.901 0.000976562 16.001C0.000976562 17.101 0.900977 18.001 2.00098 18.001H18.001C19.101 18.001 20.001 17.101 20.001 16.001C20.001 14.901 19.101 14.001 18.001 14.001ZM18.001 7.00098H2.00098C0.900977 7.00098 0.000976562 7.90098 0.000976562 9.00098C0.000976562 10.101 0.900977 11.001 2.00098 11.001H18.001C19.101 11.001 20.001 10.101 20.001 9.00098C20.001 7.90098 19.101 7.00098 18.001 7.00098Z" fill="#475FFD"></path>
							</svg>
						</div>
					</div>
				</div>
				 )}
			</AdminContext.Consumer>
			);
    }
}