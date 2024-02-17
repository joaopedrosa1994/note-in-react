import PostList from './components/PostList';
import MainHeader from './components/MainHeader';
import { useState } from 'react';
function App() {
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  function showModalHandler() {
    setIsVisibleModal(true);
  }

  function hideModalHandler() {
    setIsVisibleModal(false);
  }
  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostList
          isModalOpen={isVisibleModal}
          isModalClose={hideModalHandler}
        />
      </main>
    </>
  );
}

export default App;
