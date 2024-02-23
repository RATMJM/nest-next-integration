import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<{
        title: string;
        authorName: string;
        type: string;
        year: string;
        imageUrl: string;
    }[]>;
    create(createUserDto: CreateUserDto): void;
    update(id: string, updateUserDto: UpdateUserDto): string;
    remove(id: string): string;
}
