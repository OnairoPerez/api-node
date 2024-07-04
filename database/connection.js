require('dotenv').config({ path: './database/.env' });
const mongoose = require('mongoose');

//URI y Opciones para la conexión con MongoDB Atlas (urlencode credentials)
const uri = process.env.mongodb_uri;

//Realiza la conexión
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
async function run() {
  try {
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log(`
    -----------------------
        Conexión exitosa 
            MongoDB
    -----------------------`
    );
  } finally {
    await mongoose.disconnect();
  }
}
run().catch(console.dir);
