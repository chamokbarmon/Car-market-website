import React from "react";

const AllsellerDetails = ({ seler, roleChange, handleRoleSubmit }) => {
  return (
    <div>
      <h1>{seler.name}</h1>
      { (
        <select
          className="btn btn-outline-success"
          onClick={() => handleRoleSubmit(seler._id)}
          onChange={roleChange}
          class="form-select form-select-sm"
          aria-label=".form-select-sm example"
        >
          <option>Select</option>
          <option value="user">user</option>
          <option value="admin">admin</option>
        </select>
      )}
    </div>
  );
};

export default AllsellerDetails;
