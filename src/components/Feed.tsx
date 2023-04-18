import AddPostForm from "./AddPostForm";
import PostsList from "./PostsList";

const Feed = () => {
  return (
    <section className="max-w-xs flex-grow w-full flex flex-col gap-7 py-5 sm:max-w-screen-sm md:max-w-screen-sm lg:max-w-screen-lg">
      <AddPostForm />

      <PostsList />
    </section>
  );
};

export default Feed;
