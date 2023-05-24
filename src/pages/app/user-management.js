import Header from '@/components/Header';
import Layout from '@/components/layout'
import Modal2 from '@/components/Modal2';
import React, {useState} from 'react'
import AddIcon from '@mui/icons-material/Add';

function UserManagement() {
    const users = [
        {
          id: 1,
          username: 'John Doe',
          email: 'john.doe@example.com',
          dateRegistered: '2022/01/01',
          leaderboardNumber: 5,
          status: true,
        },
        {
          id: 2,
          username: 'Jane Smith',
          email: 'jane.smith@example.com',
          dateRegistered: '2022/02/01',
          leaderboardNumber: 2,
          status: false,
        },
        {
          id: 1,
          username: 'John Doe',
          email: 'john.doe@example.com',
          dateRegistered: '2022/01/01',
          leaderboardNumber: 5,
          status: true,
        },
        {
          id: 2,
          username: 'Jane Smith',
          email: 'jane.smith@example.com',
          dateRegistered: '2022/02/01',
          leaderboardNumber: 2,
          status: false,
        },
        {
          id: 1,
          username: 'John Doe',
          email: 'john.doe@example.com',
          dateRegistered: '2022/01/01',
          leaderboardNumber: 5,
          status: true,
        },
        {
          id: 2,
          username: 'Jane Smith',
          email: 'jane.smith@example.com',
          dateRegistered: '2022/02/01',
          leaderboardNumber: 2,
          status: false,
        },
      ];
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [status, setStatus] = useState('');
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Perform form submission or validation logic
        // ...
    
        // Reset form fields
        setName('');
        setEmail('');
        setPassword('');
        setStatus('');
      };
      const [isModalOpen, setIsModalOpen] = useState(false);

    const ModalControl = () => {
      setIsModalOpen(!isModalOpen);
    };
  return (
    <Layout isActivePage="USER MANAGEMENT">
      <Header Title={"User Management"} BtnText={'Add User'}>
      <div className='bg-white flex justify-between w-full mt-3 h-[96px] items-center px-10 rounded'>
        <p className='text-[20px] font-bold'>Dashboard</p>
        <a className='bg-[#005259] text-white py-4 px-5 h-[56px]' onClick={()=>ModalControl()}>
           <AddIcon/> Add User
        </a>
      </div>
      </Header>
      {isModalOpen?<Modal2 isOpen={isModalOpen}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Add New User</h2>
        <button className="text-gray-500 hover:text-gray-800" onClick={ModalControl}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto text-left">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700 font-medium">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="border border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:ring-blue-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="status" className="block text-gray-700 font-medium">
          Status
        </label>
        <select
          id="status"
          className="border border-gray-300 rounded px-3 py-3 mt-1 w-full focus:outline-none focus:ring-blue-500"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">Select status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>
      <div className='flex justify-end w-full space-x-5'>
        <button
          type="submit"
          className="bg-white text-[#005259] border border-[#005259] text-white rounded mt-4  py-5 px-10"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-[#005259] text-white rounded mt-4  py-5 px-5"
        >
          Create User
        </button>

      </div>
    </form>

      {/* {children} */}
      </Modal2>:null}
      <div className='bg-white mt-5 overflow-scroll overflow-x-auto w-fit max-h-[400px] scrollbar scrollbar-thumb-gray-500 scrollbar-track w-[900px]'>
      <table className="min-w-fit divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            User
          </th>
          {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Username
          </th> */}
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Email
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Date Registered
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Leaderboard 
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Status
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Action
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {users.map((user) => (
          <tr key={user.id}>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10 rounded-full flex">
                  <div className="rounded-full bg-blue-500 h-10 w-10 text-white flex items-center justify-center">
                    <span className="text-lg font-semibold">
                      {user.username.charAt(0)}
                    </span>
                    <span className="text-lg font-semibold">
                      {user.username.charAt(user.username.length - 1)}
                    </span>

                  </div>
                  
                </div>
                <p className='pl-2'>{user.username}</p>
              </div>
            </td>
            {/* <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{user.username}</div>
            </td> */}
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{user.email}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{user.dateRegistered}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{user.leaderboardNumber}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${user.status ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {user.status ? 'Active' : 'Inactive'}
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
              <button className="text-blue-600 hover:text-blue-900">View User</button>
              <button className="ml-2 text-red-600 hover:text-red-900">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
      </div>
    </Layout>
  )
}

export default UserManagement
