import logo from './logo.svg';
import './App.css';  
import Header from './components/Header';
import Footer from './components/Footer';
import main from './css/main.css';
import {useState} from 'react';


function App() {

  const firstName = 'Paulo';
  const lastName ='Francisco';
  const age = 30;
  const students = {
    firstName: 'Mat',
    lastName: 'James',
    age: 20,
  }

 
  const arr = [1,2,3,4,5];

  const [num, setNum] = useState(12);
  const [username, setUsername] = useState('sample');


  return (
    <>
    <main> 
      <Header/>
      main
      <h1 > 
         This is the num : {num}
         <button onClick={()=>setNum(num +1)}>
          Add
         </button>
      </h1> 
      <br/>
      <h1 > 
        {username}
      </h1> 
      <button onClick={()=>setUsername("mema")}>
      change username
      </button>

      <input value = {username} onChange = {(e)=>setUsername(e.target.value)}/>
    




      {/* map all the array */}
      {arr.map(num => <p> {num * 5 }</p>)} 

      {/* map all the object */}
      {Object.values(students).map((val,i)=> <p key={i}>{val}</p>)}
    </main>
    <Footer/>
    </>
     
  );
}

export default App;
