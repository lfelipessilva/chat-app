import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthService } from '../auth/auth.service';
export declare class UsersController {
    private readonly usersService;
    private authService;
    constructor(usersService: UsersService, authService: AuthService);
    create(createUserDto: CreateUserDto): Promise<import(".prisma/client").User>;
    findAll(): Promise<import(".prisma/client").User[]>;
    findOne(id: string): Promise<import(".prisma/client").User>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import(".prisma/client").User>;
    remove(id: string): Promise<import(".prisma/client").User>;
    login(req: any): Promise<{
        user: any;
        token: string;
    }>;
}
