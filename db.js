const mongoose = require('mongoose')

const conns = () => {
    try {
        mongoose.connect(process.env.DB_URL)
        console.log('MongoDB Connected');
    }
    catch (error) {
        console.log(error);
    }
}
module.exports = conns;