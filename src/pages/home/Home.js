import React, { Fragment, useContext, useEffect } from 'react';
import PostCard from '../../components/reusableComponents/PostCard';
import { GET_ALL_POST, CLEAN_UP_ALL_POSTS } from '../../store/actions/post';
import Context from "../../utils/context";

export default function Home() {

    const context = useContext(Context);

    useEffect(() => {
        GET_ALL_POST(context.dispatch);

        return () => CLEAN_UP_ALL_POSTS(context.dispatch);
    }, [])

    useEffect(() => {
        console.log(context);
    }, [context])

    return (
        <div className='container home'>

            <input placeholder='Search...' className='search' />

            {
                context.store?.posts?.map((post, index) => {
                    return (
                        <Fragment key={index}>
                            <PostCard postData={post} />
                        </Fragment>
                    )
                })
            }

        </div>
    )

}
