import React,{useEffect} from 'react';
import SpotFinder from "../../apis/SpotFinder";
const SpotList =() => {

    useEffect(async ()=>{
        try{
            const reponse= await SpotFinder.get("/");
            console.log(reponse);
        }
        catch(err){
            console.log(err)
        }
    },[])

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
                    <tr>
                            <td>mcd</td>
                            <td>nyc</td>
                            <td>$$</td>
                            <td>Rating</td>
                            <td><button className="btn btn-warning">Update</button></td>
                            <td><button className="btn btn-danger">Delete</button></td>
                    </tr>
                    <tr>
                            <td>mcd</td>
                            <td>nyc</td>
                            <td>$$</td>
                            <td>Rating</td>
                            <td><button className="btn btn-warning">Update</button></td>
                            <td><button className="btn btn-danger">Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
};

export default SpotList;