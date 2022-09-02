const mongoose = require('mongoose')

class Database {
  constructor() {
    this.connect()
  }
  connect() {
    mongoose
      .connect(
        'mongodb+srv://viditbansal:mongodbforproject@cluster0.f9qycks.mongodb.net/?retryWrites=true&w=majority'
      )
      .then(() => {
        console.log('MongoDB Connected')
      })
      .catch((err) => {
        console.log('error' + err)
      })
  }
}
module.exports = new Database()
