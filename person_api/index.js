const express = require("express")
const uri = 'mongodb+srv://ayrtonrios:Papasfritas091@cluster0.g38fljg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const mongoose = require('mongoose');
mongoose.connect(uri);
const app = express()
app.use( express.json() )
const port = 8080
const { personModel } = require('./models');
app.get('/', (req, res) => { res.send("I am alive person"); })

app.get('/user', async(req,res)=>{
    const list = await personModel.find({});
    res.json( list );
})

app.get('/user/:dni', async(req, res)=>{
  const person = await personModel.find({dni:req.params.dni});
  res.json( person );
});

app.post('/signup', async(req, res)=>{
    try {
      const name = req.body.name;
      const dni = req.body.dni;
      const phone = req.body.phone;
      const codpostal = req.body.codpostal;
      const address = req.body.address;
  
      const person = new personModel({ name,dni ,phone,codpostal , address});
      
      const data = await person.save();
      return res.status(201).json(data);
    } catch (error) {
      console.log('Error', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  