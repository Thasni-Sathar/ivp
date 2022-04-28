import { Category} from '../models/categories' 

export class CategoryService{
    
    static get EmployeeList(){
        /* When only selected fields required go for the below code */
        //return ['id','role_id'];
        return ({});
    }


    /* To get the list of all employees*/
    getAllCategories(){
            return Category.findAll({
            
        })   
    }

    createCategory(category:any){
        var newCategory = new Category(category);
        return newCategory.save();
    }

    findByCategoryId(id:number){
        return Category.findByPk(id);
    }

    findByName(name:any) {
        return Category.findOne({
            where:{
                categoryName:name
            }
        })
    }
}