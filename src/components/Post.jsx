

const Post = (props) => {
    props.author,
    props.body
  return (
    <div>
    <h1>{props.author}</h1>
    <h1>{props.body}</h1>
    </div>
  )
}

export default Post
