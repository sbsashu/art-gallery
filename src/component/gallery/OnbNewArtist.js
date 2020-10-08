import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class OnbNewArtist extends Component {


    render() {

        return (
            <div className='page'>
                Onboard New Artist
                <Link to='/artist-info'>
                    Invite
                </Link>
            </div>
        )
    }
}


export default OnbNewArtist;