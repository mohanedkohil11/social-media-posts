import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { DELETE_POST } from '../../store/actions/post';
import { ReactComponent as EditSVG } from '../../assets/edit.svg';
import { ReactComponent as DeleteSVG } from '../../assets/delete.svg';

export default function PostDetailsCard(props) {

    const deleteHandle = () => {
        let postId = props.postData?.id;
        postId && DELETE_POST(postId)
    }

    return (

        <div className='postDetailsCard'>

            <div>
                <h1 className='title'>{props.postData?.title}</h1>
                <h3 className='body'>{props.postData?.body}</h3>
            </div>

            <div className='buttonSection'>
                <Link to={`/edit-post/${props.postData?.id}`}><EditSVG /></Link>
                <div onClick={deleteHandle}><DeleteSVG /></div>
            </div>

        </div >

    )
}
