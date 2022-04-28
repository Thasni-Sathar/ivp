"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Interview = void 0;
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
class Interview extends sequelize_1.Model {
}
exports.Interview = Interview;
Interview.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    interviewtitle: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    interviewdate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    interviewtime: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    status: {
        type: sequelize_1.DataTypes.STRING,
        // values:['active','in active'],
        validate: {
            customValidator: (value) => {
                const enums = ['active', 'inactive'];
                if (!enums.includes(value)) {
                    throw new Error('not a valid option');
                }
            }
        },
        allowNull: false
    },
    createdbyid: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    updatedbyid: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
}, {
    sequelize: database_1.default,
    modelName: 'interviews',
    underscored: true,
    timestamps: true,
});