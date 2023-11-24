"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SalasController_1 = global[Symbol.for('ioc.use')]("App/Controllers/Ws/SalasController");
const Ws_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Services/Ws"));
Ws_1.default.boot();
const { io } = Ws_1.default;
io.on('connection', async (socket) => {
    socket.emit('get:salas', await (0, SalasController_1.getSalas)());
    socket.on('send:message', data => {
        console.log('\nMessage:', data);
        io.emit('get:messages', data);
    });
    socket.on('send:sala', async (sala) => {
        sala = typeof sala == 'string'
            ? JSON.parse(sala)
            : sala;
        await (0, SalasController_1.createSala)({ sala });
        io.emit('get:salas', await (0, SalasController_1.getSalas)());
    });
});
//# sourceMappingURL=socket.js.map