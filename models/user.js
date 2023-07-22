const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    fistName: {
        type: String,
        required: true,

    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY)
}
