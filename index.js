require('dotenv').config();

const express = require('express');
const cors = require('cors')
const passwordRoutes = require('./routes/passwordRoutes');


const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('Backend API is running.');
});

app.use('/', passwordRoutes);


const PORT = process.env.PORT || 3000;


app.listen(PORT, ()=> {
    console.log(`Server Is running on http://localhost:${PORT}`)
})