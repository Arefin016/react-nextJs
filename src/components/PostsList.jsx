import NewPost from "./NewPost"
import Post from "./Post"
import classes from "./PostsList.module.css"
function PostsList() {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="Shah" body="React.js is awesome"></Post>
        <Post author="Manual" body="Check out the full course "></Post>
      </ul>
    </>
  )
}

export default PostsList
