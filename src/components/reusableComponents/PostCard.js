import React from 'react'
import { Link } from 'react-router-dom'
import parse from 'html-react-parser';

export default function PostCard(props) {

    return (

        <Link to={`/post/${props.postData?.id}`}>

            <div className='postCard'>
                <h1 className='title'> {parse(props.postData?.title)}</h1>
                <h3 className='body'>{parse(props.postData?.body)}</h3>
            </div>

        </Link>

    )
}
