import logo from './logo.svg';
import './App.css';  
import Header from './components/Header';
import Footer from './components/Footer';
import main from './css/main.css';

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


  return (
    <>
    <main>
      <Header/>
      <h1 style={main}> 
        {firstName} {lastName} {age} {students.firstName}
      </h1> 

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
