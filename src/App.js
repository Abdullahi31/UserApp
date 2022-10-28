
import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const [user, setUser]  =useState([])
  useEffect(()=>{
    fetch('https://randomuser.me/api/')
    .then((response) => response.json())
    .then((data) => {
      setUser(data.results[0])
      console.log(data.results)
    }
      ).catch(err =>{
      console.log(err)
    })
  }, [])

  const Handleclick = ()=> {
    window.location.reload();
  }

  console.log(user.email)
  return (
     <div className="App">
      <div onClick={Handleclick} className='arrow left'>
        {'<'}
      </div>
      <div onClick={Handleclick} className='arrow right'>
        {'>'}
      </div>
      {user.picture   &&
      
         <div  className='userContainer'>
               <img  src={user.picture.medium}/>
               <p>Name : <span>{user.name.first}</span> <span>{user.name.last}</span></p>
              <p> Email : <span>{user.email}</span></p>
              <p>Date Of Birth : <span>{user.dob.date}</span></p>
              <p>Gender : <span>{user.gender}</span></p>
              <p>Address : <span>{user.location.street.number}</span> <span>{ }</span>
              <span>{user.location.street.name}</span>, 
              <span>{user.location.city}</span>,
              <span>{user.location.state}</span> <span>{ }</span>  
              <span>{user.location.country}</span></p>
              <p>Phone no : <span>{user.phone}</span></p>
          </div>    
      }
    

    </div>
  );
}

export default App;
