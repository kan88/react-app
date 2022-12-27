import React from 'react';
import { Counter } from './components/Counter';
import { CounterClass } from './components/CounterClass';
import { Input } from './components/Input';


function App() {
  //count состояние, setCount запуск компонент дид апдейт, 0 стартовое состояние


  /* Это управляемые компоненты. их состояние мы можем изменить */

  return ( <div className='App'>
    <CounterClass/>
    <Counter/>
    <Counter/>
    <Counter/>
    <Counter/>
    <Input/>
  </div>);
}

export default App;