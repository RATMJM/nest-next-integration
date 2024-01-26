import { OnModuleInit } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { PrismaClient, userinfo as UserInfo } from '@prisma/client';
export declare class MoviesService extends PrismaClient implements OnModuleInit {
    onModuleInit(): Promise<void>;
    private movies;
    private users;
    getAllUserInfo(userId: number): Promise<UserInfo[]>;
    userContents(userId: number): Promise<UserInfo[]>;
    getAll(): Movie[];
    getOne(id: number): Movie;
    deleteAll(): void;
    deleteOne(id: number): void;
    create(movieData: CreateMovieDto): void;
    update(id: number, updateData: UpdateMovieDto): void;
    updateUserInfo(userId: number): Promise<UserInfo[]>;
}
