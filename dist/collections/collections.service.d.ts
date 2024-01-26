import { CreateCollectionDto } from './dto/create-collection.dto';
import { UpdateCollectionDto } from './dto/update-collection.dto';
export declare class CollectionsService {
    create(createCollectionDto: CreateCollectionDto): void;
    update(arg0: number, updateCollectionDto: UpdateCollectionDto): void;
    findAll(): string;
    findOne(id: number): string;
    remove(id: number): string;
}
