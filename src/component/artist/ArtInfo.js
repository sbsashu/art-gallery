import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ArtInfo extends Component {


    render() {

        return (
            <div className='page'>
                Add Art Piece
                <Link to='/upload-vault'>
                    Continue
                </Link>
            </div>
        )
    }
}


export default ArtInfo;