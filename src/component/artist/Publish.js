import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PublishArt extends Component {


    render() {

        return (
            <div className='page'>
                Publish Artist Page
                <Link >
                    Buy Art
                </Link>
            </div>
        )
    }
}


export default PublishArt;