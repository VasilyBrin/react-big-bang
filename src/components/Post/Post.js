import React from 'react'
import './Post.css'

const Post = (props) => (
    <div className="Post">
        <h3>Post name: {props.name}</h3>
        <p>Year: <strong>{props.year}</strong></p>
        <input type="text" onChange={props.onChangeName} value={props.name}/>
        <button onClick={props.onDelete}>Delete</button>
    </div>
)

export default Post;