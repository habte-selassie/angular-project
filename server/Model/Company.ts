import { Schema ,model,Document } from "mongoose";

export interface ICompany extends Document{
    name:String,
    email:String,
    addres:String,
    employees:Number,
    contact:Number,
    industry:String,
    product:[String]

}

const companySchema = new Schema<ICompany>({
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

    addres:{
     style:String,
     required:true, 
    },

    employees:{
     type:Number,
     required:true
    },

    contact:{
     type:Number,
     required:true,
     unique:true
    },

    industry:{
     type:String,
     required:true
    },

    product:{
        type:[String],
        required:true
    }

})

const Comapany = model <ICompany>('Company',companySchema)

export default Comapany