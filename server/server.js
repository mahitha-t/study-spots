require("dotenv").config();
const cors=require("cors")
const db = require ("./db");
const express = require("express");
const morgan = require("morgan"); 
const app = express();
app.use(cors())
app.use(express.json());


//get all spots
app.get("/api/v1/spots/", async (req, res) => {

    try{
    const results = await db.query("SELECT * FROM spots");

    res.status(200).json({
      status: "success",
      results:results.rows.length,
      data: {
        spots: results.rows,
      },
    });
    }
    catch (err){
        console.log(err);
    }

    
});

//get a spot
app.get("/api/v1/spots/:id/", async(req, res) => {

    console.log(req.params.id);

    try{
    const results = await db.query("SELECT * FROM spots where id= $1", [req.params.id]);

    res.status(200).json({
        status: "success",
        data: {
            restaurants: results.rows[0],
    },
});
    }
    catch (err){
        console.log(err);
    }

    
});

//create a spot
app.post("/api/v1/spots/", async (req, res) => {
    console.log(req.body);

    try{
        const results = await db.query("insert into spots (name,location, volume) values ($1, $2, $3) returning *", [req.body.name, req.body.location, req.body.volume]);
        console.log(results);
        res.status(201).json({
        status: "success",
        data: {
            spot: results.rows[0],
    },
});
    }
    catch (err){
        console.log(err);
    }
    

});

//update spots
app.put("/api/v1/spots/:id/" , async(req, res) => {
    try{
        const results = await db.query("update spots set name = $1, location = $2, volume = $3 where id= $4 returning *", 
            [req.body.name, req.body.location, req.body.volume, req.params.id]);
        console.log(results);
        res.status(200).json({
        status: "success",
        data: {
            restaurants: results.rows[0],
    },
});
    }
    catch(err){
                console.log(err);

    }
    console.log(req.params.id);
    console.log(req.body);
    
});

//delete spot
app.delete("/api/v1/spots/:id", async(req, res) => {
    try{
        const results = await db.query("delete from spots where id= $1 ", [req.params.id]);
        console.log(results);
        res.status(204).json({
        status: "success",
});
    }
    catch(err){
        console.log(err);

    }
})

const port=process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`server is up and listening on port ${port}`);
});