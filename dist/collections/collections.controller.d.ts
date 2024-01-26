import { CollectionsService } from './collections.service';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { UpdateCollectionDto } from './dto/update-collection.dto';
export declare class CollectionsController {
    private readonly collectionsService;
    constructor(collectionsService: CollectionsService);
    create(createCollectionDto: CreateCollectionDto): void;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateCollectionDto: UpdateCollectionDto): void;
    remove(id: string): string;
}
