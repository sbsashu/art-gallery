import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class GalleryInfo extends Component {


    render() {

        return (
            <div>
                Gallery information
                <Link to='/onboard'>
                    Create ArtId
                </Link>
            </div>
        )
    }
}


export default GalleryInfo;