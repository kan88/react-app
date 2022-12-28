import React, {useEffect, useState} from 'react';
import { Counter } from './components/Counter';
import { Filter } from './components/Filter';
import { FormCallBack } from './components/FormСallback';
import { Input } from './components/Input';
import { ItemsList } from './components/ItemsList';
import { MyBtn } from './components/ui/MyBtn/MyBtn';
import { MyModal } from './components/ui/MyModal/MyModal';
import { usePosts } from './hooks/usePosts';
import './styles/app.css';
import { PostService } from './API/PostService';
import { MyLoader } from './components/ui/MyLoader/MyLoader';


function App() {

  //инициализируем состояние списка и прокинем 
  // в форму для работы с добавлением новых итемов и прокинем в список для отображения
  const [posts, setPosts] = useState([]) 
  const [modal, setModal] = useState(false)
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [loading, setLoading] = useState(false)
  const sortedSearchingPosts = usePosts(posts, filter.sort, filter.query )
  async function fetchPosts () {
    setLoading(true)
    const posts = await PostService.getAll()
    setPosts(posts)
    setLoading(false)
  }
  useEffect(() => {
    fetchPosts()
  }, [])


  const createPost = (newProp) => {
    setPosts(() => [...posts, newProp])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter((item) => post.id !== item.id))
  }

  return ( <div className='app'>
    <MyBtn onClick={fetchPosts}>Посмотреть данные</MyBtn>
    <MyBtn onClick={() => setModal(true)}>
      Добавить пост
    </MyBtn>
    <Filter filter={filter} setFilter={setFilter}/>
    <MyModal visible={modal} setVisible={setModal}>
      <FormCallBack createPost={createPost} />
    </MyModal>
    {loading
    ? <MyLoader/>
    : <ItemsList removePost={removePost} posts={sortedSearchingPosts} title="Cписок постов"/>
  }
    
    <hr style={{ margin: '15px 0' }}></hr>
    <Counter/>
    <Input/>
  </div>);
}

export default App;