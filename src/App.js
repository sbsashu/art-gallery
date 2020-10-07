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
import  ArtInfo from './component/artist/ArtInfo.js'
import  Vault from './component/artist/Vault.js'
import  ApproveForArt from './component/artist/ApproveForArt.js'
import  AddEdition from './component/artist/AddEdition.js'
import  ApproveEditionProposal from './component/artist/ApproveEditionProposal.js'
import  CreateOffer from './component/artist/CreateOffer.js'

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
            <Route exact path='/art-info' component={ArtInfo}/>
            <Route exact path='/upload-vault' component={Vault}/> 
            <Route exact path='/approve-for-art' component={ApproveForArt}/>
            <Route exact path='/add-edition' component={AddEdition}/>
            <Route exact path='/approve-edition' component={ApproveEditionProposal}/>
            <Route exact path='/create-offer' component={CreateOffer}/>
        </Router>
    </div>
  );
}

export default App;
