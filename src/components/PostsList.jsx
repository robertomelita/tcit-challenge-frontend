import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, deletePost } from "../features/posts/thunks";

export const PostsList = () => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const handleDelete = (id) => {
    dispatch(deletePost(id));
  };

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="border-b bg-white">
                <tr>
                  <th
                    scope="col"
                    className="w-1/4 px-6 py-4 text-left text-sm font-medium text-gray-900 "
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-sm font-medium text-gray-900 "
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    className="w-1/6 px-6 py-4 text-left text-sm font-medium text-gray-900 "
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {posts.exposedPosts.map((post) => (
                  <tr
                    key={post.id}
                    className="border-b bg-white transition duration-300 ease-in-out hover:bg-gray-100"
                  >
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                      {post.name}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                      {post.description}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm  font-light text-gray-900">
                      <button
                        onClick={() => handleDelete(post.id)}
                        className="p-1 hover:rounded-full hover:bg-gray-200"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#222222"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                          <line x1="10" y1="11" x2="10" y2="17"></line>
                          <line x1="14" y1="11" x2="14" y2="17"></line>
                        </svg>
                      </button>
                      {/* <button
                        className="inline-block rounded-full bg-red-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg"
                        onClick={() => handleDelete(post.id)}
                      >
                        Delete
                      </button> */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
