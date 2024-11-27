const express = require('express');
const cors = require('cors');
const passwordRoutes = require('./routes/passwordRoutes');

const app = express();

const corsOptions = {
    origin: 'https://pa55g3n.netlify.app',
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('Backend API is running.');
});

app.use('/', passwordRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});