import { Json } from "sequelize/types/utils";
import { Category } from "../models/categories";

import { CategoryService } from "../services/categories.service";

const categoryService = new CategoryService();



export class CategoryController{

    /* To get the list of all categories */
    async getCategoryList(req:any,res:any){
        categoryService.getAllCategories()
            .then((data:any)=>{
                res.status(200).send({message:"category retrieved successfully",data});
        })
            .catch((error:string) => {
                console.log(error);
    });
    }

    async addCategory(req:any,res:any){
        let category:any = req.body;
        categoryService.createCategory(category)
            .then((data:any)=>{
                res.status(200).send({message:"category created",data});
        })
            .catch((error:string) => {
            console.log(error);
});
    }

     async getCategoryById(req:any,res:any){
        let categoryId:number = req.params.id;
        categoryService.findByCategoryId(categoryId)
            .then((data:any)=>{
                if(data.data !== 'null'){
                res.status(200).send({message:"particular category retrieved successfully",data});
                }
            })
            .catch((error:string) => {
                res.status(401).send({message: "category doesn't exist"})
                
            });
    }
}