import { Category } from "./categories";
import { Question } from "./questions";
import { Interview } from "./interviews";
import { Candidate } from "./candidates";
import { Employee } from "./employees";
import { Role } from "./roles";

const sequelize = require('../config/database')
const db:any = {};
const Sequelize = require("sequelize");
db.Sequelize = Sequelize
db.sequelize = sequelize

db.Question=require('./questions')
db.Category=require("./categories")
db.Interview=require("./interviews")
db.Candidate=require("./candidates")
db.Employee=require("./employees")
db.Role=require("./roles")


Question.belongsTo(Category, {foreignKey: 'category_id'});
Category.hasMany(Question, {foreignKey: 'category_id'});

Employee.belongsTo(Role,{foreignKey:'role_id'});
Role.hasMany(Employee,{foreignKey:'role_id'});