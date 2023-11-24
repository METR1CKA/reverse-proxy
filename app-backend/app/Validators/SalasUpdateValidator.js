"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class SalasUpdateValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            nombre: Validator_1.schema.string.optional({ trim: true }, [
                Validator_1.rules.maxLength(50)
            ]),
            password: Validator_1.schema.string.optional({ trim: true })
        });
        this.messages = {
            maxLength: "El campo '{{ field }}' no puede ser mayor a {{ options.maxLength }} caracteres",
            '*': (field, rule) => `El campo '${field}' es debe ser de tipo '${rule}'`
        };
    }
}
exports.default = SalasUpdateValidator;
//# sourceMappingURL=SalasUpdateValidator.js.map