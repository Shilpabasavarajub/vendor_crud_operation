import React,{useState} from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link,useNavigate} from 'react-router-dom';
const Add =()=>{
    const vendors={
        name:"",
        location:"",
        rating: "",
        employee_name:"",
        contact_number:"",

    }
    const [vendor,setVendors]=useState(vendors);
    const navigate= useNavigate();

    const inputHandler=(e)=>{
        const {name,value}=e.target;
        setVendors({...vendor,[name]:value});

    }

    const submitForm= async(e)=>{
        e.preventDefalut();
        await axios.post("http://localhost:8000/api/create",vendor)
            .then((rea)=>{
                toast.success(res.data.msg,{position:"top-right"});
                navigate("/");
            })
            .catch(error=>console.error(error))
    }

    return(
    <div>
        <link to='/'>Back</link>
        <h1>Add new vendors</h1>
        <form onSubmit={submitForm} > 
            <div>
                <label htmlFor='name'>First Name</label>
                <input type="text"  onChange={inputHandler} id="name" name="name"  placeholder='First Name'/>
            </div>
            <div>
                <label htmlFor='location'>Location</label>
            <input type="text" onChange={inputHandler} id="location" name="location"  placeholder='Location'/>
            </div>
            <div>
                <label htmlFor='rating'>Rating</label>
                <input type="number"  onChange={inputHandler} id="rating" name="rating"  placeholder='Rating'/>
            </div>
            <div>
                <label htmlFor='employee_name'>Employee Nmae</label>
                <input type="text" onChange={inputHandler} id="employee_name" name="employee_name"  placeholder='Employee Nmae'/>
            </div>
            <div>
                <label htmlFor='contact_number'>Contact Number</label>
                <input type="number" onChange={inputHandler} id="contact_number" name="contact_number"  placeholder='Contact Number'/>
            </div>
            <div>
                <button> type="submit" Add catalogue </button>
            </div>
        </form>
    </div>

    );
}
export default Add;