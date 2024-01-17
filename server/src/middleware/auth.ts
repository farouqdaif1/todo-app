import jwt, { JwtPayload } from 'jsonwebtoken';
import env from '../util/validateEnv';
//wants to see todo an delete it
const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decodedData = jwt.verify(token, env.JWT_SECRET) as JwtPayload;
        req.userId = decodedData?.id;
        next();
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};
export default auth;