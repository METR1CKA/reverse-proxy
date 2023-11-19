"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSala = exports.getSalas = void 0;
const Sala_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Sala"));
const getSalas = async () => {
    return (await Sala_1.default.all()).map(sala => {
        const { nombre, password } = sala;
        return {
            nombre,
            password,
        };
    });
};
exports.getSalas = getSalas;
const createSala = async ({ sala }) => {
    await Sala_1.default.create(sala);
};
exports.createSala = createSala;
//# sourceMappingURL=SalasController.js.map