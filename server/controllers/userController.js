const User = require("../models/user.model");
//get all user

const user_all = async (req,res) => {
    try {
        const user = await User.find({});
        res.json('ok');
    } catch (error) {
        res.json({message:error});
    }
};
//get single user 
const get_single_user = async (req,res) => {};

//add new user 
const create_user = async (req,res) => {
    console.log(req.body);
    try {
        const new_user = await User.create(req.body)
        
        res.send('user save');
        
    } catch (error) {
        res.json({message:error});

        console.log(error);
        
    }
};

//update new user 
const update_user = async (req,res) => {};

//delete user 
const delete_user = async (req,res) => {};


module.exports ={
    user_all,
    get_single_user,
    create_user,
    update_user,
    delete_user
}

