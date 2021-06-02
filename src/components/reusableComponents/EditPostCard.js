import React, { useContext, useState } from 'react';
import { UPDATE_POST } from '../../store/actions/post';
import history from '../../utils/History';
import { ReactComponent as SaveSVG } from '../../assets/save.svg';
import { ReactComponent as CloseSVG } from '../../assets/close.svg';

export default function EditPostCard(props) {
    const [updatedPost, setUpdatedPost] = useState(null)
    const saveHandle = () => {
        if (updatedPost)
            // case : there is new updates
            UPDATE_POST({
                id: props.postData?.id,
                ...updatedPost
            })
        else
            // case : there is (NO) new updates
            cancelHandle()
    }

    const cancelHandle = () => {
        history.push(`/post/${props.postData?.id}`)
    }

    const inputChangeHandle = (e) => {
        setUpdatedPost(
            {
                ...updatedPost,
                [e.target.id]: e.target.value
            }
        )
    }
    return (

        <div className='editPostCard'>

            <div className='postSection'>
                <input
                    id='title'
                    className='title'
                    placeholder='Post Title'
                    defaultValue={props.postData?.title}
                    onChange={inputChangeHandle}
                />
                <textarea
                    id='body'
                    className='body'
                    placeholder='Post Body'
                    defaultValue={props.postData?.body}
                    onChange={inputChangeHandle}
                />
            </div>



            <div className='buttonSection'>
                <div onClick={saveHandle}><SaveSVG /></div>
                <div onClick={cancelHandle}><CloseSVG /></div>
            </div>



        </div >

    )
}
