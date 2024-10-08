const express = require('express');

const {addFood, listFood, removeFood} = require('../controllers/foodController.js');
const multer = require('multer')

// To create an router at the backend
const foodRouter = express.Router();

// Image Uploading - middleware / multer logic
const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null, `${Date.now()}${file.originalname}`)

    }
})

const upload = multer({storage:storage})


foodRouter.post('/add',upload.single("image"),addFood)
foodRouter.get('/list',listFood)
foodRouter.delete('/remove',removeFood)


module.exports = foodRouter;
