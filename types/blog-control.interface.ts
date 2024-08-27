export interface CreateBlogRequest {
    image : string ,
    description : string,
    title: string,
    tags: string[],
    skills : string[]
}

export interface MyBlogResponse extends Array<MyBlogElement> {}
export interface MyBlogElement {
    _id?: string,
    image: string,
    title: string,
    description: string,
    author:any
    isPending: boolean,
    tags: string[],
    likes: number,
    relatedBlogs: any[],
    skills: string[],
    createdAt: string,
    updatedAt: string,
    __v: number
}