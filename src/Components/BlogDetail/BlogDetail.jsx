import { Button, IconButton, Typography } from '@mui/material'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import './index.css'


function BlogDetail() {
    const user = useSelector(state => state.user)
    const [toggle, setToggle] = useState(false)
    const { id } = useParams()

    const navigate = useNavigate()
    const handleBack = () => {
        navigate('/')
    }

    const handleToggleDark = () => {
        setToggle(true)
    }

    const handleToggleLight = () => {
        setToggle(false)
    }

    return (
        <div className={`grid ${toggle && 'dark-mode'}`}>
            <div className='blog-container'>
                <div>
                    <div className='header-container'>
                        <div className='flex'>
                            <div>
                                <IconButton title='Back' onClick={handleBack}>
                                    <ArrowBackIosNewOutlinedIcon style={{ color: `${toggle ? 'white' : ''}` }} />
                                </IconButton>
                            </div>
                            <img className='blog-ava' src={user.avaURL} alt="" />
                            <p className='blog-name'>{user.name}</p>
                        </div>
                        <div className='flex mode-wrap'>
                            {
                                !toggle &&
                                <IconButton title='Toggle Dark Mode' onClick={handleToggleDark}>
                                    <DarkModeOutlinedIcon />
                                </IconButton>
                            }
                            {
                                toggle &&
                                <IconButton title='Toggle Light Mode' onClick={handleToggleLight}>
                                    <LightModeOutlinedIcon style={{ color: 'white' }} />
                                </IconButton>
                            }
                            <div>
                                <button className={`btn-follow ${!toggle && 'dark-mode'}`} >
                                    <PersonAddAltOutlinedIcon />
                                    <Typography marginLeft={1}>Follow</Typography>
                                </button>
                            </div>

                        </div>
                    </div>
                    <h1 className='blog-title'>{user.data[id].title}</h1>
                    <p className='blog-description'>{user.data[id].description}</p>
                    {/* <p className='blog-status'>{user.data[id].status}</p> */}
                    {/* <img src={user.data[5].image.preview} alt='img' /> */}
                    <p className='blog-content'>
                        {user.data[id].content}
                    </p>
                </div>
            </div>
        </div >
    )
}

export default BlogDetail
