import React from "react";
import { Button } from "@/components/ui/button"; // Adjust path as needed
import { Input } from "@/components/ui/input"; // Adjust path as needed

const BlogHeader = () => {
  return (
    <div className="flex items-center justify-between mb-8">
      {/* Left section with "Blog" */}
      <h1 className="text-2xl font-bold">Blogs</h1>

      {/* Center section with search bar and button */}
      <div className="flex-grow flex justify-center">
        <div className="flex items-center space-x-4">
          {/* Search bar */}
          <Input
            type="text"
            placeholder="Search blogs..."
            className="w-64 rounded-full"
          />

          {/* Button */}
          <Button className="bg-[#264FAD] text-white rounded-full">
            + New Blog
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
