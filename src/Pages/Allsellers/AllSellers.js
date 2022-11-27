import { useQuery } from '@tanstack/react-query';
import React, {} from 'react';
import toast from 'react-hot-toast';

const AllSellers = () => {
      const {data: allSeller=[], refetch} = useQuery({
        queryKey:['allSeller'],
        queryFn:async()=>{
            const res = await fetch('https://used-product-market-server.vercel.app/allUser');
            const data =await res.json();
            return data;
        }
       

      }) 
    
    const handelAdmin =(id)=>{
        fetch(`http://localhost:5000/users/admin/${id}`,{
            method:'PUT'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount >0){
                console.log('patch',data)
                toast.success('create Admin Successfully')
                refetch()
            }
        })

    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                   
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           allSeller.map((seller,i)=><tr>
                            <th>{i+1}</th>
                            <td>{seller.name}</td>
                            <td>{seller.email}</td>
                            <td>{allSeller?.role!=='admin'&&<button onclick={()=>handelAdmin(seller._id)} className='btn btn-primary '>Admin Create</button>}</td>
                            <td><button className='btn btn-danger'>Delete</button></td>
                          </tr>) 
                        }
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;