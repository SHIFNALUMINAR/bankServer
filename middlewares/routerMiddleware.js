const jwt=require('jsonwebtoken')

// middleware 
//a func with 3 argmnts   - req,res,next

const jwtMiddleware = (req, res, next) => {

    try {
        // access token from request header
        const token = req.headers["access_token"] // - runtime error - try catch

        // validate token  - jwt - verify()
        jwt.verify(token,"secretkey123")  //- true/false

        // if token is verified continue the request
        next()      

    }
    catch {
        res.status(404).json("plase login")
    }
}

module.exports=jwtMiddleware

