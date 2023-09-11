const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({ path: __dirname + '/.env' });

let database = process.env.DB_TEST_URI;
const password = process.env.PASSWORD;
const port = process.env.PORT;

(function (db=database, pw=password) {
    let modified = db.replace("<PASSWORD>", pw);
    database = modified;
})();

const connectDB = () => {
    return mongoose
            .connect(database)
            .then(() => {
                console.log("connected to db");
            })
            .catch(err => {
                console.log("ERR CATCHED: " + err);
            });
}

module.exports = { connectDB, port };
