import React, { useEffect, useState } from 'react';
import axios from "axios";
import toast from "react-hot-toast";
import "./style.css"
import { Link } from 'react-router-dom';

const Vendors = () => {
  const [vendors, setvendors] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
        const response = await axios.get("http://localhost:8000/api/getall");
        setvendors(response.data);
    }

    fetchData();

  }, [])

  const deletevendor = async (userId) => {
      await axios.delete(`http://localhost:8000/api/deleteone/${userId}`)
      .then((response) => {
        setvendors((prevUser) => prevUser.filter((user) => user._id !== userId))
        toast.success(response.data.msg, { position: 'top-right' })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <div className='vendorTable'>
        <h1>Vendors List</h1>
        <Link to={"/create"} className='addButton'>Add User</Link>
        <table border={1} cellPadding={10} cellSpacing={0}>
            <thead>
                <tr>
                    <th>S.no.</th>
                    <th>name</th>
                    <th>location</th>
                    <th>rating</th>
                    <th>employee_name</th>
                    <th>contact_number</th>
                </tr>
            </thead>
            <tbody>
                {
                    vendors.map((hotel, index) => {
                        return (
                        <tr key={hotel._id}>
                            <td>{index + 1}</td>
                            <td>{hotel.name}</td>
                            <td>{hotel.location}</td>
                            <td>{hotel.rating}</td>
                            <td>{hotel.employee_name}</td>
                            <td>{hotel.contact_number}</td>
                            <td className='actionButtons'>
                                <button onClick={() => deletevendor(vendor._id)}><i className="fa-solid fa-trash">Delete</i></button>
                                <Link to={`/update/${vendor._id}`}><i className="fa-solid fa-pen-to-square">Edit</i></Link>
                            </td>
                        </tr>
                        )
                    })
                }
                
            </tbody>
        </table>
    </div>
  )
}

export default Vendors;
