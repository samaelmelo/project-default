import React, { useState } from 'react'
import PostItem from './PostItem'



function PostList(props) {
  const [posts, setPosts] = useState([])
  const [newPost, setNewPost] = useState('')

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])

  return (
    <>
      <input
        type="text"
        onChange={e => setNewPost(e.target.value)}
        value={newPost}
      />

      <ul>
        {posts.map(post => (
          <PostItem key={post.id} post={post} />
        ))}
      </ul>
    </>
  )
}

export default PostList
