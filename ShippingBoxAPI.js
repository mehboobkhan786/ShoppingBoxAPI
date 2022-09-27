const express = require('express');
const app = express()
app.use(express.json())

const ShippingBox = [];


app.post('/additems',(req,res)=>{
    try{
     const item = req.body;
     ShippingBox.push(item);
     res.send(ShippingBox)
 
    }catch(error){
     res.send(error)
    }
 })

 
app.get('/additems',(req,res)=>{
    try{
        res.send(ShippingBox)

    }catch(error){
        res.send(error)
    }
    
});


app.put('/additems/:id',(req,res)=>{
    try{
        const id = req.params.id;
        const index = ShippingBox.findIndex((item)=>item.id ==id);
        
        ShippingBox[index]=req.body;
        res.send(ShippingBox)

     
 
    }catch(error){
     res.send(error)
    }
 })


 
 app.delete("/additems/:id",(req, res) => {
    try {
        const index = ShippingBox.findIndex((item) => item.id == req.params.id);
        ShippingBox.splice(index, 1)
        res.send("Deleted")
    } catch (error) {
       res.send(error) 
    }
})




app.get("/additems/:id",(req,res)=>{
    try{
    const item = ShippingBox.find((item)=> item.id == req.params.id);
    res.send(item)
 }catch(error) {
    res.send(error)
 }
})




































app.listen(3000,()=>{
    console.log('Shipping Server is running on port 3000');
});