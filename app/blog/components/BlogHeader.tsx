import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const BlogHeader = ({ setSearchTerm }: any) => {
  return (
    <div className="flex items-center justify-between mb-8">
      <h1 className="text-2xl font-bold">Blogs</h1>
      <div className="flex-grow flex justify-center">
        <div className="flex items-center space-x-4">
          <Input
            type="text"
            placeholder="Search blogs..."
            className="w-64 rounded-full"
            onChange={(e) => setSearchTerm(e.target.value)} // Update search term
          />
          <Button className="bg-[#264FAD] text-white rounded-full">
            + New Blog
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
