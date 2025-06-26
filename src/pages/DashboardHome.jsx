import React from 'react';
import { FaBookOpen, FaUser, FaHeart, FaCommentDots } from 'react-icons/fa';

const DashboardHome = () => {
  const stats = [
    { title: 'All-Group', value: 124, icon: <FaBookOpen />, color: 'text-green-600' },
    { title: 'Users', value: 56, icon: <FaUser />, color: 'text-blue-600' },
    { title: 'Likes', value: 921, icon: <FaHeart />, color: 'text-pink-600' },
    { title: 'Comments', value: 187, icon: <FaCommentDots />, color: 'text-yellow-500' },
  ];

  return (
    <div>
      <h1 className="text-xl font-bold px-2 py-2">Hobbyhub Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 flex items-center justify-between
                       transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
          >
            <div>
              <p className="text-gray-500 mb-1">{item.title}</p>
              <h3 className={`text-2xl font-bold ${item.color}`}>{item.value}</h3>
            </div>
            <div className="bg-gray-100 p-3 rounded-full text-xl">
              {item.icon}
            </div>
          </div>
        ))}
      </div>

     <div className="space-y-4 px-4 py-3">

  {/* Card 1 */}
  <div className="bg-white shadow-md p-6 rounded-2xl flex gap-4 items-start">
    <span className="text-2xl">🧩</span>
    <p>
      Our group <strong>Board Game Enthusiasts</strong> has crossed <strong>100 members</strong> this week! 🎉 Dive into fun, strategy, and social nights every Friday.
    </p>
  </div>

  {/* Card 2 */}
  <div className="bg-white shadow-md p-6 rounded-2xl flex gap-4 items-start">
    <span className="text-2xl">🎨</span>
    <p>
      Huge shoutout to <strong>Anika Rahman</strong> for leading the <strong>Digital Art Masterclass</strong>! Over <strong>80 participants</strong> joined the interactive session last weekend.
    </p>
  </div>

  {/* Card 3 */}
  <div className="bg-white shadow-md p-6 rounded-2xl flex gap-4 items-start">
    <span className="text-2xl">📣</span>
    <p>
      Don't forget to explore our new <strong>Community Bulletin Board</strong>. Stay updated with all upcoming hobby meetups, workshops, and more!
    </p>
  </div>

</div>


    </div>
  );
};

export default DashboardHome;
