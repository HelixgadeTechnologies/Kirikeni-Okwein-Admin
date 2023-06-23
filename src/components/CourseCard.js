import React from 'react';
import CourseImage from "@/assets/course.png"
import Image from 'next/image';
import Link from 'next/link';
const CourseCard = ({ image, heading, paragraph }) => {
  return (
    <Link href="/main/coursemodule">
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      <Image className="w-full" src={CourseImage} alt="Card" />
      <div className="px-6 py-4 bg-white">
        <div className="font-bold text-md mb-2">{heading}</div>
        <p className="text-gray-700 text-base">{paragraph}</p>
      </div>
    </div>
    </Link>
  );
};

export default CourseCard;
