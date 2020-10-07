import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router , Route} from 'react-router-dom';
import Signup  from './component/gallery/Signup.js'
import  CreateID from './component/gallery/Createid.js'
import  GalleryInfo from './component/gallery/GalleryInfo.js'
import  GalleryOnborad from './component/gallery/GalleryOnborad.js'
import  OnbNewArtist from './component/gallery/OnbNewArtist.js'
import  ArtistInfo from './component/artist/ArtistInfo.js'
import  DeclineOrApprove from './component/common/Approval.js'
import  AddArtPiece from './component/artist/AddArtPiece.js'

function App() {
  return (
    <div className="App">
        <Router>
            <Route exact path="/" component={Signup} />
            <Route exact path='/dashboard' component={CreateID}/>
            <Route exact path='/galleryinfo' component={GalleryInfo}/>
            <Route exact path='/onboard' component={GalleryOnborad}/>
            <Route exact path='/invite-new-artist' component={OnbNewArtist}/>
            <Route exact path='/artist-info' component={ArtistInfo}/>
            <Route exact path='/pop' component={DeclineOrApprove}/>
            <Route exact path='/add-art-piece' component={AddArtPiece}/>
        </Router>
    </div>
  );
}

export default App;
