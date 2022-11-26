import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const Dashboard = () => {
    const {user} = useContext(AuthContext)

    const url =`https://used-product-market-server.vercel.app/bookings?email=${user?.email}`
    const {data:bookings = []} = useQuery({
        queryKey:['bookings',user?.email],
        queryFn:async () =>{
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <h1 className='text-3xl text-bold'>My Dashboard</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                   
                    <thead>
                        <tr>
                            <th></th>
                            <th>OrderName</th>
                            <th>Price</th>
                            <th>location</th>
                            <th>Number</th>
                            <th>Date</th>

                        </tr>
                    </thead>
                    <tbody>
                       
                       {
                        bookings.map((booking,i)=> <tr key={booking._id}>
                        <th>{i+1}</th>
                        <td>{booking.orderCar}</td>
                        <td>{booking.price}</td>
                        <td>{booking.location}</td>
                        <td>{booking.phone}</td>
                        <td>Number</td>
                    </tr>)
                       }
                       
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;