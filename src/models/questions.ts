import { DataTypes, EnumDataType, Model, Optional } from 'sequelize';
import db from '../config/database'

interface QuestionsAttributes {
    id: number;
    question: string;
    status:EnumDataType<string>;
}

export interface QuestionOutput extends Required<QuestionsAttributes> {}

export class Question extends Model implements QuestionsAttributes {
    public id!: number
    public question!: string
    public status!: EnumDataType<string>;

}

Question.init({
    id: { 
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true},
    question: {
      type: DataTypes.STRING,
      allowNull: false},
    status:{
        type:DataTypes.STRING,
        validate: {
          customValidator: (value:string) => {
              const enums = ['active', 'inactive']
              if (!enums.includes(value)) {
                  throw new Error('not a valid option')
              }
          }
      },
        allowNull:false},

    },{
        sequelize: db,
        modelName: 'questions',
        underscored : true,
        timestamps: true,
})