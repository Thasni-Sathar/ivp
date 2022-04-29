import { Category } from "./categories";
import { Question } from "./questions";
import { Interview } from "./interviews";
import { Candidate } from "./candidates";

const sequelize = require('../config/database')
const db:any = {};
const Sequelize = require("sequelize");
db.Sequelize = Sequelize
db.sequelize = sequelize

db.Question=require('./questions')
db.Category=require("./categories")
db.Interview=require("./interviews")
db.Candidate=require("./candidates")




Question.belongsTo(Category, {foreignKey: 'category_id'});
Category.hasMany(Question, {foreignKey: 'category_id'});