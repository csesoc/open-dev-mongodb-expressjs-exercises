const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1/'
const client = new MongoClient(url)

let dbConnection;
let courseCollection;

const connectToServer = async () => {
    console.log("Connecting to Server!")
    await client.connect()

    console.log("Connected to Server!")

    dbConnection = client.db("open-dev");
    courseCollection = dbConnection.collection("courses");
}

module.exports = {
  connectToServer: connectToServer,
  getDb: () => {
    return dbConnection;
  },
  getCourseCollection: () => {
    return courseCollection
  }
};