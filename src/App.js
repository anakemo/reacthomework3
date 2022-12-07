
import { useState } from 'react';
import './App.css';


function App() {
let userNames=["user1","user2","user3","user4","user5","user6","user7","user8","user9","user10"];
let dataCount=userNames.length;



 
//   function generateUsers(){
//    return <>

// {userNames.map((user)=>{
//  return <li key={user}>{user}</li>
// })}
// </>
  
   
//   }
  
  // generateUsers(); 
  const [usersArray,setusersArray]=useState(userNames);
  const [leftUsers,setleftUsers]=useState(dataCount)
 
  
const clickHandler = () =>{
setusersArray(usersArray.splice(1));
setleftUsers(leftUsers-1);



}
console.log(usersArray);
console.log(leftUsers);



  return (
    
    <div className="App">
      <><h1>left users:{leftUsers}</h1>
     <h3>{usersArray}</h3>
     <button onClick={clickHandler} >delete user </button>

      </>
     

   
      
    </div>
  );
}

export default App;
