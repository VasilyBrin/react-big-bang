import React from 'react'


const Post = (props) => (
    <div>
        <h3>Post name: {props.name}</h3>
        <p>Year: <strong>{props.year}</strong></p>
        <button onClick={props.onChangeTitle}>Click</button>
    </div>
)

export default Post;