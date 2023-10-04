import { client } from "@/lib/contentful";
import { Metadata } from "next";
import Image from "next/image";
import { getPost } from "@/services/getPosts";

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const post = await client.getEntries({
    content_type: "blogpost",
    "sys.id": id,
  });
  return {
    title: post.items[0].fields.title,
    description: post.items[0].fields.title.metaDescription,
  };
}

export default async function Post({ params: { id } }: Props) {
  const { rich, post } = await getPost(id);
  console.log(post);

  return (
    <div className="targetBlog">
      <h3 className="targetBlog__author">Автор поста: {post.author2}</h3>
      {post.hasOwnProperty("image") ? (
        <Image
          className="post__image"
          alt={post.image.fields.description}
          src={`https:${post.image.fields.file.url}`}
          width={post.image.fields.file.details.image.width}
          height={post.image.fields.file.details.image.height}
        />
      ) : (
        <p style={{ color: "red", fontSize: "25px" }}>нет картинки</p>
      )}
      <h1 className="targetBlog__title">{post.title}</h1>
      <div className="targetBlog__richText">{rich}</div>
    </div>
  );
}

// async function getData(id: string) {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${id}`,
//     {
//       next: {
//         revalidate: 60,
//       },
//     }
//   );

//   return response.json();
// }
