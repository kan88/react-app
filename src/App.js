import React, {useState} from 'react';
import { Counter } from './components/Counter';
import { CounterClass } from './components/CounterClass';
import { Form } from './components/Form';
import { FormRef } from './components/FormRef';
import { FormCallBack } from './components/FormСallback';
import { Input } from './components/Input';
import { ItemsList } from './components/ItemsList';
import { MySelect } from './components/ui/MySelect/MySelect';
import './styles/app.css';


function App() {

  //инициализируем состояние списка и прокинем 
  // в форму для работы с добавлением новых итемов и прокинем в список для отображения
  const [posts, setPosts] = useState([
    {id:1, title: 'JS', description: 'Frontend language'},
    {id:2, title: 'php', description: 'Backend language'},
    {id:3, title: 'sql', description: 'Backend language'}
  ]) 

  const createPost = (newProp) => {
    setPosts(() => [...posts, newProp])
  }

  const removePost = (post) => {
    setPosts(posts.filter((item) => post.id !== item.id))
  }

  return ( <div className='app'>
    <Form posts={posts} state={setPosts}/>
    <FormCallBack createPost={createPost}/>
    <MySelect/>
    <FormRef/>
    {posts.length !== 0
      ?     <ItemsList removePost={removePost} posts={posts} title="Cписок номер 1"/>
      : <div style={{fontSize: '22px', textAlign: 'center' }}>Все посты удалены</div>
    }
    <CounterClass/>
    <Counter/>
    <Input/>
  </div>);
}

export default App;