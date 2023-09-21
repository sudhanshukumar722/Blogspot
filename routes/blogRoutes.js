const { getAllBlogController, createBlogController, updateBlogController, getBlogBYIdController, deleteBlogController, userBlogController } = require('../controllers/blogController');

const express = require =require('express')


//router object
const router = express.Router();

//routers
//GET ||all blogs
router.get('/all-blog', getAllBlogController);

//POST||create blog
router.post('/create-blog',createBlogController);

//PUT|| update
router.put('/update-blog/:id',updateBlogController);


//GET||Single Blog Details
router.get('/get-blog/:id',getBlogBYIdController);

//DELETE || delete blog
router.delete('/delete-blog/:id',deleteBlogController);

//GET||user blog
 router.get("/user-blog/:id",userBlogController);

module.exports=router;