import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';

const CarsecondModal = ({service}) => {
    const {user} = useContext(AuthContext)
    const handelmodal = event =>{
        event.preventDefault()
        const form = event.target;
        const name =form.name.value;
        const price = form.price.value;
        const location = form.location.value;
        const phone = form.phone.value;
        const orderCar = form.orderCar.value;
        const email = form.email.value;


        const booking = {
            orderCar :orderCar,
            name,
            price,
            location,
            phone,
            email
            
           
        }
      console.log(booking)
      fetch(`https://used-product-market-server.vercel.app/bookings`,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(booking)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        toast.success('booking Successfully')
      })

    }
    return (
        <div>
            < input type = "checkbox" id = "booking-modal1" className = "modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor="booking-modal1" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                       <form action="" onSubmit={handelmodal} className='grid grid-cols-1 gap-5 mt-10'>
                       <input name='name' type="text"  defaultValue={user?.displayName} placeholder='Enter your name:' className="input w-full font-bold text-black-500  input-bordered" />
                       <input  name='email' type="email" readOnly defaultValue={user?.email} placeholder='email' className="input w-full  font-bold text-black-500 input-bordered" />
                       <input name='orderCar' type="text" defaultValue={service.Product2[0].name} className="input w-full font-bold text-black-500 input-bordered" />
                       <input name='price'  defaultValue={service.Product2[0].price} className="input w-full font-bold text-black-500 input-bordered" />
                       <input name='location' type="text" defaultValue={service.Product2[0].location} className="input w-full font-bold text-black-500  input-bordered" />
                       <input name='phone'  defaultValue={service.Product2[0].Mobile} className="input w-full  font-bold text-black-500 input-bordered" />
                      
                        <button htmlFor="booking-modal1" className='btn w-full btn-accent font-bold'>Submit</button>
                        
                       </form>
                    </div>
                </div>
        </div>
    );
};

export default CarsecondModal;