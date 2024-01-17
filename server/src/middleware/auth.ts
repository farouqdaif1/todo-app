import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import env from '../util/validateEnv';
interface RequestWithUserId extends Request {
    userId?: string;
  }
const auth = async (req: RequestWithUserId, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            throw new Error("Token not found");
        }
        const decodedData = jwt.verify(token, env.JWT_SECRET) as JwtPayload;
        req.userId = decodedData?.id;
        next();
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};

export default auth;