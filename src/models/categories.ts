import { DataTypes, Model, Optional } from 'sequelize';
import db from '../config/database'

interface CategoriesAttributes {
    id: number;
    categoryname: string;
}

export interface CategoryOutput extends Required<CategoriesAttributes> {}

export class Category extends Model implements CategoriesAttributes {
    public id!: number
    public categoryname!: string
}

Category.init({
    id: { 
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true},
    categoryname: {
      type: DataTypes.STRING,
      allowNull: false},
    },{
        sequelize: db,
        modelName: 'categories',
        underscored : true,
        timestamps: true,
})