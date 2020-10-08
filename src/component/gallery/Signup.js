import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SignUp extends Component {


    render() {

        return (
            <div className='page'>
                Login
                <Link to='/dashboard'>
                    Sign up
                </Link>
            </div>
        )
    }
}


export default SignUp;

