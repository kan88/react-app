import React, {useMemo, useState} from 'react';
import { Counter } from './components/Counter';
import { Filter } from './components/Filter';
import { FormCallBack } from './components/FormСallback';
import { Input } from './components/Input';
import { ItemsList } from './components/ItemsList';
import { MyBtn } from './components/ui/MyBtn/MyBtn';
import { MyModal } from './components/ui/MyModal/MyModal';
import './styles/app.css';


function App() {

  //инициализируем состояние списка и прокинем 
  // в форму для работы с добавлением новых итемов и прокинем в список для отображения
  const [posts, setPosts] = useState([
    {id:1, title: 'JS', description: 'Frontend language'},
    {id:2, title: 'php', description: 'Backend language'},
    {id:3, title: 'sql', description: 'Backend language'}
  ]) 
  const [modal, setModal] = useState(false)
  const [filter, setFilter] = useState({sort: '', query: ''})

  const sortedPosts = useMemo(() => {
    if(filter.sort) {
      return [...posts].sort((a,b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts
  }, [filter.sort, posts]);

  const sortedSearchingPosts = useMemo(() => {
    return sortedPosts.filter((post) => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedPosts])

  const createPost = (newProp) => {
    setPosts(() => [...posts, newProp])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter((item) => post.id !== item.id))
  }

  return ( <div className='app'>
    <MyBtn onClick={() => setModal(true)}>
      Добавить пост
    </MyBtn>
    <Filter filter={filter} setFilter={setFilter}/>
    <MyModal visible={modal} setVisible={setModal}>
      <FormCallBack createPost={createPost} />
    </MyModal>
    <hr style={{ margin: '15px 0' }}></hr>
    <ItemsList removePost={removePost} posts={sortedSearchingPosts} title="Cписок номер 1"/>
    <hr style={{ margin: '15px 0' }}></hr>
    <Counter/>
    <Input/>
  </div>);
}

export default App;