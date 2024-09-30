import React from 'react';
import { FaSearch, FaEllipsisV, FaSmile, FaPlus } from 'react-icons/fa';

function Chat() {
  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-900 text-white p-4">
        <Sidebar />
      </div>

      {/* Main Chat Section */}
      <div className="w-3/4 flex flex-col">
        <ChatHeader />
        <ChatBody />
        <MessageInput />
      </div>
    </div>
  );
}

const Sidebar = () => (
  <div>
    <h2 className="text-lg font-bold mb-4">Chats</h2>
    {/* Search Bar */}
    <div className="relative mb-4">
      <FaSearch className="absolute left-2 top-3 text-gray-500" />
      <input
        type="text"
        placeholder="Search"
        className="w-full bg-gray-800 text-white pl-8 pr-4 py-2 rounded-lg"
      />
    </div>
    {/* Chat List */}
    <div>
      <ChatItem name="Fresher Openings" message="IBM Summer Internship..." time="9:03 PM" />
      <ChatItem name="Manish Tiwari" message="Jay shree ram" time="8:56 PM" />
      <ChatItem name="Anil Paul" message="Aaj gaya tha class" time="5:06 PM" />
    </div>
  </div>
);

const ChatItem = ({ name, message, time }) => (
  <div className="flex justify-between items-center py-2 px-3 hover:bg-gray-800 rounded-lg cursor-pointer">
    <div>
      <h3 className="text-sm font-semibold">{name}</h3>
      <p className="text-xs text-gray-400">{message}</p>
    </div>
    <div className="text-xs text-gray-400">{time}</div>
  </div>
);

const ChatHeader = () => (
  <div className="bg-gray-800 p-4 flex justify-between items-center text-white">
    <div className="flex items-center">
      <img src="https://via.placeholder.com/40" alt="User" className="rounded-full mr-4" />
      <div>
        <h3 className="text-sm font-semibold">Anil Paul (Advantech)</h3>
        <p className="text-xs text-gray-400">Online</p>
      </div>
    </div>
    <div className="flex items-center space-x-4">
      <FaSearch />
      <FaEllipsisV />
    </div>
  </div>
);

const ChatBody = () => (
  <div className="flex-grow bg-chat-pattern p-6 overflow-y-auto">
    <Message isSender={false} message="Bataya tha na college chalu hua" time="5:00 PM" />
    <Message isSender={true} message="Aaj to light nhi tha to chhutti tha msg aaya tha" time="5:00 PM" />
    <Message isSender={false} message="2-3 din lagta haina timing pata krne mein" time="5:00 PM" />
    <Message isSender={true} message="Hm" time="5:01 PM" />
  </div>
);

const Message = ({ isSender, message, time }) => (
  <div className={`mb-4 ${isSender ? 'text-right' : 'text-left'}`}>
    <div className={`inline-block p-3 rounded-lg ${isSender ? 'bg-green-500 text-white' : 'bg-gray-300 text-black'}`}>
      <p>{message}</p>
    </div>
    <p className="text-xs text-gray-400 mt-1">{time}</p>
  </div>
);

const MessageInput = () => (
  <div className="bg-gray-800 p-4 flex items-center">
    <FaSmile className="text-gray-500 mr-4" />
    <input
      type="text"
      placeholder="Type a message"
      className="flex-grow bg-gray-900 text-white p-2 rounded-lg outline-none"
    />
    <FaPlus className="text-gray-500 ml-4" />
  </div>
);

export default Chat;
