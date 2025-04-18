const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET_KEY

const verifyToken = (req, res, next) => {
    try{
        const token = req.cookies.token
        // const token = req.headers["authorization"].split(" ")[1]
        console.log("verify Token:", token)
        if(!token) {
            return res.status(401).send ({message: "invalid Token"})
        }
        const decoded = jwt.verify(token, JWT_SECRET)
        if(!decoded){
            return res.status(401).send ({message: " Not a valid Token"})
        }
        req.userId = decoded.userId
        req.role = decoded.role
        next()
    }catch (error) {
        console.error("Error while verifying token", error)
        res.status(401).send ({message: "Error while verifying token"})
    }
}
module.exports = verifyToken
