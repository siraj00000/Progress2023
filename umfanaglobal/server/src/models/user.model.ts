import mongoose, { Document, Model, Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { config } from '../config/config.js';

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    role: string;
    matchPassword: (password: string) => Promise<boolean>;
    generateAuthToken: () => string;
}

const userSchema: Schema<IUser> = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please add a name'],
            trim: true,
            maxlength: [50, 'Name can not be more than 50 characters']
        },
        email: {
            type: String,
            required: [true, 'Please add an email'],
            unique: true,
            trim: true,
            match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Please add a valid email'],
            validate: {
                validator: function (v: string) {
                    return /\S+@\S+\.\S+/.test(v);
                },
                message: (props) => `${props.value} is not a valid email address!`
            }
        },
        password: {
            type: String,
            required: [true, 'Please add a password'],
            minlength: [6, 'Password must be at least 6 characters'],
            select: false
        },
        role: {
            type: String,
            enum: ['user', 'admin'],
            default: 'user'
        }
    },
    { timestamps: true }
);

// Encrypt user password before saving to database
userSchema.pre<IUser>('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();
});

// Match user password with stored hash
userSchema.methods.matchPassword = async function (password: string) {
    return await bcrypt.compare(password, this.password);
};

// Generate JWT token for user
userSchema.methods.generateAuthToken = function () {
    return jwt.sign({ id: this._id }, config.jwt.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE });
};

const User: Model<IUser> = mongoose.model<IUser>('User', userSchema);

export default User;
