import React from 'react';

const BlogSection = () => {
  return (
    <section id="blog" className="blog-section py-20 bg-gray-200">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Featured Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Replace with your post components */}
          <div className="post bg-white rounded-lg p-6 shadow-md">
            <img src="path/to/post1-thumbnail.jpg" alt="Post 1" className="rounded-lg mb-4" />
            <h3 className="text-xl font-bold mb-2">Post Title 1</h3>
            <p className="text-gray-700">Brief excerpt or description of the post.</p>
          </div>
          <div className="post bg-white rounded-lg p-6 shadow-md">
            <img src="path/to/post2-thumbnail.jpg" alt="Post 2" className="rounded-lg mb-4" />
            <h3 className="text-xl font-bold mb-2">Post Title 2</h3>
            <p className="text-gray-700">Brief excerpt or description of the post.</p>
          </div>
          <div className="post bg-white rounded-lg p-6 shadow-md">
            <img src="path/to/post3-thumbnail.jpg" alt="Post 3" className="rounded-lg mb-4" />
            <h3 className="text-xl font-bold mb-2">Post Title 3</h3>
            <p className="text-gray-700">Brief excerpt or description of the post.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
