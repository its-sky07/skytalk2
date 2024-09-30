// components/FriendList.js
import React from 'react';

const friends = [
  { name: 'Daryl Duckmanton', lastMessage: 'This is a message', lastActive: 'Apr 16', avatar: '/path-to-avatar' },
  { name: 'Kim O’Neil', lastMessage: 'Very funny', lastActive: '2 days ago', avatar: '/path-to-avatar' },
  { name: 'John Anderson', lastMessage: 'Yes, I love how Python does that', lastActive: '1 week ago', avatar: '/path-to-avatar' },
  { name: 'Ben Smith', lastMessage: 'Yeah Miami Heat are done', lastActive: '2:48 PM', avatar: '/path-to-avatar' },
  { name: 'Douglas Johannasen', lastMessage: 'No it does not', lastActive: '6:14 PM', avatar: '/path-to-avatar' },
  // Add more friends as needed
];

const FriendList = ({ onSelectFriend }) => {
  return (
    <div className="w-1/4 bg-blue-600 h-screen flex flex-col p-4">
      <input
        type="text"
        placeholder="Search"
        className="w-full px-4 py-2 mb-4 rounded-full bg-blue-500 placeholder-white text-white focus:outline-none"
      />
      <ul className="space-y-4 overflow-y-auto">
        {friends.map((friend, index) => (
          <li
            key={index}
            onClick={() => onSelectFriend(friend.name)}
            className="flex items-center space-x-4 cursor-pointer hover:bg-blue-500 p-2 rounded-lg"
          >
            <div className="h-12 w-12 bg-gray-300 rounded-full"></div>
            <div className="text-white">
              <p className="font-bold">{friend.name}</p>
              <p className="text-sm text-gray-300">{friend.lastMessage}</p>
            </div>
            <span className="ml-auto text-sm text-gray-300">{friend.lastActive}</span>
          </li>
        ))}
      </ul>
      <button className="bg-blue-700 text-white rounded-full p-2 mt-auto">
        +
      </button>
    </div>
  );
};

export default FriendList;
