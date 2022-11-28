import { PostForm } from "./components/PostForm";
import { PostsFilter } from "./components/PostsFilter";
import { PostsList } from "./components/PostsList";

export const App = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-slate-500 to-slate-200 p-3">
      <div className="max-w-6xl rounded-3xl bg-slate-200/75 p-7">
        <PostsFilter />
        <PostsList />
        <PostForm />
      </div>
    </div>
  );
};
