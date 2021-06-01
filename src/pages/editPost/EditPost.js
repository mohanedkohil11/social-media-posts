import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EditPostCard from '../../components/reusableComponents/EditPostCard';
import { GET_POST_BY_ID, CLEAN_UP_SELECTED_POST } from '../../store/actions/post';
import Context from "../../utils/context";

export default function EditPost() {

    const { id } = useParams();
    const context = useContext(Context);

    useEffect(() => {
        GET_POST_BY_ID(id, context.dispatch);

        return () => CLEAN_UP_SELECTED_POST(context.dispatch);
    }, [id]);

    return (
        <div className='container'>
            <EditPostCard postData={context?.store?.selectedPost} />
        </div>
    )
}
