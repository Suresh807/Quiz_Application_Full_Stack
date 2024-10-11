const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const quizRoutes = require('./routes/quizRoutes');
const path = require('path');

const app = express();


connectDB();


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'))); 


app.use('/api/auth', authRoutes);
app.use('/api/quizzes', quizRoutes);


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
