"use client";

import React from "react";
import { useRouter } from "next/navigation";

function AddTopic() {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title and description are required");
      return;
    }

    try {
      const res = await fetch(
        "https://mongodbcrud-5bfbq845s-mike-lees-projects-cf5c7136.vercel.app/api/topics",
        {
          method: "post",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ title, description }),
        }
      );

      if (res.ok) {
        router.push("/");
        router.refresh();
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="flex flex-col gap-3" action="" onSubmit={handleSubmit}>
      <input
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="topic title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="topic description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button
        type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
      >
        Add Topic
      </button>
    </form>
  );
}

export default AddTopic;
