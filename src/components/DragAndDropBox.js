import { useState } from 'react';
import UploadIcon from "@/assets/upload.png"
import Image from 'next/image';
const DragAndDropBox = () => {
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragEnter = (event) => {
    event.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    setIsDragOver(false);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragOver(false);

    // Handle the dropped file here
    const file = event.dataTransfer.files[0];
    console.log(file);
  };

  return (
    <div
      className={`w-full h-40 border-2 border-dashed rounded-lg flex flex-col justify-center items-center ${
        isDragOver ? 'border-blue-500' : 'border-gray-300'
      }`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {/* <svg
        className="w-12 h-12 text-gray-400 mb-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 14l4-4 4 4m0 0l-4 4-4-4"
        />
      </svg> */}
      <Image src={UploadIcon} alt=""/>

      <p className="text-gray-500 text-center">
        Click to upload or drag and drop
        <br />
        SVG, PNG, JPG, or GIF (max. 800x400px)
      </p>
    </div>
  );
};

export default DragAndDropBox;
