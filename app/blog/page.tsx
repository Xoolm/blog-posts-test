import { PostSearch } from "@/components/PostSearch";
import { Posts } from "@/components/Posts";
import { getAllPosts } from "@/services/getPosts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Next App",
};

export default async function Blog() {
  return (
    <>
      <h1>Blog Posts</h1>
      <PostSearch />
      <Posts />
    </>
  );
}

// async function getData() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     next: {
//       revalidate: 60,
//     },
//   });

//   if (!response.ok) throw new Error("Unable to get posts!");

//   return response.json();
// }
