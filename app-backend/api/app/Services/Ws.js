"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Server_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Server"));
const Env_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Env"));
const socket_io_1 = require("socket.io");
class Ws {
    constructor() {
        this.booted = false;
        this.instance = Server_1.default.instance;
    }
    boot() {
        const { booted, instance } = this;
        if (booted)
            return;
        this.booted = true;
        this.io = new socket_io_1.Server(instance, {
            cors: {
                origin: Env_1.default.get('NODE_ENV') == 'development'
                    ? true
                    : 'http://localhost/'
            },
            path: Env_1.default.get('NODE_ENV') == 'development'
                ? '/socket.io'
                : '/web-socket'
        });
    }
}
exports.default = new Ws();
//# sourceMappingURL=Ws.js.map