import User from '../models/user.model.js';
import { Request, Response, NextFunction } from 'express';
import { ErrorResponse } from '../utils/error_response.utils.js';

class UserController {
    public async userLogin(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { email, password } = req.body;

            if (!email || !password) return next(new ErrorResponse(401, 'Please provide email and password.'));

            const user = await User.findOne({ email }).select('+password');

            if (!user) return next(new ErrorResponse(401, 'Invalid Credentials.'));

            const isMatch = await user.matchPassword(password);
            if (!isMatch) return next(new ErrorResponse(401, 'Invalid Credentials.'));

            const token = user.generateAuthToken();
            let userInfo = { role: user.role };

            res.status(200).json({ success: true, token, userInfo });
        } catch (error) {
            next(error);
        }
    }
    public async createUser(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const userInfo = req.body;

            let user = await User.create(userInfo);

            const token = user.generateAuthToken();
            res.status(201).json({
                success: true,
                msg: 'User Registered!',
                token
            });
        } catch (error) {
            next(error);
        }
    }
}

export default new UserController();
