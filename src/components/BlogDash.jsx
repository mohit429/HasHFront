import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  const [posts, setPosts] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [authorNames, setAuthorNames] = useState({}); // State to store author names

  useEffect ( () => {
    setLoading(true);
    axios.get("https://hashbackend.onrender.com/api/v1/blog/bulk?filter=" + searchValue, {
      headers: {
        authorization: 'Bearer ' + token
      }
    })
      .then(async (response) => {
        const fetchedPosts = response.data.posts;
        const authorIds = fetchedPosts.map(post => post.author);
        const uniqueAuthorIds = Array.from(new Set(authorIds)); // Get unique author IDs
        const authorNamesMap = {};
        // Fetch author names for each unique author ID
        await Promise.all(uniqueAuthorIds.map(async (authorId) => {
          try {
            const authorResponse = await axios.post(
              "https://hashbackend.onrender.com/api/v1/namewithauthId",
              { id: authorId },
              {
                headers: {
                  authorization: 'Bearer ' + token,
                  'Content-Type': 'application/json'
                }
              }
            );
            authorNamesMap[authorId] = authorResponse.data.name;
          } catch (error) {
            console.error(`Error fetching author name for ID ${authorId}:`, error);
            authorNamesMap[authorId] = 'Unknown Author'; // Handle error case
          }
        }));

        // Update state with fetched posts and author names
        setPosts(fetchedPosts);
        setAuthorNames(authorNamesMap);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [searchValue , showModal]);

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
        window.location.reload();
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

  return (
    <>
      <ul className='flex justify-center m-5'>
        <li className='shadow-md rounded-full m-3'>
          <input
            type="text"
            className="p-3 rounded-full text-gray-800"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search for Post ..."
          />
        </li>
        <li className='m-3'>
          <button
            onClick={() => setSearchValue(searchValue)}
            className="p-4 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition flex items-center"
          >
            <FontAwesomeIcon icon={faSearch} className="text-lg" />
          </button>
        </li>
        <li className='m-3'>
          <button
            onClick={() => setShowModal(true)}
            className="p-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition flex items-center"
          >
            <FontAwesomeIcon icon={faPlus} className="mr-2" />
            Create a Post
          </button>
        </li>
      </ul>
      <main className="bg-gray-100 min-h-screen py-6">
        {loading && <p className="text-center">Loading...</p>}
        {error && <p className="text-center text-gray-700">Error: {error}</p>}
        <div className="container mx-auto grid gap-6">
          {posts.map(post => (
            <div key={post._id} className="m-5 bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
              <div className="bg-gradient-to-r from-stone-400 via-lime-200 to-cyan-500 p-4">
                <h2 className="text-xl font-bold text-white">{post.title}</h2>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">{post.content}</p>
                <div className="flex justify-between items-center text-gray-500 text-sm">
                  <span className="flex items-center">
                    <FontAwesomeIcon icon={faUser} className="mr-1" />
                    {authorNames[post.author] || 'Unknown Author'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
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
    </>
  );
};

export default Header;
