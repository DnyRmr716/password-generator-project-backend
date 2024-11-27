const express = require('express');
const cors = require('cors');
const passwordRoutes = require('./routes/passwordRoutes');

const app = express();

const allowedOrigins = [
    'https://pa55g3n.netlify.app/',
];
  
  const corsOptions = {
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    optionsSuccessStatus: 200,
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