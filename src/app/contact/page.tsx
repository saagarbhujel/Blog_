'use client'
import axios from "axios";
import React, {  useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const notifySuccess = () => toast.success('Thank you for contacting us. We will send you a notification email soon.');
  const notifyError = () => toast.error('OPPS! Sorry Something went wrong. Please try again later.');
  const [contact, setContact] = useState({
    name:'',
    email:'',
    message:''
  })
  // const [email, setEmail] = useState('')
  // const [message, setMessage] = useState('')


  const handleSubmit=((e:any)=>{
    e.preventDefault();
    // console.log(contact)
    contactDetails()
    
  })

  const handelChange = ((e:any)=>{
    setContact({...contact,[e.target.name]:e.target.value})
  })

  const contactDetails = async ()=>{
  try {
    const response = await axios.post('http://localhost:3000/api/users/contact',{
      name:contact.name,
      email:contact.email,
      message:contact.message
      // contact
    })
    console.log(response);
    // alert('Thank you for contacting us. We will send you a notification email soon.')
    setContact({name:'',
    email:'',
    message:''})
    notifySuccess()
  } catch (error:any) {
    notifyError()
  }
  }
  return (
    <>
    <div><Toaster/></div>
      <div className=" min-h-screen flex items-center justify-center">
        <div className="w-full max-w-md p-6  rounded-[10px] shadow-2xl shadow-slate-400">
          <h3 className="text-2xl font-semibold mb-4 text-center">Contact Us</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={contact.name}
                onChange={handelChange}
                placeholder="Enter your name"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={contact.email}
                onChange={handelChange}
                placeholder="Enter your email address"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 font-semibold mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                value={contact.message}
                onChange={handelChange}
                rows="4"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none resize-none"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
