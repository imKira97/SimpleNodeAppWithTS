"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//this how we import in typescript
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
//importing router todos 
//to import default we dont use curly braces
const todos_1 = __importDefault(require("./routes/todos"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(todos_1.default);
app.listen(5000);
