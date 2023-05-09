import { Schema ,model,Document } from "mongoose";

interface IDepartment extends Document{
    name:String,
    email:String,
    address:String,
    employees:Number,
    product:[String]

}

const departmentSchema = new Schema<IDepartment>({
    name:{
      type:String,
      required:true,
      unique:true
    },

    email:{
     type:String,
     required:true,
     unique:true
    },

    address:{
     style:String,
     required:true, 
    },

    employees:{
     type:Number,
     required:true
    },

    product:{
     type:[String],
     required:true
    }

})

const Department = model <IDepartment>('Department',departmentSchema)

export default Department