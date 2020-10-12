import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Signup  from '../component/gallery/Signup.js'
import  CreateID from '../component/gallery/Createid.js'
import  GalleryInfo from '../component/gallery/GalleryInfo.js'
import  GalleryOnborad from '../component/gallery/GalleryOnborad.js'
import  OnbNewArtist from '../component/gallery/OnbNewArtist.js'
import  ArtistInfo from '../component/artist/ArtistInfo.js'
import  DeclineOrApprove from '../component/common/Approval.js'
import  AddArtPiece from '../component/artist/AddArtPiece.js'
import  ArtInfo from '../component/artist/ArtInfo.js'
import  Vault from '../component/artist/Vault.js'
import  ApproveForArt from '../component/artist/ApproveForArt.js'
import  AddEdition from '../component/artist/AddEdition.js'
import  ApproveEditionProposal from '../component/artist/ApproveEditionProposal.js'
import  CreateOffer from '../component/gallery/CreateOffer.js'
import  OfferProposal from '../component/gallery/OfferProposal.js'
import  PublicPage from '../component/artist/AddPublicePage.js'
import  PublishArt from '../component/artist/Publish.js'


const Routes = () => {
    return (
        <section className="container">
        <Switch>
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
            <Route exact path='/offer-proposal' component={OfferProposal}/>
            <Route exact path='/add-public-page' component={PublicPage}/>
            <Route exact path='/publish-art' component={PublishArt}/>
        </Switch>
    </section>
    )
}

export default Routes;
