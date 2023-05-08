import { Schema ,model,Document } from "mongoose";

interface ISalary extends Document{
   
    employee:String,
    amount:Number,
    date:Date
   

}

const salarySchema = new Schema<ISalary>({
    employee:{
      type:String,
      required:true,
      unique:true
    },

   amount:{
    type:Number,
    required:true
   },

   date:{
    type:Date,
    required:true
   }

    

})

const Salary = model <ISalary>('Salary',salarySchema)

export default Salary