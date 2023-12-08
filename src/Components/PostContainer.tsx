import React from 'react';
import {postAPI} from "../services/PostService";
import {useAppDispatch} from "../hooks/redux";
import PostItem from "./PostItem";

const PostContainer = () => {
    const {data:posts,isLoading,error,} = postAPI.endpoints?.fetchAllPosts.useQuery(10)
    return (
        <div>
            <div className="post__list">
                {isLoading && <h1>Идет загрузка...</h1>}
                {error && <h1>Произошла ошибка при загрузке...</h1>}
                {posts && posts.map(post => <PostItem post={post} key={post.id}/>)}
            </div>
        </div>
    );
};

export default PostContainer;