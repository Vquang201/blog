import React, { useState } from 'react'
import BlogEdit from '../BlogEdit'
import Header from '../Header'
import InfoEdit from '../InfoEdit'

function Home() {
    const [open, setOpen] = useState(false)
    return (
        <>
            {
                open ?
                    <InfoEdit setOpen={setOpen} />
                    :
                    <>

                        <Header setOpen={setOpen} />
                        <BlogEdit />
                    </>
            }
        </>
    )
}

export default Home
