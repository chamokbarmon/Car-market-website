import React from 'react';

const ProductDelete = ({title,message,Action,data}) => {
    return (
    <div>
        <input type="checkbox" id="deleteModal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">{title}</h3>
    <p className="py-4">{message}</p>
    <div className="modal-action">
   
      <label onClick={()=>Action(data)} htmlFor="deleteModal" className="btn btn-accent">Delete</label>
      <label htmlFor="deleteModal" className="btn">Cancel</label>
    </div>
  </div>
</div>
    </div>
      



    );
};

export default ProductDelete;