import { Post } from "../models/post.model.js";

// Create a post

const createPost = async (req, res) => {
    try {
        const { name, description, age } = req.body;

        if (!name || !description || !age) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        const post = await Post.create({
            name,
            description,
            age
        });

        res.status(201).json({
            message: "Post created successfully",
            post
        });

    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            error
        });
    }
}

//Read all posts
const getPosts = async(req,res) =>{
    try {
        const posts  = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({
            message:"Internal Server error",error
        });
    }
}

const updatePost = async(req,res) => {
    try {
        //basic validation to check body is empty

        //{name: x ,description:y ,age:z} -> array [name, description, age] if feild length is empty then
        if(Object.keys(req.body) ===0 ) {
            return res.status(400).json({
                message:"No data is provided for update"
            });
        }
        const post = await Post.findByIdAndUpdate(req.params.id, req.body,
            {new:true}
        );

        if(!post) return res.status(404).json({
            message:"Post not found"
        });
        res.status(200).json({
            message:"Post updated successfully",post
        });
    } catch (error) {
        res.status(500).json({
            message:"Internal server error",error
        });
    }
}

const deletePost = async (req,res) => {
    try {
        const deleted = await Post.findOneAndDelete(req.params.id);
        if(!deleted) return res.status(404).json({
            message:"Post not found"
        }) 
        res.status(200).json({
            message:"post successfully deleted"
        });


    } catch (error) {
        res.status(500).json({
            message:"Internal server error",error
        });
    }
}
export {
 createPost,
 getPosts,
 updatePost,
 deletePost
}