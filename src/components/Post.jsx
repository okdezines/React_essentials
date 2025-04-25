
const names= ['ompa', 'Dupsy']

const Post = () => {
    const chosenName = Math.random() > 0.5 ? names[0] : names[1]
  return (
    <div>
    <h1>{chosenName}</h1>
    <h3>React is Awesome!</h3>
    </div>
  )
}

export default Post
