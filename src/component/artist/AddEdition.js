import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class AddEdition extends Component {


    render() {

        return (
            <div className='page'>
                Add Edition / The Master
                <Link to='/approve-edition'>
                    Continue
                </Link>
            </div>
        )
    }
}


export default AddEdition;