import React from 'react'


const Post = (props) => (
    <div style={{
        border: '1px solid #ccc',
        marginBottom:'10px',
        display: 'block',
        padding: '10px'
    }}>
        <h3>Post name: {props.name}</h3>
        <p>Year: <strong>{props.year}</strong></p>
        <input type="text" onChange={props.onChangeName} value={props.name}/>
        {/* <button onClick={props.onChangeTitle}>Click</button> */}
    </div>
)

export default Post;