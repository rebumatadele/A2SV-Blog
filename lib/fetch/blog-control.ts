import { CreateBlogRequest, MyBlogElement, MyBlogResponse } from "@/types/blog-control.interface";

const BASE_URL = 'http://blogapp.tryasp.net'

const createBlog = async (
    changePasswordDetails: CreateBlogRequest,
    token: string): Promise<MyBlogElement> => {
    try {
      const response = await fetch(`${BASE_URL}/api/blogs`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Add the token to the headers
        },
        body: JSON.stringify(changePasswordDetails),

      });
  
      if (response.status === 200) {
        const data: MyBlogElement = await response.json();
        return data;
      } else {
        alert(`Registration failed with status code: ${response.status}`)
        throw new Error(`Registration failed with status code: ${response.status}`);
      }
    } catch (error) {
      console.error('Error registering user:', error);
      throw error;
    }
  };

  const getBlog = async (): Promise<MyBlogElement[]> => {
    try {
      const response = await fetch(`${BASE_URL}/api/blogs`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });
  
      if (response.status === 200) {
        const data: MyBlogElement[] = await response.json();
        return data;
      } else {
        alert(`Fetch failed with status code: ${response.status}`);
        throw new Error(`Fetch failed with status code: ${response.status}`);
      }
    } catch (error) {
      console.error('Error fetching blogs:', error);
      throw error;
    }
  };
  
  const getSingleBlog = async (id:string): Promise<MyBlogElement> => {
    try {
      const response = await fetch(`${BASE_URL}/api/blogs/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });
  
      if (response.status === 200) {
        const data: MyBlogElement = await response.json();
        return data;
      } else {
        alert(`Registration failed with status code: ${response.status}`)
        throw new Error(`Registration failed with status code: ${response.status}`);
      }
    } catch (error) {
      console.error('Error registering user:', error);
      throw error;
    }
  };

  const myBlogs = async (token:string): Promise<MyBlogResponse> => {
    try {
      const response = await fetch(`${BASE_URL}/api/blogs/my-blogs`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Add the token to the headers
        }
    });
  
      if (response.status === 200) {
        const data: MyBlogResponse = await response.json();
        return data;
      } else {
        alert(`Registration failed with status code: ${response.status}`)
        throw new Error(`Registration failed with status code: ${response.status}`);
      }
    } catch (error) {
      console.error('Error registering user:', error);
      throw error;
    }
  };

  export {myBlogs, getSingleBlog, getBlog}