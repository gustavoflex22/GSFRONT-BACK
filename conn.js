const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();

async function main() {
  try {
  const password = process.env.MONGODB_PASSWORD;
  const user = process.env.MONGODB_USER;
  mongoose.set('strictQuery', true);
  await mongoose.connect(`mongodb+srv://${user}:${password}@cluster0.nayh0ez.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
  console.log('Conectado com o banco de dados com sucesso!');
  } catch (error) {
  console.log(error);
  }
}

module.exports = main;