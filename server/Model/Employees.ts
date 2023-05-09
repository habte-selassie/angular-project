import { Schema ,model,Document } from "mongoose";

interface IEmployee extends Document{
    name:String,
    age:Number,
    email:String,
    department:String,
    designation:String,
    skills:String[],
    contact:Number,
    address:String,

}

const employeeSchema = new Schema<IEmployee>({
    name:{
      type:String,
      required:true,
      unique:true
    },

    age:{
     type:Number,
     required:true,
     unique:false
    },
    
    email:{
      type:String,
      required:true,
      unique:true
    },

    designation:{
     type:String,
     required:true,
     unique:false
    },

    department:{
     type:Number,
     required:true
    },
  
    skills:[{
      type:String,
      required:true,
      unique:true
    }],
    contact:{
      type:Number,
      required:true,
      unique:true
    },
    address:{
      type:String,
      required:true,
     
    }

})

const Employee = model <IEmployee>('Employees',employeeSchema)

export default Employee