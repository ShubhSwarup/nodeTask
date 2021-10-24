const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/eCommerceDB', {
    // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connection to DB successful");
}).catch((e)=>{
    console.log(" No connection to DB");
})