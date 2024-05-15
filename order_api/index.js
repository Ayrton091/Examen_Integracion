const express = require("express")
const personService = require("./services/personService")
const uri = 'mongodb+srv://ayrtonrios:Papasfritas091@cluster0.g38fljg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const mongoose = require('mongoose');
mongoose.connect(uri);
const app = express()
app.use( express.json() )
const port = 8080
const { orderModel } = require('./models');
app.get('/', (req, res) => { res.send("I am alive order"); })

app.post('/orders', async (req, res) => {
  try {
    const { dni, amount, id } = req.body;

    // Buscar a la persona por DNI
    const person = await personService.get({ dni });
    if (!person) throw ("PERSON_NOT_FOUND");

    // Crear una nueva orden con los datos de la persona
    const newOrder = new Order({
      id,
      name: person.name,
      codpostal: person.codpostal,
      amount,
      status: 'IN_PROGRESS' // Valor predeterminado
    });

    const savedOrder = await newOrder.save();
    return res.status(201).json(savedOrder);
  } catch (error) {
    console.log('Error', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  