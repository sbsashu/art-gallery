import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PublicPage extends Component {


    render() {

        return (
            <div className='page'>
                PublicPage / The Master Art Information
                <Link to="/publish-art">
                    Continue
                </Link>
            </div>
        )
    }
}


export default PublicPage;