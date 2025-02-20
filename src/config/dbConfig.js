const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/express-mongo");

    console.log(`MongoDB bağlantısı başarılı: ${conn.connection.host}`);
  } catch (error) {
    console.log(`MongoDB bağlantısı başarısız: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
