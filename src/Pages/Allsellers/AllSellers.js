import React, { useState, useEffect } from "react";

const AllSellers = () => {
  const [allSeller, setAllSeller] = useState([]);
  const [role, setRole] = useState({});
  console.log("my role", role);
  //  load all user data

  useEffect(() => {
    fetch(" https://used-product-market-server.vercel.app/allUser")
      .then((res) => res.json())
      .then((data) => {
        setAllSeller(data);
      });
  }, []);

  // role change
  const roleChange = (e) => {
    setRole(e.target.value);
  };

  // handle role change submit
  const handleRoleSubmit = (id) => {
    fetch(" https://used-product-market-server.vercel.app/roleUpdate/" + id, {
      method: "PATCH",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify({ role: role }),
    })
      .then((res) => res.json())
      .then((data) => {
        // alert('role update successful')
      });
  };

  //   handle delete
  const handleDelete = (id) => {
    console.log(id);
    fetch(" https://used-product-market-server.vercel.app/sellerDelete/" + id, {
      method: "DELETE",
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Delete Successful");
      });
  };

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
            {allSeller.map((seller, i) => (
              <tr key={seller._id}>
                <th>{i + 1}</th>
                <td>{seller.name}</td>
                <td>{seller.email}</td>
                {/* <td>{allSeller?.role !=='admin' &&<button className='btn btn-primary '>Admin Create</button>}</td> */}
                <td>
                  <select
                    className="btn btn-outline-success"
                    onClick={() => handleRoleSubmit(seller._id)}
                    onChange={roleChange}
                    class="form-select form-select-sm"
                    aria-label=".form-select-sm example"
                  >
                    <option>Admin/user</option>
                    <option value="user">user</option>
                    <option value="admin">admin</option>
                  </select>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(seller._id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSellers;
