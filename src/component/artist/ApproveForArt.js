import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ApproveForArt extends Component {


    render() {

        return (
            <div>
                Art Piece Approve / The Master
                <Link to='/add-edition'>
                    Sign & Create
                </Link>
            </div>
        )
    }
}


export default ApproveForArt;