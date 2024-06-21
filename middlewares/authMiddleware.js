import JWT from 'jsonwebtoken';
import userModel from '../models/userModel.js';

// protected routes token base
// middleware means when req- get -next validate then res send hoga
// requireSignIn-middleware function
export const requireSignIn = async (req,res,next) => {
    try {
        const decode = JWT.verify(req.headers.authorization, process.env.JWT_SECRET);//encyrpt
        req.user = decode;//decyrpt
        next();
    } catch (error) {
        console.log(error);
    }
};

// admin access
export const isAdmin = async (req,res,next) => {
    try {
        const user = await userModel.findById(req.user._id);
        if(user.role!==1){
            return res.status(401).send({
                success:false,
                message:'UnAUthorized Access',
            });
        }
        else{
            next();
        }
    } catch (error) {
        console.log(error);
        res.status(401).send({
            success:false,
            error,
            message:'Error in admin middleware',
        });
    }
};