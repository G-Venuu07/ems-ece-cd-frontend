import axios from "axios";
import { useState } from "react"
function StudentForm(){
      const [formdata,setFormdata] = useState({
            name:"",
            dept:"",
            email:"",
            password:""
      });
      function handleChange(e){
            const name = e.target.name
            const value = e.target.value
            setFormdata({
                  ...formdata,
                  [name]:value
            });
      }
      async function hogaya(e){
            e.preventDefault();
            await axios.post("http://localhost:8080/add",formdata)
            .then((response)=>{
                  console.log(response.data);
            })
            .catch((error)=>{
                  console.log(error)
            });

            setFormdata({
                  name:"",
                  dept:"",
                  email:"",
                  password:""
            });
      }
      return(
            <>
                  <h1>Student Registration Form</h1>
            <form onSubmit={hogaya}>
                  
                  <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formdata.name}
                  onChange={handleChange}
                  />
                  <br/>
                  
                  <input
                  type="text"
                  name="dept"
                  placeholder="Enter your dept"
                  value={formdata.dept}
                  onChange={handleChange}/>
                  <br/>

                  <input
                  type="email"
                  name="email"
                  value={formdata.email}
                  onChange={handleChange}
                  placeholder="Enter your email"/>
                  <br/>
                  
                  <input
                  type="password"
                  name="password"
                  value={formdata.password}
                  onChange={handleChange}
                  placeholder="Enter your password"/>
                  <br/>

                  <button type="submit">Register</button>
            </form>
            </>
      )
}
export default StudentForm