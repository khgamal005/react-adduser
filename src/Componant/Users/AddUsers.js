import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './AddUsers.module.css';
import Errormodel from './Errormodel';




const AddUsers = (props)=>{
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, seterror] = useState()
    // const [user, setuser] = useState({
    //   Fname:'',
    //   age:''
    // })

    
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
const addUserHandeller=(e)=>{
    e.preventDefault()
    if(enteredUsername.trim().length ===0 ||enteredAge.trim().length===0 ){
      seterror({
        title : 'Input Invalid',
        message : 'please Enter avalid name and age(Non-empty value)'

      })
        return;
    }
    if(+enteredAge<1){
      seterror({
        title : 'Input Invalid',
        message : 'please Enter  age>0'})
        return;

    }
  

    console.log(enteredUsername ,enteredAge)
    setEnteredUsername('')
    setEnteredAge('')
    // getUser(e)
    props.addUserHandeller(enteredUsername ,enteredAge)
  }

//   function getUser({ target }) {
//     setuser({ ...user, [target.name]: target.value })
// }

const errorHandeller=()=>{
  seterror(null)
}

    return(
      <div>
        {error &&  <Errormodel   title= {error.title} message={error.message} submit={errorHandeller}/>}
     <Card className={classes.input}>
           <form onSubmit={addUserHandeller}>
            <label htmlFor='userName'>UseerName :</label>
            <input type="text"   id='userName'  onChange={usernameChangeHandler} value={enteredUsername} />
            <label htmlFor="age">Age (Years):</label>
            <input type="number"  id='age'  onChange={ageChangeHandler} value={enteredAge} />
            <Button type='submit'>Add User</Button>
            {/* <button type='submit'>Add User</button> */}
          
        </form>
     </Card>
     </div>
    )
}

export default AddUsers