export interface CreateBlogRequest {
    image : string ,
    description : string,
    title: string,
    tags: string[],
    skills : string[]
}

export interface MyBlogResponse {
data : MyBlogElement[]
}
export interface MyBlogElement {
    _id?: "64e062e113118e7f1f0a59b5",
    image: "https://res.cloudinary.com/djtkzulun/image/upload/v1692426976/A2sv/eqg5kgjzu8o4592darvb.jpg",
    title: "Mastering the Art of Code Refactoring",
    description: "Code refactoring is an essential practice in software development that often separates novice programmers from experienced engineers. Refactoring isn't just about tidying up your code; it's about improving its structure, readability, and maintainability. Let's delve into the key aspects of mastering the art of code refactoring.",
    author: {
        _id: string,
        name: string,
        email: string,
        image: string,
        role: string
      },
      isPending: boolean,
      tags: string[],
      likes: number,
      relatedBlogs: any[],
      skills: string[],
      createdAt: string,
      updatedAt: string,
      __v: number
}