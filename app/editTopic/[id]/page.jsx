import EditTopicForm from "@/components/EditTopicForm";

const getTopicById = async (id) => {
  const res = await fetch(
    `https://mongodbcrud-5bfbq845s-mike-lees-projects-cf5c7136.vercel.app/api/topics/${id}`,
    {
      // cache: "default",
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch topic");
  }

  return res.json();

  // try {
  //   const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
  //     // cache: "default",
  //     cache: "no-store",
  //   });

  //   if (!res.ok) {
  //     throw new Error("Failed to fetch topic");
  //   }

  //   return res.json();
  // } catch (error) {
  //   console.log(error);
  // }
};

async function EditTopic({ params }) {
  const { id } = params;

  const { topic } = await getTopicById(id);
  const { title, description } = topic;

  return <EditTopicForm id={id} title={title} description={description} />;
}

export default EditTopic;
