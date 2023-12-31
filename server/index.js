const express = require('express')
const cors = require('cors')
const { connectDB, port } = require('./server')
const mainMiddleware = require('./src/middleware/main')
const workoutsRouter = require('./src/routes/workouts')

const app = express();

app.use(express.json());
app.use(cors(
    {
        origin: ['https://ninja-mern.vercel.app'],
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
        credentials: false
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

app.get('/', mainMiddleware, (req, res) => {
    res.send("experimental")
})

app.use('/api/workouts', workoutsRouter);

module.exports = app;
