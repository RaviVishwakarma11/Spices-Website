const mongoose = require("mongoose");

const DB = 'mongodb://localhost:27017/SpicesRegistration'
mongoose.connect(DB).then(() => {
    console.log(`connection successfully`);
}).catch((err) => console.log(`no connection`));
