import React,{useState,useEffect } from 'react'



const Login = props => {

  const [Mail,setMail] = useState(".");
  const [Pass,setPass] = useState(".");
 
  useEffect(() => 
  {
    console.log("Login");



  });


  const Save = () =>
  {
    setMail(document.getElementById("txtEmail").value);
    setPass(document.getElementById("txtPass").value);
    


  }

return (
<>

<div className="Auth-form-container">
        <div className="Auth-form">
              <div className="Auth-form-content">
                <h3 className="Auth-form-title">Sign In</h3>
                <div className="form-group mt-3">
                  <label>Email address</label>
                  <input id="txtEmail" key="txtEmail"
                    type="email"
                    className="form-control mt-1"
                    placeholder="Enter email"
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Password</label>
                  <input id="txtPass" key="txtPass"
                    type="password" 
                    className="form-control mt-1"
                    placeholder="Enter password"
                  />
                </div>
                <div className="d-grid gap-2 mt-3">
                  <button type="button"  onClick={Save} className="btn btn-primary">
                    Save
                  </button>
                </div>
                <p className="forgot-password text-right mt-2">
                  Forgot <a href="#">password?</a>
                </p>
              </div>
            </div>
   

            </div>

         

    </>
  );
};

export default Login;
