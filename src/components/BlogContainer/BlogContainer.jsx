import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Blogs from '../Blogs/Blogs'

const BlogContainer = ({ handleBookmark, handleMarkReadBtn, isBookmarksActive }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch(
          `https://api.jsonbin.io/v3/b/67177778e41b4d34e446ddbf`
        );
        if (!res.ok) {
          throw new Error("Network not respond");
        }
        const data = await res.json();
        setBlogs(data.record.blogs);
      } catch (error) {}
    };
    loadData();
  }, []);

  return (
    <div className="col-span-2">
      {blogs.map((blog) => (
        <Blogs
          key={blog.id}
          blogs={blog}
          handleBookmark={handleBookmark}
          handleMarkReadBtn={handleMarkReadBtn}
          isBookmarksActive={isBookmarksActive}
        />
      ))}
    </div>
  );
};

BlogContainer.propTypes = {
  handleBookmark: PropTypes.func.isRequired,
  handleMarkReadBtn: PropTypes.func.isRequired,
  isBookmarksActive: PropTypes.array.isRequired
};

export default BlogContainer
