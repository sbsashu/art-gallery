import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Vault extends Component {


    render() {

        return (
            <div className='page'>
                Upload to secure vault
                <Link to='/approve-for-art'>
                    Continue
                </Link>
            </div>
        )
    }
}


export default Vault;