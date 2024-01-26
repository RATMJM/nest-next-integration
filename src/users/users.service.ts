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




    const users = [
      { id: '1', name: 'test1' },
      { id: 2, name: 'test2' },
      { id: 3, name: 'test3' },
      { id: 4, name: 'test4' },
      { id: 5, name: 'test5' },

    ];
    console.log(users);
    return users;
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
