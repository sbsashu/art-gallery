import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class OfferProposal extends Component {


    render() {

        return (
            <div>
                Offer proposal / The Master
                <Link to='/add-public-page'>
                    Sign & Approve
                </Link>
            </div>
        )
    }
}


export default OfferProposal;