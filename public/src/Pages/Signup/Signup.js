import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Signup = () => {
    const { createUser, updateUser } = useContext(AuthContext)
    const { register, handleSubmit } = useForm();
    const [signupError, setSignUpError] = useState('')
    const navigate = useNavigate();
    //user singup data set state

    const [name, setName] = useState('')


    const handelSignup = data => {
        console.log(data)
        setSignUpError('')
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;

                // data fetch start
                fetch('https://used-product-market-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user, { displayName: data.name })
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('saveuser', data)
                        alert('successful')
                        navigate('/')
                    })
                // data fetch end


                toast('user Create SuccessFully')
                navigate('/')
                const userInfo = {
                    displayName: data.name

                }
                updateUser(userInfo)
                    .then(() => { saveUser(data.name, data.email) })
                    .catch(err => console.log(err))
            })
            .catch(error => {
                console.log(error)
                signupError(error.message)

            })

        const saveUser = (name, email) => {
            const user = { name, email };
            // fetch(`https://used-product-market-server.vercel.app/users`, {
            //     method: 'POST',
            //     headers: {
            //         'content-type': 'application/json'
            //     },
            //     body: JSON.stringify(user)
            // })
            //     .then(res => res.json())
            //     .then(data => {
            //         console.log('saveuser', data)
            //         navigate('/')
            //     })
        }
    }

    return (
        <div className=' h-[800px] w-96 justify-center items-center mx-auto '>

            <div >
                <h2 className='text-center text-4xl'>SignUp</h2>
                <form className='border mx-auto p-10 mt-7  ' onSubmit={handleSubmit(handelSignup)}>


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold">Name </span>
                        </label>
                        <input name='name' type="text" {...register("name", { required: true })} placeholder="First name" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold">Email</span>
                        </label>
                        <input type="email" {...register("email", { required: true })} placeholder="First name" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold">Password</span>
                        </label>
                        <input type="password" {...register("password", {
                            required: 'password is required',
                            minLength: { value: 6, message: "password must be 6 Character" }

                        })}


                            placeholder="First name" className="input input-bordered w-full max-w-xs" />
                    </div>
                    {signupError && <p className='text-red-600'>{signupError}</p>}
                    <input className='btn btn-primary w-80  mt-10' type="submit" />
                </form>
                <p className='text-priamry font-bold'>Already have a Account Cars Market <Link to='/login' className='text-secondary'>login</Link> </p>


            </div>
        </div>
    );
};

export default Signup;