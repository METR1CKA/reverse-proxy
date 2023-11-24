"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SalasCreateValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/SalasCreateValidator"));
const SalasUpdateValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/SalasUpdateValidator"));
const ValidatorException_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Exceptions/ValidatorException"));
const Sala_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Sala"));
class SalasController {
    async get({ params, response }) {
        const salas = await Sala_1.default.all();
        if (params.id) {
            const sala = salas.find(sala => sala.id == params.id);
            if (!sala) {
                return response.notFound({
                    status: 'Error',
                    message: 'Sala no encontrada',
                    data: null
                });
            }
            return response.ok({
                status: 'Éxito',
                message: 'Sala encontrada',
                data: sala
            });
        }
        return response.ok({
            status: 'Éxito',
            message: 'Salas encontradas',
            data: salas
        });
    }
    async create(ctx) {
        const { request, response } = ctx;
        try {
            var data = await request.validate(SalasCreateValidator_1.default);
        }
        catch (error) {
            return new ValidatorException_1.default(ctx, error);
        }
        await Sala_1.default.create(data);
        return response.created({
            status: 'Éxito',
            message: 'Sala creada',
            data: null
        });
    }
    async update(ctx) {
        const { params, request, response } = ctx;
        try {
            var data = await request.validate(SalasUpdateValidator_1.default);
        }
        catch (error) {
            return new ValidatorException_1.default(ctx, error);
        }
        const sala = await Sala_1.default.find(params.id);
        if (!sala) {
            return response.notFound({
                status: 'Error',
                message: 'Sala no encontrada',
                data: null
            });
        }
        await sala.merge(data).save();
        return response.created({
            status: 'Éxito',
            message: 'Sala actualizada',
            data: null
        });
    }
    async delete({ params, response }) {
        const sala = await Sala_1.default.find(params.id);
        if (!sala) {
            return response.notFound({
                status: 'Error',
                message: 'Sala no encontrada',
                data: null
            });
        }
        await sala.merge({ active: !sala.active }).save();
        return response.ok({
            status: 'Éxito',
            message: `Sala ${sala.active ? 'activada' : 'desactivada'}`,
            data: null
        });
    }
}
exports.default = SalasController;
//# sourceMappingURL=SalasController.js.map