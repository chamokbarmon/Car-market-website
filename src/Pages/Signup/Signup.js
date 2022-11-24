import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Signup = () => {
    const { register, handleSubmit } = useForm();
    const handellogin = data =>{
        console.log(data)
    }
    return (
        <div className=' h-[800px] w-96 justify-center items-center mx-auto '>

        <div >
            <h2 className='text-center text-4xl'>SignUp</h2>
            <form className='border mx-auto p-10 mt-7  ' onSubmit={handleSubmit(handellogin)}>


                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-bold">Name </span> 
                    </label>
                    <input type="text" {...register("name",{required:true})} placeholder="First name" className="input input-bordered w-full max-w-xs" />
                </div>
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
               
            </form>
            <p className='text-priamry font-bold'>Already have a Account Cars Market <Link to='/login' className='text-secondary'>login</Link> </p>


        </div>
    </div>
    );
};

export default Signup;