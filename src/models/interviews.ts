import { DataTypes, EnumDataType, Model, Optional } from 'sequelize';
import db from '../config/database'

interface InterviewAttributes {
    id: number;
    interviewtitle: string;
    interviewdate:Date;
    interviewtime:Date;
    status:EnumDataType<any>;
    createdbyid:number;
    updatedbyid:number;
}

export interface InterviewOutput extends Required<InterviewAttributes> {}

export class Interview extends Model implements InterviewAttributes {
    public  id!: number;
    public interviewtitle!: string;
    public interviewdate!:Date;
    public interviewtime!:Date;
    public status!:EnumDataType<any>;
    public createdbyid!:number;
    public updatedbyid!:number;
}

Interview.init({
    id: { 
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true},
    interviewTitle: {
      type: DataTypes.STRING,
      allowNull: false},
    interviewDate: {
        type: DataTypes.DATE,
        allowNull: false},
    interviewTime: {
        type: DataTypes.DATE,
        allowNull: false},
    status:{
      type:DataTypes.STRING,
      // values:['active','in active'],
      validate: {
        customValidator: (value:string) => {
            const enums = ['active', 'inactive']
            if (!enums.includes(value)) {
                throw new Error('not a valid option')
            }
        }
    },
      allowNull:false},
    createdbyid:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
    updatedbyid:{
        type: DataTypes.INTEGER,
        allowNull:false},
    },{
        sequelize: db,
        modelName: 'interviews',
        underscored : true,
        timestamps: true,
})