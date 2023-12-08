import React, {useState} from 'react';
import {postAPI} from "../services/PostService";
import {useAppDispatch} from "../hooks/redux";
import PostItem from "./PostItem";
import {IPost} from "../models/IPost";

const PostContainer = () => {
    const [limit, setLimit] = useState(20)
    const {data:posts,isLoading,error} = postAPI.endpoints?.fetchAllPosts.useQuery(limit)
    const [createPost, {}] = postAPI.endpoints?.createPost.useMutation();
    const [updatePost, {}] = postAPI.endpoints?.updatePost.useMutation();
    const [deletePost, {}] = postAPI.endpoints?.deletePost.useMutation();
    const handleCreate = async () => {
        const title = prompt()
        await createPost({title, body: title} as IPost)

    }
    const handleRemove = async (post: IPost) => {
        deletePost(post)
    }
    const handleUpdate = async (post: IPost) => {
        updatePost(post)
    }
    return (
        <div>
            <div className="post__list">
                <button onClick={handleCreate}>Add new post</button>
                {isLoading && <h1>Идет загрузка...</h1>}
                {error && <h1>Произошла ошибка при загрузке...</h1>}
                {posts && posts.map(post => <PostItem post={post} key={post.id} remove={handleRemove} update={handleUpdate}/>)}
            </div>
        </div>
    );
};

export default PostContainer;