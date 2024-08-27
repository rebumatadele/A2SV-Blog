import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MyBlogElement } from "@/types/blog-control.interface"; // Adjust import as necessary

interface CardProps {
  blog: MyBlogElement;
}

const Card: React.FC<CardProps> = ({ blog }) => {
  if (!blog) return null;

  const {
    image = "/Footer.png",
    title = "Title",
    description = "Ena Elishalew",
    createdAt = "",
    author = { name: "John Doe", image: "/profile.png" },
  } = blog;

  const authorImage = author?.image || "/profile.png";
  const authorName = author?.name || "John Doe";

  return (
    <Link href={`/detail/${blog._id}`} passHref>
      <div className="bg-white rounded-lg p-3 cursor-pointer hover:shadow-lg transition-shadow duration-300 max-h-[400px] overflow-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
        <div className="flex items-center mb-6">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <Image
              src={authorImage}
              alt="User Image"
              width={64}
              height={64}
              className="object-cover"
            />
          </div>
          <div className="ml-4">
            <h2 className="text-xl font-semibold">{authorName}</h2>
            <p className="text-gray-600">Date: {new Date(createdAt).toDateString()}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-bold mb-2">{title}</h3>
            <p className="text-gray-700 mb-4">{description}</p>
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag, index) => (
                <span key={index} className="bg-gray-200 text-gray-700 text-xs font-medium rounded-full px-3 py-1">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="relative flex items-start">
            <Image
              src={image}
              alt="Blog Image"
              width={300}
              height={70}
              className="object-cover rounded-lg -mt-12"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
