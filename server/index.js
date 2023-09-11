const express = require('express')
const cors = require('cors')
const { connectDB, port } = require('./server')

const app = express();

app.use(express.json());
app.use(cors(
    {
        origin: ['http://localhost:8000'],
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']
    }
));

const start = async () => {
    try {
        await connectDB();
        app.listen(port, () => {
            console.log('server running');
        });
    } catch (err) {
        console.log(err);
    }
}

start();

app.get('/', (req, res) => {
    res.send("experimental")
})

module.exports = app;
