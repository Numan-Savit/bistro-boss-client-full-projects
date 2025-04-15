// step-22_______________________________________________________________________________________1
import { useForm } from 'react-hook-form';


// step-18_______________________________________________________________________________________2

import { Link, useNavigate } from 'react-router-dom';
import loginImg from '../../../assets/others/authentication1.png';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import SocialLogin from '../Shared/SocialLogin';



const SignUp = () => {

  const axiosPublic = useAxiosPublic(); //step-35______________________4

  const {
    register,
    handleSubmit,
    reset,                //step-22______________________________________2
    formState : { errors },      //react-hooks-form use
  } = useForm();

  

  const {createUser, updateUserProfile} = useContext(AuthContext); //step-23_____________________1
  const navigate = useNavigate();

  const onSubmit = (data) => {  //step-22______________________________________3
     console.log(data);           //react hook form use

     createUser(data.email, data.password)
     .then(result => {
        const loggedUser = result.user;    //step-23___________________________2
        console.log(loggedUser);
        updateUserProfile(data.name, data.photoURL )
        .then(() => {

          const userInfo = {
            name: data.name,
            email: data.email,          //step-35______________________________5
            photoURL: data.photoURL
          }

          axiosPublic.post('/users', userInfo)
          .then(res => {
            //step-35__________________________________________________________6
            if(res.data.insertedId){
              console.log("user created successfully");
              reset();
              Swal.fire({
                title: "User Created Successfully!",
                icon: "success",
                draggable: true
              });
              navigate('/')
            }
          })
          
          // .catch(error => console.log(error));
     })
     .catch(error => console.log(error));
  })
  
  };

 

    // const handleLogin = event => {
    //     event.preventDefault();

    //     const form = event.target;
    //     const email = form.email.value;
    //     const password = form.password.value;           //step-18_____________________________________3

    //     console.log(email, password);

    // }

    return (
        <div>
            <div className="hero min-h-screen"> 
              <div className="md:flex justify-center items-center">
                <div className="text-center md:w-1/2 lg:text-left">
                  <img className='w-80 md:w-6xl' src={loginImg} alt="" />
                </div>
                <div className="card bg-base-100 md:w-1/2 max-w-sm shrink-0 shadow-2xl">
                 <p className='text-3xl font-bold text-center mt-5'>Sign Up</p>

                  <div className="card-body">

                    {/* react hooks form use */}

                    <form onSubmit={handleSubmit(onSubmit)} className="fieldset">
                      <label className="fieldset-label">Name</label>
                      <input type="text" {...register("name", { required: true})} name="name" className="input" placeholder="Name" />
                      <label className="fieldset-label">Photo URL</label>
                      <input type="text" {...register("photoURL", { required: true})} name="photoURL" className="input" placeholder="Photo URL" />
                      {errors.photoURL && <span>Photo URL is required</span>}
                      <label className="fieldset-label">Email</label>
                      <input type="email" {...register("email")} name="email" className="input" placeholder="Email" />
                      <label className="fieldset-label">Password</label>
                      <input type="password" {...register("password", { required: true, minLength: 6})} name="password" className="input" placeholder="Password" />
                      <div><a className="link link-hover">Forgot password?</a></div>
                      <input className="btn btn-primary w-" type="submit" value="Login" />
                    </form>

                    <div className='mt-3 flex justify-center'><SocialLogin></SocialLogin></div>

                    <p className='text-center mt-5'>Already have an account?
                     <Link to = '/login' className="link link-hover underline">Login</Link></p>
                  </div>

                </div>
              </div>
            </div>
        </div>
    );
};

export default SignUp;