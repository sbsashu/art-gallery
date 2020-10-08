import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class CreateID extends Component {


    render() {

        return (
            <div className='page'>
                Create ID for user
                <Link to='/galleryinfo'>
                    CreateID
                </Link>
            </div>
        )
    }
}


export default CreateID;