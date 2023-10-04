"use client";

import { getPostsBySearch } from "@/services/getPosts";
import { FormEventHandler, useState } from "react";
import useSWR from "swr";

const PostSearch = () => {
  const { mutate } = useSWR("posts");
  const [search, setSeatch] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const posts = await getPostsBySearch(search);
    mutate(posts);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="search"
        value={search}
        onChange={(e) => setSeatch(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export { PostSearch };
