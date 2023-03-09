import React from 'react'
import { useSelector } from 'react-redux'
import './index.css'

function Header(props) {
    const { setOpen } = props
    const handleEdit = () => {
        setOpen(true)
    }
    const user = useSelector(state => state.user)
    return (
        <header className='info-container' style={{ background: `linear-gradient(to bottom , ${user.theme}, black` }}>
            <div className="info-edit" onClick={handleEdit}>Edit</div>
            <img src={user.avaURL} alt='avt' className='info-ava' />
            <div className="info-username">{user.name}</div>
            <div className="info-age">{user.age}</div>
            <div className="info-about">{user.about}</div>
        </header>
    )
}

export default Header
