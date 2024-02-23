"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
async function bootstrap() {
    console.log('started');
    const fs = require('fs');
    const ssl = process.env.SSL === 'true' ? true : false;
    let httpsOptions = null;
    console.log(ssl + '아이ㅣㅣㅣㅣ');
    if (ssl) {
        console.log(ssl);
        httpsOptions = {
            key: fs.readFileSync(process.env.SSL_KEY_PATH),
            cert: fs.readFileSync(process.env.SSL_CERT_PATH),
        };
    }
    console.log(fs.readFileSync(process.env.SSL_KEY_PATH) +
        '     ' +
        fs.readFileSync(process.env.SSL_CERT_PATH));
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { httpsOptions });
    app.enableShutdownHooks();
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    app.listen(process.env.SSL_PORT, () => {
        console.log(`Server started on port ${process.env.SSL_PORT}`);
    });
}
bootstrap();
var Main;
(function (Main) {
    let app;
    async function getApp() {
        if (!app) {
            app = await core_1.NestFactory.create(app_module_1.AppModule, { bodyParser: false });
            app.setGlobalPrefix('api');
            await app.init();
        }
        return app;
    }
    Main.getApp = getApp;
    async function getListener() {
        const app = await getApp();
        const server = app.getHttpServer();
        const [listener] = server.listeners('request');
        return listener;
    }
    Main.getListener = getListener;
})(Main || (exports.Main = Main = {}));
//# sourceMappingURL=main.js.map