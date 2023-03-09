import { Alert, Snackbar } from '@mui/material'
import React from 'react'
import './index.css'

export function AlertDeleTe(props) {
    const { openAlert, setOpenAlert } = props
    const handleClose = () => {
        setOpenAlert(false)
    }
    return (
        <div className='alert-wrap'>
            <Snackbar open={openAlert} autoHideDuration={2000} onClose={handleClose}>
                <Alert variant='filled' severity="success">
                    Delete successfully !
                </Alert>
            </Snackbar>
        </div >
    )
}


