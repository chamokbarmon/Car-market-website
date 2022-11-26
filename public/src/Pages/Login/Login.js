import { GoogleAuthProvider } from 'firebase/auth';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {
    const {signIn,GoogleProvider} = useContext(AuthContext)
    const { register, handleSubmit } = useForm();
    const location = useLocation()
    const navigate = useNavigate()
     
    const GoogleSign = new GoogleAuthProvider()

    const from = location.state?.from?.pathname || '/'
    const handellogin = data =>{
        console.log(data)
        signIn(data.email,data.password)
        .then(result=>{
            const user = result.user;
            console.log(user)
            navigate(from,{replace:true})
        })
        .catch(error=>console.log(error))

    }
    const handelGoogle =()=>{
        GoogleProvider(GoogleSign)
         .then(result=>{
           const user = result.user;
           console.log(user)
           navigate('/')
    
         })
         .catch(error=>{
           console.error('error',error)
         })
      }
     
    return (
        <div className=' h-[800px] w-96 justify-center items-center mx-auto '>

            <div >
                <h2 className='text-center text-4xl'>Login</h2>
                <form className='border mx-auto p-10 mt-7  ' onSubmit={handleSubmit(handellogin)}>


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold">Email</span> 
                        </label>
                        <input type="email" {...register("email",{required:true})} placeholder="First name" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold">Password</span> 
                        </label>
                        <input type="password" {...register("password",{required:'password is required',
                        minLength:{value :6,message:"password must be 6 Character"}
                    })} 
                    placeholder="First name" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <input className='btn btn-primary w-80  mt-10'  type="submit" />
                    <button onClick={ handelGoogle} className='btn btn-outline-secondary w-80  mt-5 font-bold text-white'>Google</button>
                </form>
                <p className='text-priamry font-bold'>New to Cars Market <Link to='/signup' className='text-secondary'>Signup</Link> </p>


            </div>
        </div>
    );
};

export default Login;