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
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function insertUser(email, firstName, lastName, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.create({
            data: {
                email,
                firstName,
                lastName,
                password,
            }
        });
        console.log(res);
    });
}
function updateUser(email_1, _a) {
    return __awaiter(this, arguments, void 0, function* (email, { firstName, lastName }) {
        const res = yield prisma.user.update({
            where: { email },
            data: {
                firstName,
                lastName
            }
        });
        console.log(res);
    });
}
// updateUser("shaik@gmail.com", {firstName :'harry', lastName : "potter"})
//intresting ...earlier there was typo(firstName) in schema, so I changed and updated, after that the earlie column was delted and a new coulumn was added with the name firstName...how to update the schema names without affecting data.
//now I want the firstName to be the 2nd column but not the last column
//now updating the firstName for shaikfayazuddin18@gmail.com as the firstName was deleted while updating schema
function updateFirstUser(email, firstName) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.update({
            where: { email },
            data: {
                firstName
            }
        });
        console.log(res);
    });
}
// updateFirstUser("shaikfayazuddin@gmail.com", "fayazuddin")
//the above op was successful :)
//now to find the user
function getUser(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.findFirst({
            where: {
                email
            }
        });
        console.log(res);
    });
}
getUser("shaik@gmail.com");
