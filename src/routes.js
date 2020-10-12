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
const addEdition = React.lazy((props) => import('./views/pages/artist/artwork/AddEdition'));
const editionSignAndVerify = React.lazy((props) => import('./views/pages/artist/artwork/EditionVandSign'));
const viewEditionDetail = React.lazy((props) => import('./views/pages/artist/artwork/ViewEdition'));
const addPublishPage = React.lazy((props) => import('./views/pages/artist/artwork/AddPublicPage'));
const PublicPageArtistInfo = React.lazy((props) => import('./views/pages/artist/artwork/PublicePageArtistInfo'));
const ArtistAssets = React.lazy((props) => import('./views/pages/artist/artwork/ArtistAssets'));
const PublishPage = React.lazy((props) => import('./views/pages/artist/artwork/PublishPage'));

export const artistRoutes = [
	{ path: "/artist/get-started", isArtistOnly: false, exact: true, name: "get-started", component: artistGetStarted, className: "" },
	{ path: "/artist/catalog", isArtistOnly: false, exact: true, name: "artistCatalog", component: artistCatalog, className: "" },
	{ path: "/artist/create-artID", isArtistOnly: false, exact: true, name: "create-artID", component: artistCreateArtID, className: "" },
	{ path: "/artist/art-work/details", isArtistOnly: false, exact: true, name: "create-artID", component: artistArtWorkDetails, className: "" },
	{ path: "/artist/art-work/upload", isArtistOnly: false, exact: true, name: "create-artID", component: artistArtWorkUpload, className: "" },
	{ path: "/artist/art-work/verify-sign", isArtistOnly: false, exact: true, name: "art-work-sign", component: artistArtWorkVerifySign, className: "" },
	{ path: "/artist/add/edition", isArtistOnly: false, exact: true, name: "create-edition", component: addEdition, className: "" },
	{ path: "/artist/sign/verify", isArtistOnly: false, exact: true, name: "edition-sign-verify", component: editionSignAndVerify, className: "" },
	{ path: "/artist/view/edition", isArtistOnly: false, exact: true, name: "edition-sign-verify", component: viewEditionDetail, className: "" },
	{ path: "/artist/add/public/page", isArtistOnly: false, exact: true, name: "edition-sign-verify", component: addPublishPage, className: "" },
	{ path: "/artist/public/page/info", isArtistOnly: false, exact: true, name: "edition-sign-verify", component: PublicPageArtistInfo, className: "" },
	{ path: "/artist/public/page/assets", isArtistOnly: false, exact: true, name: "edition-sign-verify", component: ArtistAssets, className: "" },
	{ path: "/artist/publish/artist/page", isArtistOnly: false, exact: true, name: "edition-sign-verify", component: PublishPage, className: "" },
];

/*============================== End Artist Routes ==============================*/

/*============================== Start Gallery Routes==============================*/

const MyGallery = React.lazy((props) => import('./views/pages/gallery/Index'));
const galleryGetStarted = React.lazy((props) => import('./views/pages/gallery/GetStarted'));

export const lobbyRoutes = [
	{ path: "/gallery/", isArtistOnly: false, exact: true, name: "My Gallery", component: MyGallery, className: "" },
	{ path: "/gallery/get-started", isArtistOnly: false, exact: true, name: "get-started", component: galleryGetStarted, className: "" }

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