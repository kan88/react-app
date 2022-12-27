import React, {useState} from 'react';
import { Counter } from './components/Counter';
import { CounterClass } from './components/CounterClass';
import { Form } from './components/Form';
import { FormRef } from './components/FormRef';
import { FormCallBack } from './components/FormСallback';
import { Input } from './components/Input';
import { ItemsList } from './components/ItemsList';
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

  return ( <div className='app'>
    <Form posts={posts} state={setPosts}/>
    <FormCallBack createPost={createPost}/>
    <FormRef/>
    <ItemsList posts={posts} title="Cписок номер 1"/>
    <CounterClass/>
    <Counter/>
    <Input/>
  </div>);
}

export default App;