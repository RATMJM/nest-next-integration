import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { userinfo as UserInfo } from '@prisma/client';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
export declare class MoviesController {
    private readonly moviesService;
    constructor(moviesService: MoviesService);
    getAllUserInfo(userId: number): Promise<UserInfo[]>;
    userContents(userId: number): Promise<UserInfo[]>;
    getAll(): Movie[];
    getOne(movieId: number): Movie;
    create(movieData: CreateMovieDto): void;
    removeAll(): void;
    remove(movieId: number): void;
    patch(movieId: number, updateData: UpdateMovieDto): void;
    updateUserInfo(userId: number): Promise<UserInfo[]>;
}
