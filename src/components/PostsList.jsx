import {useState } from 'react';
import Modal from './Modal';
import NewPost from './NewPost';
import Post from './Post'
import classes from './PostList.module.css'

function PostList() {
    const [modalIsVisible, setModalIsVisible]  = useState(true)
    const [enteredBody, setEnteredBody] = useState('')
    const [enteredAuthor, setEnteredAuthor] = useState('')
    
    //HOOD functions
    function hideModalHandler(){
        setModalIsVisible(false)
    }
    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value)
    }
    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value)
    }
    
    return (
        <>
        
        {modalIsVisible && (
         <Modal onClose={hideModalHandler}>
            <NewPost 
                
            onBodyChange={bodyChangeHandler} 
            onAuthorChange={authorChangeHandler} />
         </Modal>
        )}
            
            <ul className={classes.posts}>
             <Post  author = {enteredAuthor} body ={enteredBody} />
             <Post author = "Dupsy" body ='asdfs' />
            </ul>
        </>
    )
}

export default PostList;