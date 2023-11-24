"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class default_1 extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'salas';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table
                .increments('id')
                .primary();
            table
                .string('nombre', 50)
                .notNullable();
            table
                .string('password')
                .notNullable();
            table
                .boolean('active')
                .defaultTo(true)
                .notNullable();
            table
                .timestamp('created_at', { useTz: true });
            table
                .timestamp('updated_at', { useTz: true });
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = default_1;
//# sourceMappingURL=1699426123654_salas.js.map