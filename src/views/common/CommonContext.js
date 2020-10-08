import React from 'react';

export const InitialProviderContext = {
		publicPageSlug : "",
		parentProviderSlug : "",
		providerSlug : "",
		fullName : "",
		title : "",
		websiteURL : "",
		briefInfo : "",
		imageURL : "",
		isSubProviderLoggedIn : false,
		leftSideBarShow : false,
		subProviderList : [],
		subProviderDropDownList : [],
		selectedSubProviderIndex : 0,
};
export const ProviderContext = React.createContext(InitialProviderContext);

export const InitialSubProviderContext = {
		providerSlug : "",
		fullName : "",
		imageURL : "",
		themeDetails : {},
		themeStyle : {},
		hidebg:false,
};
export const SubProviderContext = React.createContext(InitialSubProviderContext);

export const InitialAdminContext = {
		fullName : "",
		firstName : "",
		lastName : "",
		imageURL : "",
		email : "",
		phone : "",
		leftSideBarShow : false,
};
export const AdminContext = React.createContext(InitialAdminContext);