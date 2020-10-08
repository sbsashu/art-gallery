import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class CreateOffer extends Component {


    render() {

        return (
            <div>
                Create Offer / The Master
                <Link to='/offer-proposal'>
                    Sign & Create
                </Link>
            </div>
        )
    }
}


export default CreateOffer;