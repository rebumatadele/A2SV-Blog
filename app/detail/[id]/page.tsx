"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import { MyBlogElement } from "@/types/blog-control.interface";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/app/context/store";
import data from "@/app/data.json"; // Make sure this JSON file is typed correctly

interface DetailPageProps {
  params: { id: string };
}

// Ensure the structure of MyBlogElement matches the data you are using
const DetailPage: React.FC<DetailPageProps> = ({ params }) => {
  const { id } = params;
  const [blog, setBlog] = useState<MyBlogElement | null>(null);
  const [loading, setLoading] = useState(true);

  // Access all blogs from the store
  const allBlogs = useSelector((state: RootState) => state.blog.blogs) || [];

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        // Find the blog in dummy data by id
        const foundBlog = data.find((blog: MyBlogElement) => blog._id === id);
        if (foundBlog) {
          setBlog(foundBlog);
        } else {
          console.error("Blog not found");
          setBlog(null); // Handle "not found" case
        }
      } catch (error) {
        console.error("Error fetching blog data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-pulse text-gray-700 text-lg">Please Wait...</div>
      </div>
    );

  if (!blog) return <p>No blog found</p>;

  // Shuffle the array to pick random blogs without mutating the original array
  const shuffleArray = (array: MyBlogElement[]) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  // Use the shuffled array to select 3 random blogs
  const relatedBlogs = shuffleArray(allBlogs).slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar />
      </header>
      <main className="flex-grow p-8 gap-5 mb-20">
        <div className="w-3/4 mx-auto">
          <div className="border-b border-gray-200 pb-4 mb-6">
            <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-gray-600">
                {blog.skills.join(", ")}
              </span>
              <div className="w-1 h-4 bg-gray-300"></div>
              <span className="text-sm font-medium text-gray-600">
                {new Date(blog.createdAt).toDateString()}
              </span>
            </div>
          </div>
          <div className="mb-6">
            <Image
              src={blog.image || "/Footer.png"}
              alt={blog.title || "Blog Image"}
              width={1200}
              height={600}
              className="object-cover w-full"
            />
          </div>
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <Image
                src={blog.author?.image || "/profile.png"}
                alt={blog.author?.name || "Name"}
                width={64}
                height={64}
                className="object-cover"
              />
            </div>
            <div className="ml-4">
              <h2 className="text-xl font-semibold">
                {blog.author?.name || "Unknown"}
              </h2>
              <p className="text-gray-600">
                Interests: {blog.author?.interests?.join(", ") || "N/A"}
              </p>
              <p className="text-blue-600">@{blog.author?.username || "N/A"}</p>
            </div>
          </div>
          <h3 className="text-lg font-semibold mb-4">{blog.description}</h3>
          <div className="space-y-4 mb-6">
            {blog.description.split("\n").map((paragraph, index) => (
              <p key={index} className="text-gray-700">
                {paragraph}
              </p>
            ))}
          </div>
          <div>
            <span className="font-semibold">Related Blogs</span>
            <div className="flex gap-6">
              {relatedBlogs.length > 0 ? (
                relatedBlogs.map((relatedBlog) => (
                  <div
                    key={relatedBlog._id}
                    className="relative bg-white p-4 rounded-lg shadow-md flex-1 max-w-xs md:max-w-sm lg:max-w-md overflow-hidden transition-opacity duration-300 hover:opacity-80"
                  >
                    <div className="relative">
                      <Image
                        src={relatedBlog.image || "/blog.png"}
                        alt={relatedBlog.title || "Related Blog Image"}
                        width={60}
                        height={60}
                        className="object-cover w-full h-40"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40"></div>
                    </div>
                    <h4 className="text-lg font-semibold mb-2">
                      {relatedBlog.title}
                    </h4>
                    <p className="text-gray-700 mb-4 line-clamp-3">
                      {relatedBlog.description}
                    </p>
                    <Link href={`/detail/${relatedBlog._id}`}>
                      <span className="bg-[#264FAD] text-white px-4 py-2 rounded cursor-pointer">
                        Read More
                      </span>
                    </Link>
                  </div>
                ))
              ) : (
                <p>No related blogs available</p>
              )}
            </div>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default DetailPage;
