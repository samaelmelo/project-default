import React, {memo} from 'react';

function PostItem({post}) {

  return (
    <li key={post.id}>
      <strong>{post.title}</strong>
      <p>{post.body}</p>
    </li>
  );
}

export default memo(PostItem);