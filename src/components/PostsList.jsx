import NewPost from './NewPost';
import Post from './Post'
import classes from './PostList.module.css'

function PostList() {
    return (
        <>
        <NewPost />
        <ul className={classes.posts}>
            <Post  author = "Ompa" body ="React.js is Awesome!" />
            <Post author = "Dupsy" body ="Check out my React Life" />
        </ul>
        </>
    )
}

export default PostList;