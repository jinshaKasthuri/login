
import { useFormik } from 'formik';
import {login} from './validation';
import './App.css';


function App() {
  const initialValues = {
  name:"",
  email: '',
  Username:"",
  password: '',
  confirm_password:""
}
const { values, errors, touched, handleBlur, handleSubmit, handleChange,resetForm} = useFormik({
  initialValues,
  validationSchema: login,
  onSubmit: (values, action) => {
    console.log(values);
   action.resetForm();
  },
});


  return (
    <div className='body'>
    <div className="App">
      <form onSubmit={handleSubmit}className='form'>
        <h1 className='head'>REGISTER HERE</h1>
        <label>Enter Your name</label>
        <input type="text"  name="name" 
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur} />
        
        {errors.name&&touched.name?(<p className='form-error'>{errors.name}</p>):null}
       
        
        <label>Enter Your Email</label>
        <input type="email" name="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.email && touched.email && <p>{errors.email}</p>}
    
        <label>Enter Your Username</label>
        <input type="text" name="Username" 
        value={values.Username}
        onChange={handleChange}
        onBlur={handleBlur} />
        
        {errors.Username&&touched.Username?(<p className='form-error'>{errors.Username}</p>):null}
        
        <label>Enter Your Password</label>
        <input type="password" name="password" 
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.password && touched.password && <p>{errors.password}</p>}
        

        <label>Enter Your Confirm password</label>
        <input type="password" name="confirm_password"
        value={values.confirm_password}
        onChange={handleChange} />
       {errors.confirm_password&&touched.confirm_password?(<p>{errors.confirm_password}</p>):null}
        

<button type='Register' className='button'>Register</button>
     <a>Forgot Password</a>
      </form>
      
    </div>
    </div>
  );
}

export default App;
