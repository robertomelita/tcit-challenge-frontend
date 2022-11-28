import { useDispatch } from "react-redux";
import { filterPosts } from "../features/posts/postSlice";
import { getPosts } from "../features/posts/thunks";

export const PostsFilter = () => {
  const dispatch = useDispatch();

  const searchPost = (e) => {
    e.preventDefault();

    const word = document.querySelector("input").value;
    if (word) dispatch(filterPosts(word));
    else dispatch(getPosts());
  };
  return (
    <form>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            aria-hidden="true"
            className="h-5 w-5 text-gray-500 "
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          placeholder="Search by Name"
          onChange={searchPost}
          required
        />
        <button
          type="submit"
          className="absolute right-2.5 bottom-2.5 rounded bg-blue-600 px-6 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          onClick={searchPost}
        >
          Search
        </button>
      </div>
    </form>
  );
};
