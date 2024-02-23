import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

// const bodyParser = require("body-parser");
// const cors = require("cors");

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    console.log('createUserDto : ' + createUserDto)
    throw new Error('Method not implemented.');
  }


  async findAll() {




    const galleryItems = [
 
      { title: '별밤' , authorName: 'test1', type: '수채화' , year :'2050', imageUrl: 'https://wwuokloxidnu676076.cdn.gov-ntruss.com/75/2016/11/27/2016-11-27-12-25-3975_0_thumbNail.png'},
      { title: '오니', authorName: 'test2', type:  '수묵', year :'2021',imageUrl: 'https://wwuokloxidnu676076.cdn.gov-ntruss.com/75/2016/11/27/2016-11-27-12-25-4775_0_thumbNail.png'},
      { title: '파묘', authorName: 'test3', type: '부적', year :'1799',imageUrl: 'https://wwuokloxidnu676076.cdn.gov-ntruss.com/75/2016/11/27/2016-11-27-12-25-5675_0_thumbNail.png'},
      { title: '후쿠오카', authorName: 'test4', type: '다이묘', year :'1871',imageUrl: 'https://wwuokloxidnu676076.cdn.gov-ntruss.com/75/2016/11/27/2016-11-27-12-26-1875_0_thumbNail.png'},
      { title: '팜팜', authorName: 'test5', type: '포도', year :'1978',imageUrl: 'https://wwuokloxidnu676076.cdn.gov-ntruss.com/75/2016/11/27/2016-11-27-12-26-3875_0_thumbNail.png'},

    ];
    console.log(galleryItems);
    return galleryItems;
  }

  findOne(id: number) {
    console.log('222222??');
    return `This action 11returns a #${id} user shit111`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    console.log(updateUserDto);
    return `This action updates a #${id} user `;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
