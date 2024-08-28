"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogHeader from "./components/BlogHeader";
import Card from "../components/Card";
import { getBlog } from "@/lib/fetch/blog-control";
import { useDispatch, useSelector } from "react-redux";
import { blogActions } from "../context/slices/blogSlice";
import { RootState } from "../context/store";
import {
  Pagination,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Page = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state: RootState) => state.blog.blogs) || [];
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const blogsPerPage = 5;

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await getBlog();
        dispatch(blogActions.setBlogs(response));
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      }
    };

    fetchBlog();
  }, [dispatch]);

  // Filter blogs based on the search term
  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar />
      </header>
      <main className="flex-grow p-8 gap-5 w-full mb-20">
        <BlogHeader setSearchTerm={setSearchTerm} />
        <section className="flex justify-center">
          <div className="flex flex-col w-3/4 gap-5">
            {currentBlogs.length > 0 ? (
              currentBlogs.map((blog) => <Card key={blog._id} blog={blog} />)
            ) : (
              <p>No blogs available</p>
            )}
            {totalPages > 1 && (
              <Pagination className="flex justify-center gap-2 mt-6">
                <PaginationPrevious
                  className={`px-4 py-2 bg-blue-500 text-white rounded-md ${
                    currentPage === 1 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                  }`}
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                >
                  Previous
                </PaginationPrevious>
                {Array.from({ length: totalPages }, (_, index) => (
                  <PaginationItem
                    key={index + 1}
                    onClick={() => setCurrentPage(index + 1)}
                    className={`px-3 py-1 border rounded-md cursor-pointer ${
                      currentPage === index + 1
                        ? "bg-blue-500 text-white"
                        : "bg-white text-black"
                    }`}
                    style={{
                      listStyle: "none",
                      textDecoration: "none",
                      margin: "0",
                      padding: "2",
                    }}
                  >
                    {index + 1}
                  </PaginationItem>
                ))}
                <PaginationNext
                  className={`px-4 py-2 bg-blue-500 text-white rounded-md ${
                    currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                  }`}
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                >
                  Next
                </PaginationNext>
              </Pagination>
            )}
          </div>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Page;
