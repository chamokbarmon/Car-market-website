import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const ModalCarSubmit = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            < input type = "checkbox" id = "booking-modal" className = "modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                       <form action="" className='grid grid-cols-1 gap-5 mt-10'>
                       <input type="text" placeholder={user.displayName} className="input w-full  input-bordered" />
                       <input type="email" placeholder={user.email} className="input w-full  input-bordered" />
                       <input type="text" placeholder="Type here" className="input w-full  input-bordered" />
                       <input type="text" placeholder="Type here" className="input w-full  input-bordered" />
                       <input type="text" placeholder="Type here" className="input w-full  input-bordered" />
                       <input type="submit" className='btn btn-accent' value="Submit" />

                       </form>
                    </div>
                </div>
        </div>
       
            
    );
};

export default ModalCarSubmit;

