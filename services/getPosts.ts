import { client } from "@/lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export const getAllPosts = async () => {
  const posts = await client.getEntries({ content_type: "blogpost" });

  return posts.items;
};

export const getPost = async (id: string) => {
  const posts = await client.getEntries({
    content_type: "blogpost",
    "sys.id": id,
  });

  return {
    rich: documentToReactComponents(posts.items[0].fields.textmain),
    post: posts.items[0].fields,
  };
};

export const getPostsBySearch = async (search: string) => {
  const posts = await client.getEntries({
    content_type: "blogpost",
    "fields.title": search,
  });

  return posts.items;
};
