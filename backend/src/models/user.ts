import { Document, Schema, model, Types } from 'mongoose';
import bcrypt from 'bcryptjs';

interface IUser {
  username: string;
  email: string;
  password: string;
}

interface IUserMethods {
  matchPassword(enteredPassword: string): Promise<boolean>;
}

type UserDocument = Document<Types.ObjectId> & IUser & IUserMethods;

const userSchema = new Schema<UserDocument>({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Instance method to check password
userSchema.methods.matchPassword = async function (enteredPassword: string) {
    console.log(bcrypt.compare(enteredPassword, this.password),"matchPassword");
  return enteredPassword===this.password
};

const User = model<UserDocument>('User', userSchema);
export default User;
