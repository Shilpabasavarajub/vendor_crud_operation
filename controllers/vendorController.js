import vender from '../models/vendormodel.js';

export const createVendor=async(req,res)=>{
    try{
        //this behaves like a object 
        const vendordata = await vender(req.body);
        //if empty doesnt accept it 
       if(!vendordata){
     return res.status(400).json({message:"Invalid Data or add a proper data to accept"});
         }

         await vendordata.save();
         res.status(201).json({message:"user successfully saved vendordata ",
            acceptedvender: vendordata 
         });

    }
    catch(error)
    {
        res.status(500).json({error:error.message});
    }

}

export const getAllUser=async(req,res)=>
{
    try{
        const vendorData=await vender.find();
        if(!vendorData)
        {   
            return res.status(400).json({message:"user vendor  not found"});

        }
        res.status(200).json(vendorData);

    }
    catch(error)
    {
        res.status(500).json({error:error.message});
    }
}

export const getOneUser = async (req, res) => {
    try {
        const id = req.params.id;
        const vendorData = await vender.findById(id);
        if (!vendorData) {
            return res.status(404).json({ message: "Vendor not found" });
        }
      res.status(200).json(vendorData);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateUser=async(req,res)=>
{
    try{
        const id = req.params.id;
        const vendorExistsData = await vender.findById(id);
        if(!vendorExistsData)
        {
            return res.status(404).json({ message: "Vendor  data not found " });
        }
        await vender.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json({ 
            message: "Vendor updated successfully "
        });

    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};


export const deleteOneUser = async (req, res) => {
    try {
        const id = req.params.id;
        const vendorData = await vender.findByIdAndDelete(id);
        if (!vendorData) {
            return res.status(404).json({ message: "Vendor not found or deleted" });
        }
        res.status(200).json({ 
            message: "Vendor successfully deleted", 
            deletedVendor: vendorData 
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

    

