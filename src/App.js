import React from "react";
import './index.css';
// TODO: import useFormik from formik library
import { useFormik} from 'formik'


function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''      
    },
    onSubmit: values =>{
      alert("Login Successful!");
    },
    validate: values =>{
      let errors = {};
      if(!values.email) 
      {
        errors.email = 'Field required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Username should be an email ';
      }
      if(!values.password) errors.password = 'Field required';
      return errors;
    }
  });


  return (
    <div>
      <h3>Log-In</h3>
      <form onSubmit={formik.handleSubmit}>
        <div>
          Email:
          <input type="text" name="email" id="emailField" onChange={formik.handleChange} value={formik.values.email}/>
          {formik.errors.email ? <div style={{color:'red'}} id="emailError">{formik.errors.email}</div> : null} 
        </div>
        <div>
          Password: 
          <input type="text" name="password" id="pswField" onChange={formik.handleChange} value={formik.values.password}/>
          {formik.errors.password ? <div style={{color:'red'}} id="pswError">{formik.errors.password}</div> : null} 
        </div>
        <div> 
          <button type="submit" id="submitBtnx">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
