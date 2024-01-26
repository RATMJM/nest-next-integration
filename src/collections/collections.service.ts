import { Injectable } from '@nestjs/common';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { UpdateCollectionDto } from './dto/update-collection.dto';
@Injectable()
export class CollectionsService {
  create(createCollectionDto: CreateCollectionDto) {
    console.log('createCollectionDto  :' + createCollectionDto)
    throw new Error('Method not implemented.');
  }
  update(arg0: number, updateCollectionDto: UpdateCollectionDto) {
    console.log('arg0 updateCollectionDto  :' + arg0 + '   ' + updateCollectionDto)
    throw new Error('Method not implemented.');
  }


  findAll() {
    return `This action returns all collections`;
  }

  findOne(id: number) {
    return `This action returns a #${id} collection`;
  }


  remove(id: number) {
    return `This action removes a #${id} collection`;
  }
}
