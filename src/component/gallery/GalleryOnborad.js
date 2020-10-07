import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class GalleryOnborad extends Component {


    render() {

        return (
            <div>
                Welcome to David
                <Link to='/invite-new-artist'>
                    Onboard New Artist
                </Link>
            </div>
        )
    }
}


export default GalleryOnborad;