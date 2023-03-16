import React, { useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import TitleIcon from '@mui/icons-material/Title';
import DeleteIcon from '@mui/icons-material/Delete';
import DescriptionIcon from '@mui/icons-material/Description';
import { IconButton } from '@mui/material';
import InfoBlog from './InfoBlog';
import { AlertDeleTe } from '../../sdk/notifi';
import { useNavigate } from 'react-router-dom';
import './index.css'
import { useDispatch } from 'react-redux';
import { updateData } from '../../sdk/Redux/userSlice/userSlice';



function BlogEdit() {
    const [openEditBlog, setOpenEditBlog] = useState(false)
    const [openAlert, setOpenAlert] = useState(false)
    const [data, setData] = useState(JSON.parse(localStorage.getItem('data')) || [])
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const storageData = JSON.parse(localStorage.getItem('data'))
    console.log("🚀 ~ file: index.jsx:23 ~ BlogEdit ~ storageData:", storageData)
    console.log(Object.keys(storageData).length !== 0)
    console.log('check storagedata', storageData === null)
    useEffect(() => {
        const updateBlog = {
            data: [...storageData],
            // phải là [...storageData] khi storageData thì bị lỗi 
        }
        dispatch(updateData(updateBlog))
    }, [storageData])

    const handleAdd = () => {
        setOpenEditBlog(true)
    }

    const handleDelete = (event, index) => {
        setOpenAlert(true)
        data.splice(index, 1)
        storageData.splice(index, 1)
        localStorage.setItem('data', JSON.stringify(storageData));
    }

    const handleClickRecord = (event, index) => {
        navigate(`/blog/id/${index}`)
    }

    return (
        <>
            {
                !openEditBlog &&
                <>
                    <div className='content-container'>
                        {
                            storageData && Object.keys(storageData).length !== 0 && storageData.map((item, index) => (
                                <div key={index} className="content-item">
                                    <div onClick={event => handleClickRecord(event, index)} style={{ cursor: 'pointer' }}>
                                        <div className='align-center' >
                                            <TitleIcon style={{ marginRight: '8px', fontSize: '15px' }} />
                                            {item.title}
                                        </div>
                                        <div>
                                            <span className="status-item" style={{ fontSize: '10px', backgroundColor: `${item.statusColor}` }}>
                                                {item.status}
                                            </span>
                                        </div>
                                        <div className='align-center'>
                                            <DescriptionIcon style={{ marginRight: '8px', fontSize: '15px' }} />
                                            {item.description}
                                        </div>
                                    </div>

                                    <div className='delete-wrap' title="Delete">
                                        <IconButton onClick={(event) => handleDelete(event, index)}>
                                            <DeleteIcon style={{ color: 'white' }} />
                                        </IconButton>
                                    </div>
                                </div>
                            ))

                        }
                    </div>

                    <AlertDeleTe openAlert={openAlert} setOpenAlert={setOpenAlert} />
                    <button onClick={() => handleAdd()} className="btnAdd">
                        <AddIcon style={{ color: 'white', fontSize: '32px' }} />
                    </button>
                </>
            }
            {
                openEditBlog && <InfoBlog setOpenEditBlog={setOpenEditBlog} setData={setData} />
            }

        </>
    )
}

export default BlogEdit
