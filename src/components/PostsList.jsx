import { useState, useEffect } from 'react';
import Modal from './Modal';
import NewPost from './NewPost';
import Post from './Post'
import classes from './PostList.module.css'

function PostList({isPosting, onStopPosting}) { 
    const [posts, setPosts] = useState([])
    const [isFetching, setIsFetching] = useState(false)
    
    useEffect(() => {
        async function fetchPosts() {
            setIsFetching(true);
            const response = await fetch('http://localhost:8080/posts');
            const data = await response.json();
            setPosts(data.posts);
            setIsFetching(false);
        }
        fetchPosts()
            // .catch((error) => {
            //     console.log(error);
            // });
        
    }, []);
                                         
    function addPostHandler(postData) {
        fetch('http://localhost:8080/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
            }
        });  
        setPosts((existingPosts) => [postData, ...existingPosts]);
    }
    
    return (
        <>
        { isPosting && (
         <Modal onClose={onStopPosting}>
            <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} 
             />
         </Modal>
        )}   
        <h2>Posts</h2>
        {!isFetching && posts.length > 0 && (
            <ul className={classes.posts}>
            {posts.map((post) => 
                <Post
                    key={Math.random()}
                    author={post.author}
                    body={post.body}/> 
                    )}
            </ul>
        )}
        {!isFetching && posts.length === 0 && (
            <p style={{textAlign:'center', color: 'white'}}>No posts yet!</p>)}
        {isFetching && (
            <div style={{textAlign:'center', color: 'white'}}>
            <p>Loading...</p></div>
            )}
        </>
    );
}

export default PostList;