"use client";

import Link from "next/link";
import Image from "next/image";
import { IPost } from "@/app/models/IPost";
import useSWR from "swr";
import { getAllPosts } from "@/services/getPosts";

const Posts = () => {
  const { data: posts, isLoading } = useSWR("posts", getAllPosts);

  console.log(posts);
  return isLoading ? (
    <h3>Loading...</h3>
  ) : (
    <ul className="posts">
      {posts.map((post: IPost) => (
        <>
          <Link href={`/blog/${post.sys.id}`} className="post">
            <li className="post__body">
              {post.fields.hasOwnProperty("image") ? (
                <Image
                  className="post__image"
                  alt={post.fields.image.fields.description}
                  src={`https:${post.fields.image.fields.file.url}`}
                  width={post.fields.image.fields.file.details.image.width}
                  height={post.fields.image.fields.file.details.image.height}
                />
              ) : (
                <p style={{ color: "red", fontSize: "25px" }}>нет картинки</p>
              )}
              <h4 className="post__author">{post.fields.author2}</h4>
              <h2 className="post__title">{post.fields.title}</h2>
              <p className="post__abstract">{post.fields.abstract}</p>
              <p className="post__readBlog">Read blog</p>
            </li>
          </Link>
        </>
      ))}
    </ul>
  );
};

export { Posts };
