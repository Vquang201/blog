import React from 'react'

function Input(props) {
    const { placeholder, data, setData, type, height } = props
    return (
        <>
            {
                type === 'textarea' ?
                    <textarea style={{ height: `${height && '300px'}` }} defaultValue={data} placeholder={placeholder} onChange={e => setData(e.target.value)}></textarea>
                    :
                    <input defaultValue={data} placeholder={placeholder} onChange={e => setData(e.target.value)}></input>
            }
        </>
    )
}

export default Input
