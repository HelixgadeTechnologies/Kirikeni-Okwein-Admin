import Layout from '@/components/layout'
import React from 'react'

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
        // Add more user objects as needed
      ];
      
  return (
    <Layout isActivePage="USER MANAGEMENT">
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
                  <div className="rounded-full bg-blue-500 text-white flex items-center justify-center">
                    <span className="text-lg font-semibold">
                      {user.username.charAt(0)}
                    </span>
                    <span className="text-lg font-semibold">
                      {user.username.charAt(user.username.length - 1)}
                    </span>

                  </div>
                  {user.username}
                </div>
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
