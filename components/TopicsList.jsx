import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

const getTopics = async () => {
  const currentURL = window.location.href;

  const res = await fetch(`${currentURL}/api/topics`, {
    // const res = await fetch("http://localhost:3000/api/topics", {
    cache: "no-store",
    // cache: "default",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch topics");
  }

  return res.json();

  // try {
  //   const res = await fetch("http://localhost:3000/api/topics", {
  //     cache: "no-store",
  //     // cache: "default",
  //   });

  //   if (!res.ok) {
  //     throw new Error("Failed to fetch topics");
  //   }

  //   return res.json();
  // } catch (error) {
  //   console.log("Error loading topics", error);
  // }
};

async function TopicsList() {
  const { topics } = await getTopics();

  return (
    <>
      {topics.map((t) => (
        <div
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5"
          key={t._id}
        >
          <div>
            <h2 className="font-bold text-2xl">{t.title}</h2>
            <div>{t.description}</div>
          </div>
          <div className="flex gap-2 items-start">
            <RemoveBtn id={t._id} />
            <Link href={`/editTopic/${t._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}

export default TopicsList;
