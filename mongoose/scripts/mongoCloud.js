
const mongoose = require('mongoose');
const uri = "mongodb+srv://devsk:kavin@notesedu.jrpn09e.mongodb.net/?retryWrites=true&w=majority&appName=notesedu";
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
const db = require('../scripts/cloudSchema');
const log = console.log;

async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("successfully connected to MongoDB!");
    const data  = await db.create({
      name : 'Hello Cloud',
      password : 'hello' , 
      data: 'This is created using mongoose. using mongo Atlas cloud',
      todo:
          [{
              date: Date.now(),
              data: 'ToDo',
              checked: false
          }]
    });
    log(data)

    const findData = await db.find();
    log(findData)
  } finally {
    // Ensures that the client will close when you finish/error
    await mongoose.disconnect();
  }
}
run().catch(console.dir);
