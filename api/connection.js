const mongoose = require('mongoose')

const MONGODB_URI = process.env.MONGO_URL || 'mongodb://localhost:27017/users'

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err))
