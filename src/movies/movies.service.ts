//https://www.prisma.io/docs/concepts/components/prisma-client/crud#read CRUDD exmaples

import { Injectable, NotFoundException, OnModuleInit } from "@nestjs/common";
import { Movie } from "./entities/movie.entity";
import { CreateMovieDto } from "./dto/create-movie.dto";
import { UpdateMovieDto } from "./dto/update-movie.dto";
import { PrismaClient, userinfo as UserInfo } from "@prisma/client";
@Injectable()
export class MoviesService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    // Note: this is optional
    await this.$connect();
  }

  private movies: Movie[] = [];
  private users: UserInfo[];

  async getAllUserInfo(userId: number): Promise<UserInfo[]> {
    const options = {
      host: process.env.MQTT_HOST, //device_log로 가 는듯?
      // host: 'test.mosquitto.org',
      port: process.env.MQTT_PORT,
      protocol: "tcp",
      connectTimeout: 4000,
      clientId: "",
      userName: "test",
      qos: "2",
      guid: "",
    };

    const mqtt = require("mqtt");
    const client = mqtt.connect(options);
    let topic = [""];
    // let message = { "msgType": "refreshContents", "payload": "orderNumChange" }
    let message = { msgType: "changeBrightness", payload: "5" };

    const encoder = new TextEncoder();
    const toBytes = (text) => {
      return encoder.encode(text);
    };

    client.on("connect", function () {
      client.subscribe(topic, function (err) {
        if (!err) {
          console.log("mqtt-wrapper : connected! message: " + toBytes(message));

          // setInterval(() => client.publish(topic, JSON.stringify(message), 2, false), 5000);

          // client.publish(topic, JSON.stringify(message), 2, false);
        }
      });
    });
    // client.getServerUrl();
    //      message

    // let topic = 'test';
    client.on("message", (topic, message) => {
      console.log("topic: " + topic + " and messages: " + message.toString());
      // console.log(message.toString());
      // client.end();
    });

    client.on("error", (error) => {
      console.log("Can't connect" + error);
      // client.end();
      process.exit(1);
    });

    type Player = {
      name: string;
      age?: number;
    };

    // const firstone: Player = {
    //   name: "lione",
    //   age: 19
    // }
    // const secondone: Player = {
    //   name: "bear",
    //   age: 29
    // }

    function playerMaker(name: string): Player {
      return { name: name };
    }

    // type SuperPrint = {
    //   (arr: number[]): void
    //   (arr: boolean[]): void
    //   (arr: string[]): void
    // }
    // const superPrint: SuperPrint = (arr) => {
    //   arr.forEach(element => console.log(element))
    // }

    // superPrint([1, 2, 3]);
    // superPrint([true, true, true]);
    // superPrint(["a", "b", "c"]);

    const rina = playerMaker("jm");
    rina.name = "welcome to  ";
    rina.age = 11;
    // console.log('hit your face ' + userId);
    let c: string[] = ["1", "2", "3"];
    c.push("1");
    // console.log(c);
    // const test =  await this.userinfo.findMany();
    const test = await this.userinfo.findMany({
      select: {
        userId: true,
        email: true,
        nickname: false,
      },
      where: {
        userId: userId,
      },
    });
    console.log(test);
    // const userIhistd = this.users.find((userinfo) => userinfo.userId === userId);
    if (!this.userinfo) {
      throw new NotFoundException(`userinfo with userID ${userId} Not FOund`);
    }

    return this.users;
  }

  async userContents(userId: number): Promise<UserInfo[]> {
    console.log("get your contents mqtt" + userId);

    // const test =  await this.userinfo.findMany();
    const test = await this.userinfo.findMany({
      where: {
        userId: userId,
      },
      include: {
        contents: {
          where: {
            artworkYn: "N",
          },
        },
      },
    });
    console.log("test  :" + test);
    // console.log('yesar' + this.contents);
    // const userIhistd = this.users.find((userinfo) => userinfo.userId === userId);
    const options = {
      host: process.env.MQTT_HOST, //device_log로 가 는듯?
      // host: 'test.mosquitto.org',
      port: process.env.MQTT_PORT,
      protocol: "tcp",
      connectTimeout: 4000,
      clientId: "*",
      userName: "test",
      guid: "",
    };

    const mqtt = require("mqtt");
    const client = mqtt.connect(options);
    let topic = ["*"];
    // let message = { "msgType": "refreshContents", "payload": "orderNumChange" }
    let message = { msgType: "changeBrightness", payload: "5" };

    client.on("connect", function () {
      // client.subscribe(topic, function (err) {
      //   if (!err) {
      //     console.log('mqtt-wrapper : connected!');
      //     // client.publish(topic, JSON.stringify(message));
      //     // client.publish(topic, JSON.stringify(message), 2, false);
      //   }
      // })

      const encoder = new TextEncoder();
      const toBytes = (text) => {
        return encoder.encode(text);
      };
      console.log(
        "pub : connected!  " +
          JSON.stringify(message) +
          "  bytes :" +
          toBytes(message)
      );
      // setInterval(() => client.publish(topic, JSON.stringify(message), 2, fal se), 2000);
      client.publish(topic, toBytes(message), 2, false);
      console.log("mqtt-published!");
    });
    // client.getServerUrl();
    //      message

    client.on("error", (error) => {
      console.log("Can't connect" + error);
      // client.end();
      process.exit(1);
    });

    if (!this.userinfo) {
      throw new NotFoundException(`userinfo with userID ${userId} Not FOund`);
    }

    return this.users;
  }

  getAll(): Movie[] {
    // console.log(movies);
    return this.movies;
  }

  getOne(id: number): Movie {
    console.log("아이디: " + typeof id);
    const movie = this.movies.find((movie) => movie.id === id);
    if (!movie) {
      throw new NotFoundException(`Movie with ID ${id} Not FOund`);
    }
    return movie;
    // return this.movies.find(movie => movie.id === +id); // string 를 int 변환
    // return this.movies.find(movie => movie.id === parseInt(id)); // string 를 int 변환
  }

  deleteAll() {
    this.movies = [];
  }
  // deleteOne(id:string):boolean{
  //      this.movies.filter(movie => movie.id !== +id);
  //      return true;
  // }
  deleteOne(id: number) {
    // console.log('delete아이디: ' + typeof id);
    this.getOne(id);
    this.movies = this.movies.filter((movie) => movie.id !== id);
    // return true;
  }

  create(movieData: CreateMovieDto) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }

  update(id: number, updateData: UpdateMovieDto) {
    const movie = this.getOne(id);
    this.deleteOne(id);
    this.movies.push({ ...movie, ...updateData }); //이전/뉴데이터
  }

  async updateUserInfo(userId: number): Promise<UserInfo[]> {
    console.log("update your face " + userId);
    let nickname = "Hi";
    console.log("nickname :" + nickname);
    // const test = await this.userinfo.findMany();
    const updateUser = await this.userinfo.update({
      where: {
        userId: userId,
      },
      data: {
        userName: nickname,
      },
    });
    console.log("updateUser   :" + updateUser);
    // const userIhistd = this.users.find((userinfo) => userinfo.userId === userId);
    if (!this.userinfo) {
      throw new NotFoundException(`userinfo with userID ${userId} Not FOund`);
    }

    return this.users;
  }
}
