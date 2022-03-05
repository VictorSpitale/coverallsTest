import * as Mongoose from 'mongoose';
import { CreateUserDto } from './create-user.dto';
import { IUserRole } from '../entities/users.role.interface';
declare const UserDto_base: import("@nestjs/common").Type<Partial<CreateUserDto>>;
export declare class UserDto extends UserDto_base {
    readonly _id: Mongoose.Types.ObjectId;
    readonly role: IUserRole;
    readonly password?: string;
    readonly createdAt: string;
    readonly updatedAt: string;
}
export {};
