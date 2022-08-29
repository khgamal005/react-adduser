import React ,{useState}from 'react';
import AddUsers from './Componant/Users/AddUsers';
import UsersList from './Componant/Users/UsersList';


function App() {

  const [users, setUser] = useState([])
  const addUserHandeller=(uName ,uAge)=>{
      setUser((prevState)=>{
        return [...prevState,{name :uName, age:uAge ,id:Math.random().toString()}]
      })
  }
  return (
    <div>
<AddUsers addUserHandeller={addUserHandeller}/>
<UsersList  users={users}/>
    </div>
  );
}

export default App;
