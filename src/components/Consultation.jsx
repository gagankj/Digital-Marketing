import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Consultation = () => {

    const [name, setName]=useState("");
  const [hosp, setHosp]=useState('');
  const [contact, setContact]=useState('');
  const [address, setAddress]=useState('');
  const [time, setTime]=useState('');

  // retrived data state
  

  // submit event
  const handleSubmit=(e)=>{
    e.preventDefault();
    // console.log(name, age, designation, salary);

    // our object to pass
    const data = {
      Name:name,
      Hospital:hosp,
      Contact:contact,
      Address:address,
      Time:time
    }
    axios.post('https://api.sheetbest.com/sheets/c86e8921-1661-4316-9832-ea85438c7d87',data).then(response=>{
      
      setName('');
      setHosp('');
      setContact('');
      setAddress('');
      setTime('');
    })
  }

    return (
        <div className='h-screen pt-32'>
            <div className="container mx-auto p-6  bg-zinc-300 rounded-lg shadow-lg max-w-lg">
  <h1 className="text-4xl font-bold text-center mb-6">Book a <span className='text-orange-500 text-5xl'>FREE</span> Consultation Now!! </h1>
  <form autoComplete="off" className="space-y-4" onSubmit={handleSubmit}>
    
    <div>
      <label className="block text-md font-semibold text-zinc-800">Doctor's Name</label>
      <input
        type="text"
        className="mt-1 block w-full py-2 px-2 border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500"
        required
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
        value={name}
        />
    </div>

    <div>
      <label className="block text-md font-semibold text-zinc-800">Venture Name</label>
      <input
        type="text"
        className="mt-1 block w-full py-2 px-2 border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500"
        required
        placeholder="Enter the name of your Health Care Venture"
        onChange={(e) => setHosp(e.target.value)}
        value={hosp}
        />
    </div>

    <div>
      <label className="block text-md font-semibold text-zinc-800">Contact</label>
      <input
        type="tel"
        className="mt-1 block w-full py-2 px-2 border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500"
        required
        placeholder="Enter your Contact"
        onChange={(e) => setContact(e.target.value)}
        value={contact}
        />
    </div>

    <div>
      <label className="block text-md font-semibold text-zinc-800">Address</label>
      <input
        type="text"
        className="mt-1 block w-full py-2 px-2 border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500"
        required
        placeholder="Enter the Address"
        onChange={(e) => setAddress(e.target.value)}
        value={address}
        />
    </div>

    <div>
      <label className="block text-md font-semibold text-zinc-800">Time</label>
      <input
        type="text"
        className="mt-1 block w-full py-2 px-2 border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500"
        
        placeholder="When should we call you?"
        onChange={(e) => setTime(e.target.value)}
        value={time}
        />
    </div>

    <div className="text-center">
      <button type="submit" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">Submit</button>
    </div>
  </form>
</div>
    
    </div>
    );
}

export default Consultation;
