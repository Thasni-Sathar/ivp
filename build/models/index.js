"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const categories_1 = require("./categories");
const questions_1 = require("./questions");
const sequelize = require('../config/database');
const db = {};
const Sequelize = require("sequelize");
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Question = require('./questions');
db.Category = require("./categories");
questions_1.Question.belongsTo(categories_1.Category, { foreignKey: 'category_id' });
categories_1.Category.hasMany(questions_1.Question, { foreignKey: 'category_id' });