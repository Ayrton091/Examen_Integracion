const express = require("express")
const uri = 'mongodb+srv://ayrtonrios:Papasfritas091@cluster0.g38fljg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const mongoose = require('mongoose');
mongoose.connect(uri);
const app = express()
app.use( express.json() )
const port = 8080
const { authModel } = require('./models');
app.get('/', (req, res) => { res.send("I am alive order"); })

app.get('/user', async(req,res)=>{
    const list = await authModel.find({});
    res.json( list );
})
app.post('/signin', async(req, res)=>{
    try {
      const id = req.body.id;
      const state = req.body.state;
      const amount = req.body.amount;
  
      const person = new authModel({ state,amount});
  
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
  