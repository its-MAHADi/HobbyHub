import React, { use, useEffect, useState, } from 'react'
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const MyGroups = () => {
  const { user } = use(AuthContext);
  const [myGroups, setMyGroups] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/my-hobbys?email=${user.email}`)
        .then(res => res.json())
        .then(data => setMyGroups(data));
    }
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to delete this group?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/all-hobbys/${id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              const remaining = myGroups.filter(group => group._id !== id);
              setMyGroups(remaining);
              Swal.fire('Deleted!', 'Your group has been deleted.', 'success');
            }
          });
      }
    });
  };

  return (
    <div className="w-11/12 mx-auto lg:mt-10 my-3 bg-green-100 rounded rounded-md">
      {/* <h2 className="text-2xl font-bold mb-6 text-center">My Groups</h2> */}

      {/* Responsive horizontal scroll*/}
      <div className="overflow-x-auto">
        <table className="min-w-full border rounded-lg overflow-hidden">
          <thead className="bg-gradient-to-r from-blue-500 to-orange-600 text-white text-sm">
            <tr>
              <th className="p-3 text-left">No</th>
              <th className="p-3 text-left">Image</th>
              <th className="p-3 text-left">Group Name</th>
              <th className="p-3 text-left">Category</th>
              <th className="p-3 text-left">Start Date</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-800">
            {myGroups.map((group, index) => (
              <tr key={group._id} className="hover:bg-gray-50 border-b">
                <td className="p-3">{index + 1}</td>
                <td className="p-3">
                  <img
                    src={group.image}
                    alt={group.groupName}
                    className="w-14 h-14 object-cover rounded"
                  />
                </td>
                <td className="p-3">{group.groupName}</td>
                <td className="p-3">{group.hobbyCategory}</td>
                <td className="p-3">{group.startDate}</td>
                <td className="p-3">
                  <div className="flex flex-wrap gap-2">
                    <Link to={`/update-group/${group._id}`} className="btn btn-sm btn-primary">Update</Link>
                    <button
                      className="btn btn-sm bg-red-500 text-white whitespace-nowrap"
                      onClick={() => handleDelete(group._id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {myGroups.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center py-5 text-gray-500">
                  No groups found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyGroups;
