import { useState } from 'react';
import axios from 'axios';

const ContactSearch = ({ token }) => {
  const [phone, setPhone] = useState('');
  const [user, setUser] = useState(null);
  const [customName, setCustomName] = useState('');
  const [message, setMessage] = useState('');

  const searchUser = async () => {
    try {
      const res = await axios.get(`/api/users/search?phone=${phone}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUser(res.data);
      setMessage('');
    } catch (err) {
      setUser(null);
      setMessage('User not found');
    }
  };

  const addToContacts = async () => {
    try {
      await axios.post(
        '/api/users/add-contact',
        { phone, name: customName },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessage('Contact added successfully');
      setUser(null);
      setPhone('');
      setCustomName('');
    } catch (err) {
      setMessage('Failed to add contact');
    }
  };

  return (
    <div className='flex flex-col items-center justify-center'>
        <input
        type="text"
        placeholder="Enter phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="p-2 border rounded mt-3 w-[80%] mb-2"
      />
      <button onClick={searchUser} className="w-[30%] mt-2 text-white bg-primary px-1 py-1 rounded">Search</button>

      {user && (
        <div className='flex flex-col items-center justify-center'>
          <p className='mt-2'>Found: {user.username}</p>
          <input
            type="text"
            placeholder="Custom name"
            value={customName}
            onChange={(e) => setCustomName(e.target.value)}
            className="p-2 border rounded w-[80%] my-2"
          />
          <button onClick={addToContacts} className="w-[30%] mt-2 text-white bg-primary px-1 py-1 rounded">
            Save
          </button>
        </div>
      )}

      {message && <p className="mt-2 text-sm text-gray-700">{message}</p>}
    </div>
  );
};

export default ContactSearch;