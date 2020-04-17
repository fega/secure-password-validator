"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable:no-expression-statement
const ava_1 = __importDefault(require("ava"));
const _1 = require(".");
ava_1.default('validate(noString)', t => {
    t.throws(() => _1.validate("", { minLength: 5 }), /minLength must be bigger than 8/);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguc3BlY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXguc3BlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx5Q0FBeUM7QUFDekMsOENBQXVCO0FBQ3ZCLHdCQUEyQjtBQUUzQixhQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDLEVBQUU7SUFDN0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFFLEVBQUUsQ0FBQSxXQUFRLENBQUMsRUFBRSxFQUFFLEVBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUMsaUNBQWlDLENBQUMsQ0FBQTtBQUM5RSxDQUFDLENBQUMsQ0FBQyJ9