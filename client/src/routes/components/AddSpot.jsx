import React from 'react';

const AddSpot =() => {
    return(
        <div className = "mb-4">
           <form action="">
                <div className="row align-items-center">
                    <div className="col-md-3">
                        <input type="text" className='form-control' placeholder="name"/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" className='form-control' placeholder='location'/>
                    </div>
                    <div className="col-md-3">
                        <select className='form-select my-1'>
                            <option disabled>Price Range</option>
                            <option value="1">.</option>
                            <option value="2">..</option>
                            <option value="3">...</option>
                        </select>
                    </div>
                    <div className="col-md-3">
                        <button className="btn btn-primary w-100" type="submit">Add</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddSpot;