import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../features/posts/thunks";

export const PostForm = () => {
  const [post, setPost] = useState({
    name: "",
    description: "",
  });
  const dispatch = useDispatch();
  const refInputName = useRef(null);
  const refInputDescription = useRef(null);

  const handleChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  const submitPost = (e) => {
    e.preventDefault();

    if (post.name === "" || post.description === "") return;

    dispatch(createPost(post));

    setPost({
      name: "",
      description: "",
    });

    refInputName.current.value = "";
    refInputDescription.current.value = "";
  };

  return (
    <form
      className="flex flex-row content-center justify-center"
      onSubmit={submitPost}
    >
      <input
        name="name"
        className="form-control
        m-0
        block
        w-1/3
        rounded
        border
        border-solid
        border-gray-300
        bg-white bg-clip-padding
        px-3 py-1.5 text-base
        font-normal
        text-gray-700
        transition
        ease-in-out
        focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
        type="text"
        placeholder="Name"
        ref={refInputName}
        onChange={handleChange}
      ></input>
      <input
        name="description"
        className="
        form-control
        ml-3
        mr-3
        block
        w-full
        rounded
        border
        border-solid
        border-gray-300
        bg-white bg-clip-padding
        px-3 py-1.5 text-base
        font-normal
        text-gray-700
        transition
        ease-in-out
        focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none
      "
        placeholder="description"
        ref={refInputDescription}
        onChange={handleChange}
      ></input>
      <button
        type="submit"
        className="inline-block rounded bg-blue-600 px-6 py-2.5 text-sm font-medium leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
      >
        Create
      </button>
    </form>
  );
};
