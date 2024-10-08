const mongoose = require('mongoose');

 mongoose.connect('mongodb://localhost:27017/fooddel').then(()=>{
    console.log('Database connected')
})

// 2nd Approach to done this
// const db = mongoose.connect('mongodb://localhost:27017/fooddel').then(()=>{
//     console.log('Database connected')
// })

// module.exports = db;