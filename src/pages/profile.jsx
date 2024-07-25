import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/ProfileHeader';

const Profile = () => {
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [currentBlogId, setCurrentBlogId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://hashbackend.onrender.com/api/v1/blog/bulk?filter", {
          headers: {
            authorization: 'Bearer ' + token
          }
        });
        const userBlogs = response.data.posts.filter(blog => blog.author === userId);
        setBlogs(userBlogs);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [userId, token ,showModal]);

  const handleCreatePost = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://hashbackend.onrender.com/api/v1/blog", 
        {
          userId,
          title,
          content
        }, 
        {
          headers: {
            authorization: 'Bearer ' + token,
            'Content-Type': 'application/json'
          }
        }
      );
      if (response.status === 200) {
        console.log('Post created:', response.data);
      } else {
        alert("Failed to create post");
      }
    } catch (error) {
      console.error("Error creating post:", error);
      alert("Failed to create post");
    }
    setShowModal(false); // Close the modal after creating the post
    setTitle(''); // Clear the title state
    setContent(''); // Clear the content state
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://hashbackend.onrender.com/api/v1/Updateblog",
        {
          userId,
          postId: currentBlogId,
          title,
          content
        },
        {
          headers: {
            authorization: 'Bearer ' + token
          }
        }
      );

      if (response.status === 200) {
        setBlogs(blogs.map(blog => blog._id === currentBlogId ? response.data.post : blog));
        setShowUpdateModal(false);
      } else {
        alert("Failed to update post");
      }
    } catch (error) {
      console.error("Error updating post:", error);
      alert("Failed to update post");
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this post?");
    if (!confirmDelete) return;

    try {
      await axios.delete("https://hashbackend.onrender.com/api/v1/deleteblog", {
        data: { userId, postId: id },
        headers: {
          authorization: 'Bearer ' + token
        }
      });
      setBlogs(blogs.filter(blog => blog._id !== id));
    } catch (error) {
      console.error("Error deleting blog:", error);
      alert("Failed to delete blog");
    }
  };

  return (
    <>
      <Header />
      <div className="container mx-auto py-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold ml-5">My Blogs</h1>
          <button
            onClick={() => setShowModal(true)}
            className="p-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition flex items-center mr-5"
          >
            <FontAwesomeIcon icon={faPlus} className="mr-2" />
            Create a Post
          </button>
        </div>
        {loading && <p className="text-center">Loading...</p>}
        {error && <p className="text-center text-red-500">Error: {error}</p>}
        <div className="grid gap-6">
          {blogs.map(blog => (
            <div key={blog._id} className="m-5 bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
              <div className="bg-gradient-to-r from-stone-400 via-lime-200 to-cyan-500 p-4 flex justify-between items-center">
                <h2 className="text-xl font-bold text-white">{blog.title}</h2>
                <div className="flex space-x-2">
                  <button
                    onClick={() => {
                      setCurrentBlogId(blog._id);
                      setTitle(blog.title);
                      setContent(blog.content);
                      setShowUpdateModal(true);
                    }}
                    className="bg-stone-500 p-2 rounded-full hover:bg-blue-600 transition"
                  >
                    <FontAwesomeIcon icon={faEdit} className="text-white" />
                  </button>
                  <button
                    onClick={() => handleDelete(blog._id)}
                    className="bg-gray-600 p-2 rounded-full hover:bg-gray-800 transition"
                  >
                    <FontAwesomeIcon icon={faTrash} className="text-white" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">{blog.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 w-11/12 md:w-1/2 lg:w-1/3 transition-transform transform hover:scale-105">
            <h2 className="text-3xl font-bold mb-6 text-center text-gradient-to-r from-blue-500 via-green-500 to-purple-500">Create a New Post</h2>
            <form onSubmit={handleCreatePost}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2 text-lg" htmlFor="title">Title</label>
                <input
                  type="text"
                  id="title"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2 text-lg" htmlFor="content">Content</label>
                <textarea
                  id="content"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows="5"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-stone-500 text-white rounded-lg hover:from-stone-500 hover:to-blue-500 transition"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {showUpdateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 w-11/12 md:w-1/2 lg:w-1/3 transition-transform transform hover:scale-105">
            <h2 className="text-3xl font-bold mb-6 text-center text-gradient-to-r from-blue-500 via-green-500 to-purple-500">Update Post</h2>
            <form onSubmit={handleUpdate}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2 text-lg" htmlFor="title">Title</label>
                <input
                  type="text"
                  id="title"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2 text-lg" htmlFor="content">Content</label>
                <textarea              id="content"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows="5"
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              onClick={() => setShowUpdateModal(false)}
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-stone-500 text-white rounded-lg hover:from-stone-500 hover:to-blue-500 transition"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
      )}
      
</>


  );
};

export default Profile;
