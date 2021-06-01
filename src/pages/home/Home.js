import React, { Fragment, useContext, useEffect, useState } from 'react';
import PostCard from '../../components/reusableComponents/PostCard';
import { GET_ALL_POST, CLEAN_UP_ALL_POSTS } from '../../store/actions/post';
import Context from "../../utils/context";
import search from '../../utils/search'
export default function Home() {
    const [posts, setPosts] = useState([]);
    const context = useContext(Context);
    let timeout = null;

    useEffect(() => {
        GET_ALL_POST(context.dispatch);

        return () => CLEAN_UP_ALL_POSTS(context.dispatch);
    }, [])

    useEffect(() => {
        setPosts(context.store?.posts)
    }, [context.store?.posts])

    const searchHandle = (e) => {

        if (timeout) clearTimeout(timeout); // reset timer 

        timeout = setTimeout(function () {

            if (e.target.value) {
                search(e.target.value, context.store?.posts).then((results) => {
                    setPosts(results || [])
                })
            }
            else {
                //in case search input is null 
                setPosts(context.store?.posts)
            }

        }, 500);



    }

    return (
        <div className='container home'>

            <input placeholder='Search...' className='search' onChange={searchHandle} />

            {
                Array.isArray(posts) && posts.length > 0 ? posts.map((post, index) => {
                    return (
                        <Fragment key={index}>
                            <PostCard postData={post} />
                        </Fragment>
                    )
                }) : <h1 className='noData'>No data to show</h1>
            }

        </div>
    )

}
