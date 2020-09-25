  import React, { Component } from "react";
  import { confirmAlert } from 'react-confirm-alert';
  import 'react-confirm-alert/src/react-confirm-alert.css' 
  class ReactApp extends Component {
  styles = {
      fontSize: 35,
      color: "#fff",
      textAlign: "center",
      fontFamily: "Quicksand",
      letterSpacing:3,
      textTransform: "uppercase",
    };
  
    render() { 
      return (
        <div className="template">
          <h1 style={this.styles}> Registration Page </h1>
          <form name="RgForm" action="#" onSubmit="return Validate()" >
            <i className="fa fa-user"></i>
            <input  
              type="text"
              placeholder="first name"
              name="firstname"
               required
            >
            
            </input>
            <br/>
            <i className="fa fa-user"></i>
            <input
              type="text"
              placeholder="Last Name"
              name="lastname"
               required
            ></input><br/>
            <i className="fa fa-calendar"></i>
            <input
              type="date"
              placeholder="dob"
              id="DOB"
              placeholder="Date of birth"
               required
            ></input><br/>

            <i className="fa fa-envelope-open"></i>
            <input
            id="emailadd"
              type="email"
              placeholder="Email address"
              
               required
            ></input>
            <br/>
            <i className="fa fa-phone"></i>
            <input type="number" id="MobNo" placeholder="Mobile number"  required></input>
            <br/>
            <i class="fa fa-user"></i>
            <select type="text" name="Course" onChange={this.props.handleOnChange}  required>
            <option value="Course">Course</option>
              <option value="BTECH">BTECH</option>
              <option value="BBA">BBA</option>
              <option value="BCA">BCA</option>
              <option value="B.COM">B.COM</option>
            </select>
<br/>
            <i className="fa fa-file"></i>
            <input type="file" id="file" name="Attachment"  accept=".doc,.docx,image/*" required></input>

            <br />

            <input className="btn" type="submit" value="SUBMIT" ></input>
          </form>
        </div>
      );
    }
    Validate= ()=>{
      var email = document.getElementById('emailadd');
      var dob = document.getElementById('DOB');
      var mobile = document.getElementById('Mobno.');
     
      if (email.value=="") {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
      }
      if (dob.value == "") {
        window.alert("Please enter a valid DOB.");
        dob.focus();
        return false;
      }
      if (mobile.value == "(?([0-9]{10})) || !(a-z)") {
        window.alert("Please enter a valid mobile.");
        mobile.focus();
        return false;
      }
return true;  
} 
  }
  export default ReactApp;
