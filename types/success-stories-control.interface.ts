export interface SuccessStoriesResponse {
    data : SuccessStory[]
}
export interface SuccessStory {
    _id: string,
    personName: string,
    imgURL:string,
    role: string,
    location: string,
    story: Story[],
    __v: number

}
export interface Story{
    heading: string,
    paragraph: string,
    _id: string,

}