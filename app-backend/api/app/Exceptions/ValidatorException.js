"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Env_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Env"));
class ValidatorException {
    constructor({ response }, Err) {
        const { messages: { errors: [error] } } = Err;
        const { message, field, rule } = error;
        if (Env_1.default.get('NODE_ENV') === 'development') {
            console.error(error);
        }
        response.badRequest({
            status: 'Error',
            message: message,
            data: {
                field,
                rule
            }
        });
    }
}
exports.default = ValidatorException;
//# sourceMappingURL=ValidatorException.js.map