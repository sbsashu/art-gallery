import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ApproveEditionProposal extends Component {


    render() {

        return (
            <div className='page'>
                Edition Proposal / The Master
                <Link to='/create-offer'>
                    Sign & Approve
                </Link>
            </div>
        )
    }
}


export default ApproveEditionProposal;