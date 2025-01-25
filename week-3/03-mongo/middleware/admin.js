// Middleware for handling auth
const {Admin} = require("../db/index");




 async function adminMiddleware(req, res, next) {
    const username = req.headers.username;
    const password  = req.headers.password;

    try{
        const value = await Admin.findOne({
        username : username ,
        password:password
        })
        if(value){ 
            next();
        }else{
            res.status(403).json({
                msg:"The Admin does not exist!!"
            })
        }
       }catch(error){
        res.status(500).json({
            msg:"Server problem during authentication"
        })
    }
}
        


module.exports = adminMiddleware;

