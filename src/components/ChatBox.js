import React from 'react';
// import { FaSmile, FaPaperclip, FaPaperPlane } from 'react-icons/fa';
// import { HiOutlineStatusOnline, HiOutlineStatusOffline } from 'react-icons/hi';
import SendIcon from '@mui/icons-material/Send';
import AttachmentIcon from '@mui/icons-material/Attachment';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ChatUser from "@/assets/chat-user.png"
import Image from 'next/image';

const messages = [
  { content: 'Hello!', sender: 'me', timestamp: '9:00 AM' },
  { content: 'Hi there!', sender: 'other', timestamp: '9:02 AM' },
  // Additional messages...
];

const ChatBox = () => {
  return (
    <div className="flex flex-col h-full relative">
      {/* Top bar */}
      <div className="p-4 border-b flex justify-between items-center">
        <div>
          <p className="text-xl font-bold">John Doe</p>
          <div className="flex items-center">
            <span className="text-green-500 mr-1">
              {/* <HiOutlineStatusOnline /> */}
            </span>
            <p className="text-sm text-gray-600">Online</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-grow p-4 overflow-y-auto">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`${
              message.sender === 'me' ? 'flex flex-col justify-start items-start text-right' : 'text-left flex flex-col justify-end items-end'
            } mb-4`}
          >
            <div className="flex flex-col justify-between mb-2">
              {/* <p className="text-gray-500 text-sm">{message.timestamp}</p>
              <span className="text-xs text-gray-500">
                {message.sender === 'me' ? 'You' : 'John Doe'}
              </span> */}
            </div>
            <div className="flex items-center">
            <Image
                  src={ChatUser}
                  alt="Sender"
                  className="w-6 h-6 rounded-full mr-2"
                />
              {/* {message.sender !== 'me' && (
                <Image
                  src={ChatUser}
                  alt="Sender"
                  className="w-6 h-6 rounded-full mr-2"
                />
              )} */}
              <div className='flex jusify-center items-center space-x-4'>
              <div
                className={`${
                  message.sender === 'me' ? 'bg-blue-500 text-white' : 'bg-gray-200'
                } rounded p-2`}
              >
                {message.content}
              </div>
              <p className="text-gray-500 text-sm">{message.timestamp}</p>
             
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Typing box */}
      <div className="p-4 border-t ">
        <div className="flex items-center ">
          
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-grow bg-gray-200 px-4 py-2 rounded"
          />
          <button className="mr-2 text-gray-500">
            <EmojiEmotionsIcon />
          </button>
          <button className="mr-2 text-gray-500">
            <AttachmentIcon />
          </button>
          <button className="text-blue-500">
            <SendIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
