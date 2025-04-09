import { Link, useLocation, useNavigate } from 'react-router-dom';
import signupImg from '../../../assets/others/authentication2.png';

import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect,useState } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {

    
    const [disable, setDisable] = useState(true);

    const {signIn} = useContext(AuthContext);  //step-21______________________________3
    // step-25_______________________________________4
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    // step-25________________________________________4

    useEffect(() =>{
        loadCaptchaEnginge(6);  //step-19________________________________________1
    },[])

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
        // step-21___________________________________start3
        signIn(email, password) 
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();

            Swal.fire({
              title: "User Login Successfully",
              showClass: {
                popup: `
                  animate__animated
                  animate__fadeInUp
                  animate__faster
                `
              },
              hideClass: {
                popup: `
                  animate__animated
                  animate__fadeOutDown
                  animate__faster
                `
              }
            });

            navigate(from, {replace: true});
        })
        // step-21_______________________________________end3
    }

    const handleValidateCaoptcha = (e) => {
        const user_captcha_value = e.target.value;  //step-19_______________________________________3
       if(validateCaptcha (user_captcha_value)){
          setDisable(false);
       }
    }


    return (
        <div>

        <div className="hero min-h-screen"> 
              <div className="md:flex justify-center items-center">
                <div className="text-center md:w-1/2 lg:text-left">
                  <img className='w-80 md:w-6xl' src={signupImg} alt="" />
                </div>
                <div className="card bg-base-100 md:w-1/2 max-w-sm shrink-0 shadow-2xl">
                 <p className='text-3xl font-bold text-center mt-5'>Login</p>
                  <div className="card-body">
                    <form onSubmit={handleLogin} className="fieldset">
                      <label className="fieldset-label">Email</label>
                      <input type="email" name="email" className="input" placeholder="Email" />
                      <label className="fieldset-label">Password</label>
                      <input type="password" name="password" className="input" placeholder="Password" />
                      {/* step-19_______________________________________2 */}
                      <label className="fieldset-label"><LoadCanvasTemplate /></label>  
                      <input onBlur = {handleValidateCaoptcha} type="text"  name="captcha" className="input" placeholder="Type Captcha" />
                     
                      <input disabled={disable} className="btn btn-primary w-" type="submit" value="Login" />
                    </form>
                    <p className='text-center mt-5'>New to Bistro Boss?
                     <Link to = '/signup' className="link link-hover underline">Create an account</Link></p>
                    
                  </div>
                </div>
              </div>
            </div>
            
         </div>
    );
};

export default Login;