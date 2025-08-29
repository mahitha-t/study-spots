import React,{useEffect, useContext} from 'react';
import SpotFinder from "../../apis/SpotFinder";
import { SpotContext } from '../../context/SpotContext';
import { useNavigate } from 'react-router-dom';

const SpotList =(props) => {
    const {spots, setSpots} = useContext(SpotContext)
    let navigate = useNavigate()
    useEffect(() => {
  async function fetchSpots() {
    try {
      const response = await SpotFinder.get("/");
      console.log(response); 
      setSpots(response.data.data.spots);
    } catch (error) {
      console.error(error);
    }
  }

  fetchSpots();
}, [setSpots]);

    const handleDelete = async (id) => {
        try {
            const response = await SpotFinder.delete(`/${id}`);
            setSpots(spots.filter(spot => {
                return spot.id !== id
            }))
            console.log(response)
        }
        catch (err){
            console.log(err)
        }
    }

    const handleUpdate = async (id) => {
        navigate(`/spot/${id}/update`);
            
    }

    return(
        <div className="list-group">
            <table className="table table-hover table-dark table-bordered table-striped">
                  <thead>
                    <tr className="bg-primary">
                        <th scope="col">Study Spot</th>
                        <th scope="col">Location</th>
                        <th scope="col">Volume</th>
                        <th scope="col">Ratings</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {spots&& spots.map((spot) => {
                        if (!spot) return null;
                        return(
                        <tr key={spot.id}>
                            <td>{spot.name}</td>
                            <td>{spot.location}</td>
                            <td>{".".repeat(spot.volume)}</td>
                            <td>reviews</td>
                            <td>
                                <button onClick={()=>handleUpdate(spot.id)} className="btn btn-warning">Update</button>
                            </td>
                            <td><button onClick={()=>handleDelete(spot.id)} className="btn btn-danger">Delete</button></td>                        
                        </tr>)
                    }
                    )}
                    
                </tbody>
            </table>
        </div>
    )
};

export default SpotList;