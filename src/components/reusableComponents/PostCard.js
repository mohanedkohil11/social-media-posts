import React from 'react'
import { Link } from 'react-router-dom'

export default function PostCard(props) {

    return (

        <Link to={`/post/${props.postData?.id}`}>

            <div className='postCard'>
                <h1 className='title'>{props.postData?.title}</h1>
                <h3 className='body'>{props.postData?.body}</h3>
            </div>

        </Link>

    )
}
