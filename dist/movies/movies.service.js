"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoviesService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
let MoviesService = exports.MoviesService = class MoviesService extends client_1.PrismaClient {
    constructor() {
        super(...arguments);
        this.movies = [];
    }
    async onModuleInit() {
        await this.$connect();
    }
    async getAllUserInfo(userId) {
        const options = {
            host: process.env.MQTT_HOST,
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
        let message = { msgType: "changeBrightness", payload: "5" };
        const encoder = new TextEncoder();
        const toBytes = (text) => {
            return encoder.encode(text);
        };
        client.on("connect", function () {
            client.subscribe(topic, function (err) {
                if (!err) {
                    console.log("mqtt-wrapper : connected! message: " + toBytes(message));
                }
            });
        });
        client.on("message", (topic, message) => {
            console.log("topic: " + topic + " and messages: " + message.toString());
        });
        client.on("error", (error) => {
            console.log("Can't connect" + error);
            process.exit(1);
        });
        function playerMaker(name) {
            return { name: name };
        }
        const rina = playerMaker("jm");
        rina.name = "welcome to  ";
        rina.age = 11;
        let c = ["1", "2", "3"];
        c.push("1");
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
        if (!this.userinfo) {
            throw new common_1.NotFoundException(`userinfo with userID ${userId} Not FOund`);
        }
        return this.users;
    }
    async userContents(userId) {
        console.log("get your contents mqtt" + userId);
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
        const options = {
            host: process.env.MQTT_HOST,
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
        let message = { msgType: "changeBrightness", payload: "5" };
        client.on("connect", function () {
            const encoder = new TextEncoder();
            const toBytes = (text) => {
                return encoder.encode(text);
            };
            console.log("pub : connected!  " +
                JSON.stringify(message) +
                "  bytes :" +
                toBytes(message));
            client.publish(topic, toBytes(message), 2, false);
            console.log("mqtt-published!");
        });
        client.on("error", (error) => {
            console.log("Can't connect" + error);
            process.exit(1);
        });
        if (!this.userinfo) {
            throw new common_1.NotFoundException(`userinfo with userID ${userId} Not FOund`);
        }
        return this.users;
    }
    getAll() {
        return this.movies;
    }
    getOne(id) {
        console.log("아이디: " + typeof id);
        const movie = this.movies.find((movie) => movie.id === id);
        if (!movie) {
            throw new common_1.NotFoundException(`Movie with ID ${id} Not FOund`);
        }
        return movie;
    }
    deleteAll() {
        this.movies = [];
    }
    deleteOne(id) {
        this.getOne(id);
        this.movies = this.movies.filter((movie) => movie.id !== id);
    }
    create(movieData) {
        this.movies.push(Object.assign({ id: this.movies.length + 1 }, movieData));
    }
    update(id, updateData) {
        const movie = this.getOne(id);
        this.deleteOne(id);
        this.movies.push(Object.assign(Object.assign({}, movie), updateData));
    }
    async updateUserInfo(userId) {
        console.log("update your face " + userId);
        let nickname = "Hi";
        console.log("nickname :" + nickname);
        const updateUser = await this.userinfo.update({
            where: {
                userId: userId,
            },
            data: {
                userName: nickname,
            },
        });
        console.log("updateUser   :" + updateUser);
        if (!this.userinfo) {
            throw new common_1.NotFoundException(`userinfo with userID ${userId} Not FOund`);
        }
        return this.users;
    }
};
exports.MoviesService = MoviesService = __decorate([
    (0, common_1.Injectable)()
], MoviesService);
//# sourceMappingURL=movies.service.js.map