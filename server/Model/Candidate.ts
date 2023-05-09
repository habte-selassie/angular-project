import { Schema ,Document ,model } from "mongoose";

// export interface Candidate{
//         name:string;
//         email:string;
//         age:number;
//         skills:[]
// }
export interface ICandidate extends Document{
    name:string;
    email:string;
    age:number;
    skills:[]

}

const CandidateSchema = new Schema<ICandidate>({
   name:{
    type:String,
    required:true,
   } 
   ,

   email:{
    type:String,
    required:true,
    unique:true,
   } 
   , 

   age:{
    type:Number,
    required:true,
   } 
   , 
   skills:{
    type:[String],
    required:true,
   } 
})

const Candidate = model <ICandidate>('Candidate',CandidateSchema)

export default Candidate;