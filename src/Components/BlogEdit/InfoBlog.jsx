import React, { useEffect, useState } from 'react'
import Input from '../../sdk/InputFields'
import '../InfoEdit/index.css'
import './index.css'


function InfoBlog(props) {
    const { setOpenEditBlog, setData } = props
    const [title, setTitle] = useState('Title')
    const [description, setDescription] = useState('Description')
    const [status, setStatus] = useState('None')
    const [statusColor, setStatusColor] = useState('#808080')
    const [content, setContent] = useState('Your content ...')
    const [image, setImage] = useState()
    const [selectId, setSelectId] = useState(false)
    const tags = ['None', 'Mood', 'Quotes', 'Love', 'Family', 'Life']
    const colors = ['#808080', '#00bfff', '#66cdaa', ' #ff80bf', ' #c8981e', '#008000']

    // // hình ảnh file
    // useEffect(() => {
    //     // Cleanup func
    //     return () => {
    //         image && URL.revokeObjectURL(image.preview)
    //     }
    // }, [image])

    // const handlePreviewImage = (e) => {
    //     const file = e.target.files[0] // chỉ chọn 1 file
    //     file.preview = URL.createObjectURL(file) // file là 1 obj và có thể thêm 1  thuộc tính 
    //     setImage(file)
    // }

    const handlePost = () => {
        setOpenEditBlog(false)
        setData(prev => {
            const newDatas = [...prev, { title, description, status, statusColor, content, image }]
            // save localStorage
            const jsonDatas = JSON.stringify(newDatas)
            localStorage.setItem('data', jsonDatas)
            return newDatas
        })
    }

    const handleClickStatus = (index) => {
        setStatus(tags[index])
        setSelectId(index)
        setStatusColor(colors[index])

    }



    return (
        <div className='edit-container'>
            <form className='input-container'>
                <div className='close' onClick={handlePost}>POST</div>
                <label>Title</label>
                <Input placeholder='Add A Title' setData={setTitle} />
                <label>Descriptions</label>
                <Input placeholder='Add Some Description' type='textarea' setData={setDescription} />
                <label>Tags : </label>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {tags.map((item, index) => (
                        <div key={index} onClick={() => handleClickStatus(index)} className={`status-item ${selectId === index && 'status-active'}`} style={{ backgroundColor: `${colors[index]}` }}>
                            {item}
                        </div>
                    ))}
                </div>
                <label>Content</label>
                <Input placeholder='Write a content' type='textarea' height={true} setData={setContent} />
                <br />
                <br />

            </form>
        </div>
    )
}

export default InfoBlog
