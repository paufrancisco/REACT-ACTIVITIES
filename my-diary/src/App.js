import logo from './logo.svg';
import './App.css';  
import Header from './components/Header';
import Footer from './components/Footer';
import './css/main.css'; // use this for CSS classes, not JS objects
import { useState, useEffect } from 'react';
import Form from './components/Forms';
import { use } from 'react';

function App() {
  const firstName = 'Paulo';
  const lastName = 'Francisco';
  const age = 30;
  const students = {
    firstName: 'Mat',
    lastName: 'James',
    age: 20,
  };
  const arr = [1, 2, 3, 4, 5];
  const [num, setNum] = useState(12);
  const [username, setUsername] = useState('sample');





  const [diary, setDiary] = useState('')

  const changeHandler = (e) =>{
    setDiary(e.target.value)
  }

  const [example, setExample] = useState('');

  useEffect(()=>{
    console.log('render')
  },[example]) 




  return (
    <>
      <Header />
      <main> 
        <input name = 'example' value={example} onChange={(e)=> setExample(e.target.value)}/>
        <Form myDiary={diary} handleChange = {changeHandler} />
      <Footer />
      </main>
    </>
  );
}

export default App;