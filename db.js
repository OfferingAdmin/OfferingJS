const mongoose = require('mongoose');
const MONGODB_URI = 'your-mongodb-atlas-connection-string';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB Atlas');
});

mongoose.connection.on('error', (err) => {
  console.error('Error connecting to MongoDB Atlas:', err);
});

module.exports = mongoose;
