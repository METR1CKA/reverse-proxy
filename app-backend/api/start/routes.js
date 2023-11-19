"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
global[Symbol.for('ioc.use')]("App/Routes/salas");
Route_1.default.get('/', ({ response }) => {
    return response.ok({
        message: 'Practica de encriptacion API',
        data: null
    });
});
Route_1.default.get('request', ({ request, response }) => {
    return response.ok({ request });
});
Route_1.default.get('api/v1', ({ response }) => {
    return response.ok({
        message: 'API V1',
        data: {
            version: '1.0.0'
        }
    });
});
Route_1.default.any('*', ({ request, response }) => {
    return response.notFound({
        message: 'Ruta no encontrada',
        data: {
            url: request.url(),
            method: request.method()
        }
    });
});
//# sourceMappingURL=routes.js.map