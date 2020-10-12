import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class AddArtPiece extends Component {


    render() {

        return (
            <div className='page'>
               Satchi Gallery Manage your Catalog
                <Link to='/art-info'>
                    Add Art Piece
                </Link>
            </div>
        )
    }
}


export default AddArtPiece;