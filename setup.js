const fs = require('fs');
const conn = require('./db');
// const db = require('./db');

const store = fs.readFileSync('courses.json');

const data = JSON.parse(store);


const setupDb = async () => {
    await conn.connectToServer()
    const col = conn.getCourseCollection();
    await col.insertMany(data);
    console.log("Setup DB!")
}

setupDb()

