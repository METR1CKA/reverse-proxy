"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const Sala_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Sala"));
class default_1 extends Seeder_1.default {
    async run() {
        await Sala_1.default.createMany([
            {
                nombre: 'Sala sebas',
                password: '3j1Dyq0r08TwYi/GDe7NBrNKDyWoDjC4H+BRo8VHmbs=',
                active: true
            },
            {
                nombre: 'Sala fer',
                password: '3j1Dyq0r08TwYi/GDe7NBrNKDyWoDjC4H+BRo8VHmbs=',
                active: true
            },
            {
                nombre: 'Sala ale',
                password: '3j1Dyq0r08TwYi/GDe7NBrNKDyWoDjC4H+BRo8VHmbs=',
                active: true
            },
            {
                nombre: 'Sala hector',
                password: '3j1Dyq0r08TwYi/GDe7NBrNKDyWoDjC4H+BRo8VHmbs=',
                active: true
            }
        ]);
    }
}
exports.default = default_1;
//# sourceMappingURL=Sala.js.map