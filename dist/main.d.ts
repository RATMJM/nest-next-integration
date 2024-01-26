import { NextApiHandler } from "next";
import { INestApplication } from "@nestjs/common";
export declare module Main {
    function getApp(): Promise<INestApplication<any>>;
    function getListener(): Promise<NextApiHandler>;
}
