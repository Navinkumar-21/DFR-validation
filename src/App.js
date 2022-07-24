import logo from './imagesback/logo.svg';
import './App.css';
import image from './imagesback/poweredByQComm.svg';
import { useState } from 'react';
function App() {
  // const initialValues ={username:"",password:"",};
  // const [formValues, setFormValues]=useState(initialValues);
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];


  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };
  const createUser =(event) => {
    event.preventDefault()
     let formData ={
      username: event.target[0].value,
        password: event.target[1].value,
     }
     console.log(formData);
  var{uname,pass} =document.forms[0]

  /// Username & Password Validation Check
  const userData = database.find((user) => user.username === uname.value);
  if (!userData) {
    setErrorMessages({ name: "uname", message: "Invalid Username" });
    return
  } else if (userData.password !== pass.value) {
    setErrorMessages({ name: "uname", message: "Invalid Passowrd" });
    return
  } else {
    setErrorMessages({ name: "uname", message: "Logged-In Successfully" });
  }

  // if (userData) {
  //   if (userData.password !== pass.value) {
  //     // Invalid password
  //     setErrorMessages({ name: "pass", message: errors.pass });
  //   } else {
  //     // setIsSubmitted(true);
  //   }
  // } else {
  //   // Username not found
  //   setErrorMessages({ name: "uname", message: errors.uname });
  // }
};
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="errors">{errorMessages.message}</div>
    );


  // const createUser =(event) => {
  // event.preventDefault()
  //  let formData ={
  //   username: event.target[0].value,
  //     password: event.target[1].value,
  //  }
  //  console.log(formData);
  // }
  
  const renderForm = (
    <div className="maincontainer">
      {/* <h1>
      <img src={logo} alt="img"/>
      </h1> */}
      <form className="form" onSubmit={createUser}>
        <div className="logoContainer">
      <h1>
      <img src={logo} alt="img"/>
      </h1>
      </div>
        {/* <img src={logo} alt="img"/> */}
     
        {renderErrorMessage("uname")}
     <input className="input-text" 
     type="text"
     name="uname" 
     placeholder="username"
     required
    />
     

     <input className="input-text" 
     type="password" 
     name="pass"
     placeholder="password"
     required/>

     <input className="button"
      type="submit" 
      value="login"/>
     {/* <botton>login</botton> */}
    <footer>
      <center>
      <img src={image} alt="logo"/>
       </center>

    </footer> 
    </form>
     </div>
     );

     return(
      <div className="app">
      <div className="login-form">
        {/* <div className="title">Sign In</div> */}
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
     
}

export default App;
