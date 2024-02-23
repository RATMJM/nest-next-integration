"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
let UsersService = exports.UsersService = class UsersService {
    create(createUserDto) {
        console.log('createUserDto : ' + createUserDto);
        throw new Error('Method not implemented.');
    }
    async findAll() {
        const galleryItems = [
            { title: '별밤', authorName: 'test1', type: '수채화', year: '2050', imageUrl: 'https://wwuokloxidnu676076.cdn.gov-ntruss.com/75/2016/11/27/2016-11-27-12-25-3975_0_thumbNail.png' },
            { title: '오니', authorName: 'test2', type: '수묵', year: '2021', imageUrl: 'https://wwuokloxidnu676076.cdn.gov-ntruss.com/75/2016/11/27/2016-11-27-12-25-4775_0_thumbNail.png' },
            { title: '파묘', authorName: 'test3', type: '부적', year: '1799', imageUrl: 'https://wwuokloxidnu676076.cdn.gov-ntruss.com/75/2016/11/27/2016-11-27-12-25-5675_0_thumbNail.png' },
            { title: '후쿠오카', authorName: 'test4', type: '다이묘', year: '1871', imageUrl: 'https://wwuokloxidnu676076.cdn.gov-ntruss.com/75/2016/11/27/2016-11-27-12-26-1875_0_thumbNail.png' },
            { title: '팜팜', authorName: 'test5', type: '포도', year: '1978', imageUrl: 'https://wwuokloxidnu676076.cdn.gov-ntruss.com/75/2016/11/27/2016-11-27-12-26-3875_0_thumbNail.png' },
        ];
        console.log(galleryItems);
        return galleryItems;
    }
    findOne(id) {
        console.log('222222??');
        return `This action 11returns a #${id} user shit111`;
    }
    update(id, updateUserDto) {
        console.log(updateUserDto);
        return `This action updates a #${id} user `;
    }
    remove(id) {
        return `This action removes a #${id} user`;
    }
};
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
//# sourceMappingURL=users.service.js.map