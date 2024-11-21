const express = require('express');
const cors = require('cors')

const passwordRoutes = require('./routes/passwordRoutes');


const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3000;


app.use('/', passwordRoutes);

app.listen(PORT, ()=> {
    console.log(`Server Is running on http://localhost:${PORT}`)
})