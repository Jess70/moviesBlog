import React , { Component }from 'react';
import './Auth.css'
import Axios from 'axios'
//import { NavLink } from 'react-router-dom'

class Auth extends Component{
      state={
        signUp: true,
        data :{
          email : null,
          password : null,
          returnSecureToken : true
        },
    
        username: false
        
      }
      
    
      checkValidity(value, rules) {
        let isValid = true;
    
        if (rules.required) {
          isValid = value.trim() !== '' && isValid;
        }
    
        if (rules.minLength) {
          isValid = value.length >= rules.minLength && isValid;
        }
    
        if (rules.maxLength) {
          isValid = value.length <= rules.maxLength && isValid;
        }
    
        return isValid;
      };
    
      handleInputChange = (event, inputIdentifier) => {
      
        if(inputIdentifier==="email"){
          console.log('email')
        let updatedData = { ...this.state.data };
        updatedData.email= event.target.value
        this.setState({ data : updatedData});
        }
        if(inputIdentifier==="password"){
          console.log('password')
          let updatedData = { ...this.state.data };
          updatedData.password= event.target.value
      
          this.setState({ data : updatedData});
          }

        }
      signUpHandler=()=>{
        let what = this.state.signUp
        what= !what;
        this.setState({
          signUp: what,
          username: true
        
        });
        console.log("[HandlerOuter]")

      }
      submitHandler=()=>{
        console.log("hi")
        console.log(this.state.data)
        if(this.state.signUp){
          console.log("Submitted")
          Axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAU6ZbIFqJxHsvu0KwR_Ib2OsXsPTgl5w8',this.state.data)
          .then(res=>{
            console.log(res)
            this.props.history.push('/Login')
           }   
          ).catch(function (error) {
            // handle error
            console.log(error);
            alert('error')
          })
          
        }
        if(!this.state.signUp){
          Axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAU6ZbIFqJxHsvu0KwR_Ib2OsXsPTgl5w8',this.state.data)
          .then(res=>{
            console.log(res)
            this.props.history.push('/Login')
           }   
          ).catch(function (error) {
            console.log(error);
          })
          
        }
        
      }
    
    render(){
     // const goto= this.state.direct? <NavLink to='LogIn'></NavLink> :null
      const username = this.state.username? <input
        type ="text"
         placeholder="Full Name" /> : null

      const heading= this.state.username? 'Register' : 'Welcome!'
      return(
         <form className="Main">
           <h1>{heading}</h1>
           <div>
             {username}<br/>
           <input
           type ="text"
              placeholder="Email Address"
              onChange={(event) => this.handleInputChange(event,"email")} /><br/>
            <input
              placeholder = "Password"
              type ="Password"
              onChange={(event) => this.handleInputChange(event,"password")} />
           </div>
           
          <button type="button" 
          onClick={()=>this.submitHandler()}>SUBMIT</button>
          <button style={{color: "red"}} 
           type="button"
            onClick={this.signUpHandler}>
            Switch to {this.state.signUp? "SignUp":"SignIn"}</button>
      
         </form>
        );
    }
}
export default Auth