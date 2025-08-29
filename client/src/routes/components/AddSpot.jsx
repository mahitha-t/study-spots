import React,{useState, useContext} from 'react';
import SpotFinder from '../../apis/SpotFinder';
import { SpotContext } from '../../context/SpotContext';
const AddSpot =() => {
    const {addSpot} = useContext(SpotContext);
    const[name, setName] = useState("")
    const[location, setLocation] = useState("")
    const[volume, setVolume] = useState("Volume")

    const handleSubmit = async(e) => {
        e.preventDefault()
        try{
            const response = await SpotFinder.post("/", {name, location, volume});
            addSpot(response.data.data.spot);
            console.log(response);
        }
        catch(err){

        }
    }

    return(
        <div className = "mb-4">
           <form action="">
                <div className="row align-items-center">
                    <div className="col-md-3">
                        <input value={name} onChange={e=>setName(e.target.value)}type="text" className='form-control' placeholder="name"/>
                    </div>
                    <div className="col-md-3">
                        <input value={location} onChange={e=>setLocation(e.target.value)} type="text" className='form-control' placeholder='location'/>
                    </div>
                    <div className="col-md-3">
                        <select value={volume} onChange={e=>setVolume(e.target.value)}className='form-select my-1'>
                            <option disabled value= "Volume">Volume</option>
                            <option value="1">.</option>
                            <option value="2">..</option>
                            <option value="3">...</option>
                        </select>
                    </div>
                    <div className="col-md-3">
                        <button onClick={handleSubmit} className="btn btn-primary w-100" type="submit">Add</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddSpot;