import React from 'react'
import Directory from '../../Components/directory/Directory'
// import MenuItem from '../../Components/menu-item/MenuItem'
import './Homepage.scss'

export default ({ history }) => {
    return (
        <div className="homepage">
            <h1>Welcome to my Homepage</h1>
            <Directory />
        </div>
    )
}