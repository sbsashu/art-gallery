import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ArtistInfo extends Component {


    render() {

        return (
            <div className='page'>
                Artist Information
                <Link to='/pop'>
                    Continue
                </Link>
            </div>
        )
    }
}


export default ArtistInfo;