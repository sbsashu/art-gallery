import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class DeclineOrApprove extends Component {


    render() {

        return (
            <div>
                Pop for Artist Approval
                <Link to='/add-art-piece'>
                   Decline Or Approve
                </Link>
            </div>
        )
    }
}


export default DeclineOrApprove;