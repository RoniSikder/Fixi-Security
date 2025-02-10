const { MongoClient } = require("mongodb");
require("dotenv").config();

async function connection() {
    const uri = process.env.database_uri;
    const dbName = process.env.db;
    const collectionName = process.env.collection; 
    const client = new MongoClient(uri); 
    try {
        await client.connect();
        console.log("Connected to MongoDB");
        // const database = client.db(dbName);
        // const collection = database.collection(collectionName);
        // console.log(`Database: ${dbName}, Collection: ${collectionName}`);

    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

module.exports = connection;
