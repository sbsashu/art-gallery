import React from 'react';


/*============================== Start Buyer Routes==============================*/
const Home = React.lazy((props) => import('views/pages/Home'));

export const buyerRoutes = [
	{ path: "/", display: true, exact: true, name: "Home", component: Home, className: "" }
];

/*============================== End Buyer Routes ==============================*/


/*============================== Start Artist Routes==============================*/

const artistCatalog = React.lazy((props) => import('./views/pages/artist/Catalog'));
const artistCreateArtID = React.lazy((props) => import('./views/pages/artist/CreateArtID'));
const artistGetStarted = React.lazy((props) => import('./views/pages/artist/GetStarted'));
const artistArtWorkDetails = React.lazy((props) => import('./views/pages/artist/artwork/Details'));
const artistArtWorkUpload = React.lazy((props) => import('./views/pages/artist/artwork/Upload'));
const artistArtWorkVerifySign = React.lazy((props) => import('./views/pages/artist/artwork/VerifyAndSign'));

export const artistRoutes = [
	{ path: "/artist/get-started", isArtistOnly: false, exact: true, name: "get-started", component: artistGetStarted, className: "" },
	{ path: "/artist/catalog", isArtistOnly: false, exact: true, name: "artistCatalog", component: artistCatalog, className: "" },
	{ path: "/artist/create-artID", isArtistOnly: false, exact: true, name: "create-artID", component: artistCreateArtID, className: "" },
	{ path: "/artist/art-work/details", isArtistOnly: false, exact: true, name: "create-artID", component: artistArtWorkDetails, className: "" },
	{ path: "/artist/art-work/upload", isArtistOnly: false, exact: true, name: "create-artID", component: artistArtWorkUpload, className: "" },
	{ path: "/artist/art-work/verify-sign", isArtistOnly: false, exact: true, name: "create-artID", component: artistArtWorkVerifySign, className: "" },
];

/*============================== End Artist Routes ==============================*/

/*============================== Start Gallery Routes==============================*/

const MyGallery = React.lazy((props) => import('./views/pages/gallery/Index'));

export const lobbyRoutes = [
	{ path: "/gallery/", isArtistOnly: false, exact: true, name: "My Gallery", component: MyGallery, className: "" }
];

/*============================== End Gallery Routes ==============================*/

/*============================== Start Admin Routes==============================*/

const AdminDashboard = React.lazy((props) => import('./views/pages/admin/Dashboard'));
const AdminProfile = React.lazy((props) => import('./views/pages/admin/Profile'));

export const adminRoutes = [
	{ path: "/admin/", isArtistOnly: false, exact: true, name: "Dashboard", component: AdminDashboard, className: "" },
	{ path: "/admin/dashboard", isArtistOnly: false, name: "Dashboard", component: AdminDashboard, className: "" },
	{ path: "/admin/profile", isArtistOnly: false, name: "Profile", component: AdminProfile, className: "" }
];

/*============================== End Admin Routes ==============================*/