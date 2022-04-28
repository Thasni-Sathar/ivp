"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
const categories_1 = require("../models/categories");
class CategoryService {
    static get EmployeeList() {
        /* When only selected fields required go for the below code */
        //return ['id','role_id'];
        return ({});
    }
    /* To get the list of all employees*/
    getAllCategories() {
        return categories_1.Category.findAll({});
    }
    createCategory(category) {
        var newCategory = new categories_1.Category(category);
        return newCategory.save();
    }
    findByCategoryId(id) {
        return categories_1.Category.findByPk(id);
    }
    findByName(name) {
        return categories_1.Category.findOne({
            where: {
                categoryName: name
            }
        });
    }
}
exports.CategoryService = CategoryService;
