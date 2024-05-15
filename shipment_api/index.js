const express = require("express")
const personService = require("./services/personService")
const uri = 'mongodb+srv://ayrtonrios:Papasfritas091@cluster0.g38fljg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const mongoose = require('mongoose');
mongoose.connect(uri);
const app = express()
app.use( express.json() )
const port = 8080
const { shipmentModel } = require('./models');
app.get('/', (req, res) => { res.send("I am alive shipment"); })


app.post('/shipments', async (req, res) => {
  try {
    const { id, orderCode, details, status } = req.body;

    const order = await Order.findOne({ id: orderCode });
    console.log("ORDER", order);
    if (!order) throw ("ORDER_NOT_FOUND");
    if (order.status != 'IN_PROGRESS') throw ("ORDER_NOT_IN_PROGRESS");

    const shipment = new Shipment({ id, orderCode, details, status });
    const data = await shipment.save();
    await Order.updateOne({ id: orderCode }, { status: 'COMPLETED' });
    return res.status(201).json(data);

  } catch (error) {
    console.log('Error', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  