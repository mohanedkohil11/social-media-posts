import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PostDetailsCard from '../../components/reusableComponents/PostDetailsCard';
import { GET_POST_BY_ID, CLEAN_UP_SELECTED_POST } from '../../store/actions/post';
import Context from "../../utils/context";

export default function PostDetails(props) {
    const { id } = useParams();
    const context = useContext(Context);

    useEffect(() => {
        GET_POST_BY_ID(id, context.dispatch);

        return () => CLEAN_UP_SELECTED_POST(context.dispatch);
    }, [id])

    return (
        <div className='container'>
            <PostDetailsCard postData={context?.store?.selectedPost} />
        </div>
    )
}
