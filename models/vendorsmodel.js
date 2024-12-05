import mongoose from  "mongoose";
const vendorSchema=new mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
    rating:{
        type:Number,
        required:true,
    },
    employee_name:{
        type:Number,
        required:true,
    },
    contact_number:{
        type:String,
        required:true,
    },
});
export default mongoose.model("Vendor",vendorSchema);