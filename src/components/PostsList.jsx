import { useState } from 'react';
import Modal from './Modal';
import NewPost from './NewPost';
import Post from './Post'
import classes from './PostList.module.css'

function PostList({isPosting, onStopPosting}) {
    const [posts, setPosts] = useState([]);
    
    function addPostHandler(postData) {
        setPosts((existingPosts) => {[postData, ...existingPosts]});
        
    }
    
    return (
        <>
        
        {isPosting && (
         <Modal onClose={onStopPosting}>
            <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} 
             />
         </Modal>
        )}      
            <ul className={classes.posts}>
             <Post author = "Dupsy" body ='Check out this cool post!' />
            
            </ul>
        </>
    )
}

export default PostList;