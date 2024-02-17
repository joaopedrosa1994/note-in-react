import Post from './Post';
import classes from './PostList.module.css';
import NewPost from './NewPost';
import Modal from './Modal';
import { useState } from 'react';
function PostList({ isModalOpen, isModalClose }) {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }
  return (
    <>
      {isModalOpen && (
        <Modal onClose={isModalClose}>
          <NewPost onCancel={isModalClose} onAddPost={addPostHandler} />
        </Modal>
      )}
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post author={post.author} body={post.body} key={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>There are no posts yet...</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}

export default PostList;
