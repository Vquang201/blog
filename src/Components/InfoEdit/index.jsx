import React, { useState } from 'react'
import Input from '../../sdk/InputFields'
import './index.css'
import { useDispatch, useSelector } from 'react-redux'
import { update } from '../../sdk/Redux/userSlice/userSlice'
function InfoEdit(props) {
    const array = [
        'https://preview.redd.it/rrz3hmsxcll71.png?width=640&crop=smart&auto=webp&s=87cc5ed38d8f088ef9fffef7a4c5756b64309d6a',
        'https://preview.redd.it/fc9k38jwfwv51.png?auto=webp&s=9ce3d4c488091bb21969fd0fad7a6d89e4bfc50d',
        'https://preview.redd.it/se39g98mljw51.png?auto=webp&s=758dfe2b0a2df439b06b68533e763f413d58b46c',
        'https://preview.redd.it/5es1lne1du261.png?width=640&crop=smart&auto=webp&s=e6eb0ee5710710000e4fbace119112de63324a38',
        'https://i.redd.it/7ipyf6pvqac61.png',
        'https://i.redd.it/ksmb0m02ppy51.png',
        'https://preview.redd.it/cpwkbke13vv51.png?auto=webp&s=9158e49b35ad2581d840efd2a013a9ead06abbc7',
        'https://preview.redd.it/26s9eejm8vz51.png?auto=webp&s=e38d32ee0ffa0666fade2abd62ed59037c119990'
    ]
    const { setOpen } = props
    const user = useSelector(state => state.user)
    // thằng này là lấy data từ store
    const dispatch = useDispatch()
    // thằng này truyền data vào store
    const [name, setName] = useState(user.name)
    const [age, setAge] = useState(user.age)
    const [about, setAbout] = useState(user.about)
    const [img, setImg] = useState(user.avaURL)
    const [theme, setTheme] = useState(user.theme)
    const [ChooseImg, setChooseImg] = useState()

    const handleSave = () => {
        setOpen(false)
        const updateUser = {
            name: name,
            age: age,
            about: about,
            avaURL: img,
            theme: theme
        }
        dispatch(update(updateUser))
    }
    const handleClickImg = (e, index) => {
        setImg(e.target.src)
        setChooseImg(index)
    }
    return (
        <div className='edit-container'>
            <form className='input-container'>
                <div onClick={handleSave} className='close'>SAVE</div>
                <h1 className='title'>Edit Profile</h1>
                <label>Display Name </label>
                <Input data={user.name} setData={setName} placeholder={'Enter Name'} />
                <label>Age </label>
                <Input data={user.age} setData={setAge} placeholder={'Enter Age'} />
                <label>About</label>
                <Input data={user.about} type='textarea' setData={setAbout} placeholder={'Enter Age'} />
                <label>Profile Picture</label>
                <div className='input-image-container'>
                    {
                        array && array.map((value, index) => (
                            <img key={index} className={`input-image ${ChooseImg === index && 'active'}`} src={value} onClick={(e) => handleClickImg(e, index)} />
                        ))
                    }
                </div>
                <div className='theme-container'>
                    <label>Choose Theme</label>
                    <input onChange={e => setTheme(e.target.value)} type='color'></input>
                </div>
            </form>

        </div>
    )
}

export default InfoEdit
