"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const tag_1 = require("../models/tag");
const connection = new sequelize_typescript_1.Sequelize('sisweb_backend_db', 'sisweb_user', 'HDKbackend', {
    host: 'localhost',
    dialect: 'postgres',
    models: [tag_1.Tag]
});
function connectionDB() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield connection.authenticate();
            console.log('conexion exitosa a la DB');
            yield connection.sync();
        }
        catch (e) {
            console.error('error en la conexion con la DB: ', e);
        }
    });
}
exports.default = connectionDB;
//# sourceMappingURL=connection.js.map