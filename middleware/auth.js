import jwt from 'jsonwebtoken'
import {UnAuthenticatedError} from '../errors/index.js'


const auth = async(req, res, next)=>{
    const authHeader = req.headers.authorization
    //console.log(authHeader)

    if(!authHeader || !authHeader.startsWith('Bearer')){
        throw new UnAuthenticatedError('Aunthentication Invalid')
    }
    const token = authHeader.split(' ')[1]

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        req.user = {userId: payload.userId}
        next()
    } catch (error) {
        throw new UnAuthenticatedError('Aunthentication Invalid')
    }

    
}

export default auth