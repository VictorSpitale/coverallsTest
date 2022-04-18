/// <reference types="multer" />
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDto } from './dto/user.dto';
import { PasswordRecoveryDto } from './dto/password-recovery.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<UserDto>;
    getUsers(): Promise<UserDto[]>;
    getUserById(id: string): Promise<UserDto>;
    updateUser(id: string, updateUserDto: UpdateUserDto, req: any): Promise<UserDto>;
    uploadProfilePicture(file: Express.Multer.File, req: any, id: any): Promise<{
        picture: string;
    }>;
    removeProfilePicture(req: any, id: any): Promise<void>;
    deleteUser(req: any, id: string): Promise<void>;
    sendPasswordRecovery(body: PasswordRecoveryDto): Promise<void>;
}
