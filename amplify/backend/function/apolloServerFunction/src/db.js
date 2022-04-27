const mongoose = require('mongoose');

const connectDB = async () => {
  const conn = await mongoose.connect(
    'mongodb+srv://ehome:uc8IUSh8iGBOAEL9@ehome.dwatb.mongodb.net/dev'
  );

  console.log(`MongoDB Connected: ${conn.connection.host}`);
};

module.exports = connectDB;
